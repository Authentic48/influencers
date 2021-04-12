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
    
    res.json(orders)
})

// @desc   Update order To PAid
//@route   PUT /api/orders/orderId/pay
//@Access  Private
const updatePaidOrder = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)
    
      if (order) {
        order.isPaid = true;
        order.paidAt = Date.now();
        order.paymentResult ={
          id: req.params.id,
          status : req.params.status,
          updated_time :req.params.updated_time,
          email_address:  req.params.email_address
        }
  
        const updatedOrder = await order.save();
  
        res.json(updatedOrder);
  
      } else {
        res.status(404)
        throw new Error('Order not found')
      }
   
  })

module.exports = { createOrder, getOrder, getAllOrders, updatePaidOrder }