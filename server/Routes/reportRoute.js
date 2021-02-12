import express from 'express'
import {protect, admin, influencer} from '../middleware/authMiddleware.js'
import { getReports, getReportById } from '../Controllers/reportController.js'

const router = express.Router()

router.route('/').get(protect, getReports)
router.route('/:id').get(protect, getReportById)

export default router;