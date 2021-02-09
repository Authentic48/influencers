import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import {generateWebToken} from '../utility/generateWebToken.js'


// @desc   Auth user & get Token
//@route   POST /api/users/login
//@Access  Public
export  const authUser = asyncHandler (async (req, res) =>{
   const {email, password} = req.body;

   const user = await User.findOne({email})

   if (user && (await user.matchPassword(password))){
      res.json({
         _id : user._id,
         email: user.email,
         name: user.name,
         isAdmin: user.isAdmin,
         isInfluencer: user.isInfluencer,
         token: generateWebToken(user._id)

      })
   }else{
      res.status(401);
      throw new Error('Invalid Email or/and Password')
   }
})

// @desc   register new user 
//@route   GET /api/users
//@Access  Public
export const registerUser = asyncHandler (async (req, res) =>{
   const {name, email, password} = req.body;

   const userExist = await User.findOne({email})
   if(userExist) {
      res.status(400)
      throw new Error("User's already exist")
   }
   const user = await User.create({
      name,
      email,
      password,
   })
   if (user){
      res.status(201).json({
         id : user._id,
         email: user.email,
         name: user.name,
         isAdmin: user.isAdmin,
         isInfluencer: user.isInfluencer,
         token: generateWebToken(user._id)
      })
   }else{
      res.status(400)
      throw new Error('Incorrect Data')
   }
})

// @desc   register new user 
//@route   GET /api/users
//@Access  Public
export const getUserProfile = asyncHandler (async (req, res) =>{
   
   const user = await User.findById(req.user._id)
   if(user)
   {
      res.json({
         id : user._id,
         email: user.email,
         name: user.name,
         isAdmin: user.isAdmin,
         isInfluencer: user.isInfluencer,
      })

   }else{
      res.status(404)
      throw new Error('User not found')
   }

})

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
export const updateUserProfile = asyncHandler(async (req, res) => {
   const user = await User.findById(req.user._id)
 
   if (user) {
     user.name = req.body.name || user.name
     user.email = req.body.email || user.email
     if (req.body.password) {
       user.password = req.body.password
     }
 
     const updatedUser = await user.save()
 
     res.json({
       _id: updatedUser._id,
       name: updatedUser.name,
       email: updatedUser.email,
       isAdmin: updatedUser.isAdmin,
       token: generateWebToken(updatedUser._id),
     })
   } else {
     res.status(404)
     throw new Error('User not found')
   }
})

// @desc    Get all Users
// @route   GET /api/users
// @access  Private/Admin
export const getUsers = asyncHandler(async (req, res) => {
   const users = await User.find({})
 
   res.json(users)
 
})

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
export const deleteUser = asyncHandler(async (req, res) => {
   const user = await User.findById(req.params.id)

   if(user){
      await user.remove()
      res.json({message : "user has Been deleted"})

   }else{
      res.status(404)
      res.json({message : "User Not Found"})
   }
})

// @desc    Get User By id
// @route   GET /api/users/:id
// @access  Private/Admin
export const getUserById = asyncHandler(async (req, res) => {
   const user = await User.findById(req.params.id).select('-password')
 
   if(user){
      res.json(user)
   }else{
      res.status(404)
      res.json({message : "User Not Found"})
   }
})



// @desc    Admin Updates user 
// @route   PUT /api/users/:id
// @access  Private/Admin
export const updateUser = asyncHandler(async (req, res) => {
   const user = await User.findById(req.params.id)
 
   if (user) {
     user.name = req.body.name || user.name
     user.email = req.body.email || user.email
     user.isAdmin = req.body.isAdmin,
     user.isInfluencer = req.body.isInfluencer
 
     const updatedUser = await user.save();
 
     res.json({
       _id: updatedUser._id,
       name: updatedUser.name,
       email: updatedUser.email,
       isAdmin: updatedUser.isAdmin,
       isInfluencer: updatedUser.isInfluencer,
       token: generateWebToken(updatedUser._id),
     })
   } else {
     res.status(404)
     throw new Error('User not found')
   }
})


