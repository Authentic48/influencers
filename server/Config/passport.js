const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: process.env.REDIRECT_URL,
      },
      asyncHandler (async (accessToken, refreshToken, profile, done) => {

        //console.log(profile)
        const newUser = {
          id: profile.id,
          name: profile.displayName,
          email: profile.name.givenName,

        }
        let user = await User.findOne({ id: profile.id })
        
        if (user) {
            done(null, user)
        } else {
            user = await User.create(newUser)
            done(null, user)
        }
      }
    ))
  )

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user))
  })
}
