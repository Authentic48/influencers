import express from 'express';
import connectDB from './Config/db.js'
import dotenv from 'dotenv'
import userRouter from './Routes/userRoute.js'
import profile from './Routes/influencerRoute.js'
import report from './Routes/reportRoute.js'

import uploadRoute from './Routes/uploadRoute.js'
import path from 'path'

import { notFound, errorHandler } from './middleware/errorHandler.js'
import morgan from 'morgan'

connectDB()

dotenv.config()

const app = express()



if(process.env.NODE_ENV === 'development')
{
    app.use(morgan('dev'))
}
app.use(express.json())

app.use('/api/users', userRouter)
app.use('/api/influencers', profile)
app.use('/api/reports', report)

app.use('/api/upload', uploadRoute)

const PORT = process.env.PORT || 5000;

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, console.log(`app is runing in ${process.env.NODE_ENV} on port ${PORT}` .blue.underline ))
