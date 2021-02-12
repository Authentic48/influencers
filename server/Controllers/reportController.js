import User from '../models/userModel.js'
import  Report from '../models/reportModel.js'
import asyncHandler from 'express-async-handler'

// @desc    Report
// @route   PUT /api/influencers/reports
// @access  Private / admin
export const getReports = asyncHandler(async (req, res) => {
    
    const reports = await Report.find({})
    res.json(reports)
    
})