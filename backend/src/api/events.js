import { Router } from "express";


const ticketmasterApiToken = process.env.TICKETMASTER_API_KEY

export const eventRouter = Router()

//TODO change URL to accept search query parameters
eventRouter.get("/", async (req, res) => {
  try {
    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=${ticketmasterApiToken}&locale=*&countryCode=IT&segmentName=Music&page=${Math.max(req.query.page-1||0, 0)}&size=${Math.max(req.query.itemsPerPage||20, 5)}&keyword=${req.query.search||''}`)
    const data = await response.json()
    res.status(200).json(data);
  } catch (error) {
    response.status(500).send({
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
})

