const User = require('../models/userModel.js')
const Influencer = require('../models/influencerModel.js')
const Order = require('../models/orderModel.js')
const asyncHandler = require('express-async-handler')

// @desc    Create New Order
// @route   POST /api/order/create
// @access  Private
const createOrder = asyncHandler(async (req, res) => {

    const { user, influencer, price, package, businessName, businessDetails, website, instagram, email, phone, paymentMethod } = req.body;

    const order = new Order({
        user,
        influencer,
        price, 
        package, 
        businessName, 
        businessDetails, 
        website, 
        instagram, 
        email, 
        phone, 
        paymentMethod

    })
    const createdOrder = await order.save();
    res.status(201).json(createdOrder)
})

// @desc   Get order by id
//@route   GET /api/orders/orderId
//@Access  Private/Admin
const getOrder = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)
    
      if (order) {
        res.json(order)
      } else {
        res.status(404)
        throw new Error('Order not found')
    }
   
})

// @desc   Get all Orders
//@route   GET /api/orders/orderId
//@Access  Private/Admin 
const getAllOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({  })
    
      if (orders) {
        res.json(orders)
      } else {
        res.status(404)
        throw new Error('No orders in DB')
    }
   
})

module.exports = { createOrder, getOrder, getAllOrders }