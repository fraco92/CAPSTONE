import { Router } from "express";
import { eventRouter } from "./events.js";
import { authRouter } from "./auth.js";
import { favouritesRouter } from "./favourites.js";

export const apiRouter = Router()

apiRouter.use("/events", eventRouter)
apiRouter.use("/auth", authRouter)
apiRouter.use("/favourites", favouritesRouter)