
import User from '../models/userModel.js'
import Influencer from '../models/influencerModel.js'
import asyncHandler from 'express-async-handler'
import { influencer } from '../middleware/authMiddleware.js'

// @desc    Influencer
// @route   PUT /api/influencers
// @access  Public/Influencers
export const getProfile = asyncHandler(async (req, res) => {
    
    const influencers = await Influencer.find({})
 
    res.json(influencers)
})

// @desc    Influencer
// @route   PUT /api/influencers
// @access  Private/Influencers
export const updatedProfile = asyncHandler(async (req, res) => {

    const profile = await Influencer.findById(req.params.id)

    if(profile)
    {
        profile.name = req.body.name || profile.name 
        profile.city = req.body.city || profile.city 
        profile.name = req.body.name || profile.name 
        profile.image = req.body.image || profile.image 
        profile.bio = req.body.bio || profile.bio 
        profile.price = req.body.price || profile.price 
        profile.category = req.body.category || profile.category 
        profile.fbAccount = req.body.fbAccount || profile.fbAccount 
        profile.fbFriends = req.body.fbFriends || profile.fbFriends 
        profile.instAccount = req.body.instAccount || profile.instAccount 
        profile.instFollowers = req.body.instFollowers || profile.instFollowers 
        profile.youtubeAccount = req.body.youtubeAccount || profile.youtubeAccount 
        profile.youtubeSubscribers = req.body.youtubeSubscribers || profile.youtubeSubscribers 

        const updatedInfluencer = await profile.save();
  
        res.status(201).json(updatedInfluencer)
    }
        
   
})

// @desc    Influencer
// @route   PUT /api/influencers
// @access  Private/Influencers
export const createProfile = asyncHandler(async (req, res) => {
    
    const {name, image, bio, city, price, category, fbAccount, fbFriends, instAccount, instFollowers, youtubeAccount, youtubeSubscribers} = req.body;
    const influencer = new Influencer({
        user: req.user._id,
        city,
        name,
        image,
        bio,
        price,
        category,
        fbAccount,
        fbFriends,
        instAccount,
        instAccount,
        instFollowers,
        youtubeAccount,
        youtubeSubscribers,
        
    })    
    const createdInfluencer = await influencer.save();
  
    res.status(201).json(createdInfluencer)
})

// @desc    Influencer
// @route   GET /api/influencers/:id
// @access  Public/Influencers
export const getProfileById = asyncHandler(async (req, res) => {
    
    const influencer = await Influencer.findById(req.params.id)
    if(influencer)
    {
      res.json(influencer)
    }else{
        res.status(404)
        throw new Error('Profile not found')
    }
})

// @desc    Influencer
// @route   GET /api/influencers/:id
// @access  Public/Influencers
export const deleteProfile = asyncHandler(async (req, res) => {
    
    const influencer = await Influencer.findById(req.params.id)
    if(influencer){
        await influencer.remove()
        res.json({message : "profile has Been deleted"})
    }else{
        res.status(404)
        res.json({message : "profile Not Found"})
    }
   
    res.json(influencers)
})


