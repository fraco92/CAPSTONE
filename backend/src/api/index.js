import { Router } from "express";
import { eventRouter } from "./events.js";
import { authRouter } from "./auth.js";
import { favouritesRouter } from "./favourites.js";
import { commentRouter } from "./comment.js";

export const apiRouter = Router()

apiRouter.use("/events", eventRouter)
apiRouter.use("/auth", authRouter)
apiRouter.use("/favourites", favouritesRouter)
apiRouter.use('/comments', commentRouter)