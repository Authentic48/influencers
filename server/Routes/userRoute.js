import express from 'express'
import { authUser, getUserProfile, registerUser, updateUserProfile, getUsers, getUserById, deleteUser,updateUser } from '../Controllers/authController.js'
import {protect, admin} from '../middleware/authMiddleware.js'
const router = express.Router()

router.post('/login', authUser)

router.route('/register').post(registerUser)

router.route('/').get(protect, admin, getUsers)

router.route('/profile')
.get(protect, getUserProfile)
.put(protect, updateUserProfile)

router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)

export default router;