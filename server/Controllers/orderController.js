const User = require('../models/userModel.js')
const Influencer = require('../models/influencerModel.js')
const asyncHandler = require('express-async-handler')

// @desc    Order
// @route   PUT /api/order/create
// @access  Private
const createOrder = asyncHandler(async (req, res) => {
    
    res.json("this from the create controller")
})

module.exports = { createOrder }