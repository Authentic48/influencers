import express from 'express'
import {protect, admin, influencer} from '../middleware/authMiddleware.js'
import { getProfile, createProfile } from '../Controllers/profileController.js'

const router = express.Router()

router.route('/').get(getProfile)

router.route('/profile/create').post(protect, influencer, createProfile)

export default router;