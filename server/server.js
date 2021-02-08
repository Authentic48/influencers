import express from 'express';
import connectDB from './Config/db.js'
import dotenv from 'dotenv'
import userRouter from './Routes/userRoute.js'

connectDB()

const app = express()

app.use(express.json())

app.use('/api/users', userRouter)

app.listen(5000, console.log('app is running on port 5000'))
