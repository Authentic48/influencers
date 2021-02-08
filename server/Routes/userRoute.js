import express from 'express'
import { authUser, getUserProfile, registerUser } from '../Controllers/authController.js'
import {protect} from '../middleware/authMiddleware.js'
const router = express.Router()

router.post('/login', authUser)
router.route('/register').post(registerUser)

router.route('/profile').get(protect, getUserProfile)

export default router;