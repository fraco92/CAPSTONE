import { Router } from "express";
import jwt from "jsonwebtoken";
import { dbClient } from "../db.js";
import bcrypt from "bcrypt"

const JWTSecretKey = process.env.JWTSecretKey

export const authRouter = Router()

authRouter.get("/", (req, res) => {
  res.send("Auth API.\nPlease use POST /api/auth & POST /api/auth/verify for authentication")
})

//sign up endpoint
authRouter.post("/signup", async (req, res) => {
  const {email, password, username, name, surname} = req.body

  try {
    const hashedPassword = await bcrypt.hash(password, 10)
  
    await dbClient.user.create({
    data: {
      email, 
      password: hashedPassword,
      username,
      name,
      surname
    }})
    const loginData = {
      email, signInTime: Date.now()
    }
    const token = jwt.sign(loginData, JWTSecretKey)
    res.status(201).json({message: "Utente creato correttamente", token})
  } catch (error) {
    res.status(400).json({message: "Errore"})
  }
  
  
})

//auth endpoint
authRouter.post("/", async (req, res) => {
const { email, password } = req.body

console.log("Questa pw:", password)

const user = await dbClient.user.findUnique({where:{email}})


if (user) {
  bcrypt.compare(password, user.password, (err, result) => {
    
    if(!result) {
      console.error(err)
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

// verify endpoint (verifica la validità del token JWT fornito)

authRouter.post("/verify", async (req, res) => {
  const tokenHeaderKey = 'jwt-token'
  const { token } = req.headers[tokenHeaderKey]
  try {
    const decoded = jwt.verify(token, JWTSecretKey)
    res.status(200).json({status: 'logged in', message: "Token valido", decoded})
  } catch (err) {
    res.status(401).json({status: 'invalid auth', message: "Token non valido"})
  }
})

// An endpoint to see if there's an existing account for a given email address

authRouter.post("/check", async (req, res) => {
  const { email } = req.body

console.log(req.body);

  const user = await dbClient.user.findUnique({where:{email}})
  
  res.status(200).json({
        userExists: !!user
  })
})