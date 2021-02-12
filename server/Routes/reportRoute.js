import express from 'express'
import {protect, admin, influencer} from '../middleware/authMiddleware.js'
import { getReports } from '../Controllers/reportController.js'

const router = express.Router()

router.route('/reports').get(protect, getReports)

export default router;