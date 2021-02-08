
import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'

// @desc    Influencer
// @route   PUT /api/influencers/:id
// @access  Private/Influencers
export const profile = asyncHandler(async (req, res) => {
    res.send('This for influencer only')
 })