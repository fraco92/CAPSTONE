import { Router } from "express";
import { request } from "http";

const ticketmasterApiToken = process.env.TICKETMASTER_API_KEY

export const eventRouter = Router()

eventRouter.get("/", async (req, res) => {
  try {
    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=${ticketmasterApiToken}&locale=*&countryCode=IT&segmentName=Music&page=${req.query.page || 0}`)
    const data = await response.json()
    res.status(200).json(data._embedded);
  } catch (error) {
    response.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }

})

