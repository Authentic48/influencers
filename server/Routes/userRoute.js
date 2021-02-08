import express from 'express'
import { authUser, getUserProfile, registerUser, updateUserProfile, getUsers } from '../Controllers/authController.js'
import {protect, admin} from '../middleware/authMiddleware.js'
const router = express.Router()

router.post('/login', authUser)

router.route('/register').post(registerUser)

router.route('/').get(protect, admin, getUsers)

router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)

export default router;