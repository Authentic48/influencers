import express from 'express'
import {protect, admin, influencer} from '../middleware/authMiddleware.js'
import { getProfile, createProfile, updatedProfile, getProfileById, deleteProfile } from '../Controllers/profileController.js'

const router = express.Router()

router.route('/').get(getProfile)

router.route('/profile/create').post(protect, influencer, createProfile)

router.route('/profile/:id')
.get( getProfileById)
.put(protect, influencer, updatedProfile)
.delete(protect, admin, deleteProfile)


export default router;