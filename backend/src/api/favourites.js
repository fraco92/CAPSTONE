import { Router } from "express";
import { dbClient } from "../db.js";
import {authMiddleware} from "../middleware/auth.js"

export const favouritesRouter = Router();

favouritesRouter.use(authMiddleware)

favouritesRouter.get("/", async (req, res) => {

  try {
   const favourites = (await dbClient.favouriteEvent.findMany({
      where: {
         userId: req.user.userId
      }      
   })).map(favourite => ({id: favourite.eventId, artistName: favourite.artistName, cityName: favourite.cityName, eventDate: favourite.eventDate, eventImage: favourite.eventImage, eventName: favourite.eventName, venueName: favourite.venueName})) 
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
    const userId = req.user.userId
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
        eventId: req.body.id,
        venueName: req.body.venueName
      }
    })
    res.status(201).json({
      message: "Event added to favourites"
    })
  } catch (error) {
    console.log(error) 
    res.status(400).json({
      message: "Event already in favourites"
    })
  }
})

favouritesRouter.delete("/", async (req, res) => {
  try {
    const userId = req.user.userId
    await dbClient.favouriteEvent.delete({
      where: {
        userId: userId,
        eventId: req.body.id
      }
    })
    res.status(200).json({
      message: "Event removed from favourites"
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      message: "Event not in favourites"
    })
  }
})