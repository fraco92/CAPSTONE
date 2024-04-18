import { Router } from "express";
import { eventRouter } from "./events.js";

export const apiRouter = Router()

apiRouter.use("/events", eventRouter)