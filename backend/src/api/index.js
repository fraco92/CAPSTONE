import { Router } from "express";
import { eventRouter } from "./events.js";
import { authRouter } from "./auth.js";

export const apiRouter = Router()

apiRouter.use("/events", eventRouter)
apiRouter.use("/auth", authRouter)