
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

