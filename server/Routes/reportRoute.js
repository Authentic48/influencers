import express from 'express'
import {protect, admin, influencer} from '../middleware/authMiddleware.js'
import { getReports, getReportById, createReport} from '../Controllers/reportController.js'

const router = express.Router()

router.route('/').get(protect, admin, getReports)
router.route('/:id').get(protect, admin, getReportById)
router.route('/create').post(protect, createReport)

export default router;