import { Router } from "express";
import { dbClient } from "../db";
import {authMiddleware} from "../middleware/auth.js"

export const favouritesRouter = Router();

favouritesRouter.use(authMiddleware)

favouritesRouter.get("/", async (req, res) => {
  try {
   const favourites = await dbClient.favouriteEvent.findMany({
      where: {
         userId: req.user.id
      }      
   }) 
   res.status(200).json(favourites)
  } catch (error) {
      res.status(500).json({
         statusCode: 500,
         message: "Internal Server Error",
      });
   }
})

favouritesRouter.post("/", async (req, res) => {
  try {
    const userId = req.user.id
    await dbClient.favouriteEvent.create({
      data: {
        User: {
          connect: {
            id: userId
          }
        },
        artistName: req.body.artistName,
        cityName: req.body.cityName,
        eventDate: req.body.eventDate,
        eventImage: req.body.eventImage,
        eventName: req.body.eventName,
        id: req.body.id,
        venueName: req.body.venueName
      }
    })
    res.status(201).json({
      message: "Event added to favourites"
    })
  } catch (error) {
    res.status(400).json({
      message: "Event already in favourites"
    })
  }
})

favouritesRouter.delete("/", async (req, res) => {
  try {
    const userId = req.user.id
    await dbClient.favouriteEvent.delete({
      where: {
        userId: userId,
        id: req.body.id
      }
    })
    res.status(200).json({
      message: "Event removed from favourites"
    })
  } catch (error) {
    res.status(400).json({
      message: "Event not in favourites"
    })
  }
})