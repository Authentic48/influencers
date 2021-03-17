const express = require('express')
const {protect, admin, influencer} = require('../middleware/authMiddleware.js')
const { getReports, getReportById, createReport} = require('../Controllers/reportController.js')

const router = express.Router()

router.route('/').get(protect, admin, getReports)
router.route('/:id').get(protect, admin, getReportById)
router.route('/create').post(protect, createReport)

module.exports = router;