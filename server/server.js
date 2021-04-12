const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const dotenv = require('dotenv')
const passport = require('passport')
const session = require('express-session')
const connectDB = require('./config/db')
const colors = require('colors')
const authRoute = require('./routes/GoogleAuthRoute')
const userRouter = require('./routes/userRoute')
const profile = require('./routes/influencerRoute')
const report = require('./routes/GoogleAuthRoute')
const orderRoute = require('./routes/orderRoute')
const {errorHandler, notFound } = require('./middleware/errorHandler')

dotenv.config()

connectDB()
dotenv.config()

const app = express()

// Passport config
require('./config/passport')(passport)

// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
    //   store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )

if(process.env.NODE_ENV === 'development')
{
    app.use(morgan('dev'))
}
app.use(express.json())
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/users', userRouter)
app.use('/api/influencers', profile)
app.use('/api/reports', report)
// app.use('/api/upload', uploadRoute)
app.use('/auth', authRoute)
app.use('/api/orders', orderRoute)



const PORT = process.env.PORT || 5000;

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, console.log(`app is runing in ${process.env.NODE_ENV} on port ${PORT}` .blue.underline ))
