import express from "express"
import { PrismaClient } from '@prisma/client'
import { apiRouter } from "./api/index.js";
import { dbClient } from "./db.js";
import cors from "cors"

const server = express()

const PORT = process.env.PORT || 3030;


server.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


server.get("/", (req, res) => {
  res.send("Hello World!")
})

server.use("/api", apiRouter)

server.listen(PORT, () => {
  console.log(`Server started at port http://localhost:${PORT}`);
})

//Query
// const users = await prisma.user.findUnique({where: {username: "fraco92", email: "fraco92@gmail.com"}})
// console.log(users);