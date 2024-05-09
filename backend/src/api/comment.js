import { Router } from 'express'
import { authMiddleware } from '../middleware/auth.js'
import { dbClient } from '../db.js'

export const commentRouter = Router()

commentRouter.get('/:eventId', async (req, res) => {
  const comments = await dbClient.comment.findMany({
    where: {
      eventId: req.params.eventId
    },
    include:{
      User: {
        select: {
          username:true,
          email: true
        }
      }
    }
  })
  res.json(comments)
})

commentRouter.use(authMiddleware)

commentRouter.post('/:eventId', async (req, res) => {
  try {
    const newComment = await dbClient.comment.create({
      data: {
        eventId: req.params.eventId,
        comment: req.body.comment,
        User: {
          connect: {
            id: req.user.userId
          }
        }
      },
      include: {
        User: {
          select: {
            username: true,
            email: true
          }
      }
    }
  })

    res.status(200).json({ message: 'comment created', data: newComment })
  } catch (e) {
    res.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
})

commentRouter.delete('/:commentId', async (req, res) => {
  const userId = req.user.userId
  try {
    await dbClient.comment.delete({
      where: {
        id: req.params.commentId,
        userId
      }
    })

    res.status(200).json({ message: 'comment deleted' })
  } catch (e) {
    console.error(e)
    res.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
})

