const Report = require('../models/reportModel.js')
const asyncHandler = require('express-async-handler')

// @desc    Report
// @route   PUT /api/reports
// @access  Private / admin
const getReports = asyncHandler(async (req, res) => {
    
    const reports = await Report.find({})

    res.json(reports)
    
})

// @desc    Report
// @route   PUT /api/reports/:id
// @access  Private / admin
const getReportById = asyncHandler(async (req, res) => {
    
    const report = await Report.findById(req.params.id)
    if(report)
    {
        res.json(report)
    }else{
        res.status(404)
        throw new Error('Report not found')
    }
 
})

// @desc    Report
// @route   POST /api/reports/create
// @access  Private /
const createReport = asyncHandler(async (req, res) => {
    
    const { description, infName, influencer } = req.body;

    const report = new Report({

     name: req.user.name,
     user:req.user._id,
     email:req.user._id,
     description,
     infName,
     influencer

    })

    await report.save()

    res.send(`Report sent successfully, we will get in touch with you shortly`)
 
})

module.exports = { createReport, getReportById, getReports }
