const express = require('express')
const { protect, admin, influencer } = require('../middleware/authMiddleware.js')
const { getProfile, createProfile, updatedProfile, getProfileById, deleteProfile, revewProfile, getProfiles } = require('../Controllers/profileController.js')

const router = express.Router()

router.route('/').get(getProfile)

router.route('/profile/create').post(protect, influencer, createProfile)

router.route('/profile/:id/reviews').post(protect, revewProfile)

router.route('/profile/:id')
.get( getProfileById)
.put(protect, influencer, updatedProfile)
.delete(protect, admin, deleteProfile)

router.route('/profile').get(protect,  getProfiles)


module.exports = router;