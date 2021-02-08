
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
    
    const influencer = new Influencer({
        user: req.user._id,
        name: req.user.name,
        image: req.influencer.image,
        bio: req.influencer.bio,
        price: req.influencer.price,
        category: req.influencer.category,
        fbAccount: req.influencer.fbAccount,
        fbFriends: req.influencer.fbFriends,
        instAccount: req.influencer.instAccount,
        instAccount: req.influencer.instAccount,
        instFollowers: req.influencer.instFollowers,
        youtubeAccount: req.influencer.youtubeAccount,
        youtubeSubscribers: req.influencer.youtubeSubscribers,
    })
    const createdInfluencer = await influencer.save();
  
    res.status(201).json(createdInfluencer)
})