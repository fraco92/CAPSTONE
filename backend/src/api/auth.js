import { Router } from "express";
import jwt from "jsonwebtoken";
import { dbClient } from "../db";
import bcrypt from "bcrypt"
import { Sign } from "crypto";

const JWTSecretKey = process.env.JWTSecretKey

export const authRouter = Router()

authRouter.get("/", (req, res) => {
  res.send("Auth API.\nPlease use POST /api/auth & POST /api/auth/verify for authentication")
})

authRouter.post("/", async (req, res) => {
const { email, password } = req.body

const user = await dbClient.user.findUnique({where:{email}})

if (user) {
  bcrypt.compare(password, user.password, (err, result) => {
    if(!result) {
       res.status(401).json({message: "Password errata"}) 
    } else {
      let loginData = {
        email, signInTime: Date.now()
      }
      const token = jwt.sign(loginData, JWTSecretKey)
      res.status(200).json({message: "Password corretta", token})
    }
  })
} else {
  res.status(404).json({message: "L'utente non esiste"})
}
})