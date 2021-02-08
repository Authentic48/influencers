import express from 'express';
import connectDB from './Config/db.js'
import dotenv from 'dotenv'

connectDB()

const app = express()

connectDB()

app.listen(5000, console.log('app is running on port 5000'))
