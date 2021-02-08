
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