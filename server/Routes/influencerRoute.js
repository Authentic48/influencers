import express from 'express'
import {protect, admin, influencer} from '../middleware/authMiddleware.js'
import { getProfile, getProfileById } from '../Controllers/profileController.js'

const router = express.Router()

router.route('/').get(getProfile)

export default router;