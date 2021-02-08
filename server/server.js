import express from 'express';
import connectDB from './Config/db.js'
import dotenv from 'dotenv'
import userRouter from './Routes/userRoute.js'
import { notFound, errorHandler } from './middleware/errorHandler.js'
import morgan from 'morgan'


connectDB()

dotenv.config()

const app = express()

app.use(express.json())

app.use('/api/users', userRouter)

const PORT = process.env.PORT|| 5000;

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, console.log(`app is runing in ${process.env.NODE_ENV} on port ${PORT}` .blue.underline ))
