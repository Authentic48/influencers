import express from 'express'
import {protect, admin, influencer} from '../middleware/authMiddleware.js'
import { getProfile, createProfile, updatedProfile, getProfileById } from '../Controllers/profileController.js'

const router = express.Router()

router.route('/').get(getProfile)

router.route('/profile/create').post(protect, influencer, createProfile)

router.route('/profile/:id').put(protect, influencer, updatedProfile)

router.route('/profile/:id').get( getProfileById)

export default router;