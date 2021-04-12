const express = require('express')
const { createOrder, getOrder, getAllOrders, updatePaidOrder } = require('../Controllers/orderController.js')
const { protect, admin, influencer} = require('../middleware/authMiddleware.js')

const router = express.Router()

router.route('/create').get(createOrder)
router.route('/:id').get(getOrder)
router.route('/').get(getAllOrders)
router.route('/:id/pay').put(protect, updatePaidOrder)

module.exports = router;