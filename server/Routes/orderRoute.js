const express = require('express')
const { createOrder } = require('../Controllers/orderController.js')
const { protect, admin, influencer} = require('../middleware/authMiddleware.js')

const router = express.Router()

router.route('/create').get(createOrder)

module.exports = router;