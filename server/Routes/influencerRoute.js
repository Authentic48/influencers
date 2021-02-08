import express from 'express'
import { authUser, getUserProfile, registerUser, updateUserProfile, getUsers, getUserById, deleteUser,updateUser } from '../Controllers/authController.js'
import {protect, admin, influencer} from '../middleware/authMiddleware.js'
import {profile} from '../Controllers/profileController.js'
const router = express.Router()

router.route('/profile').get(protect, influencer, profile)

export default router;