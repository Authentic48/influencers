const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  influencer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Influencer",
  },
  package: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  fee: {
    type: Number,
    required: true,
    default: 0,
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  businessName: {
    type: String,
    required: true,
  },
  businessDetails: {
    type: String,
    required: false,
  },
  website: {
    type: String,
    required: false,
  },
  instagram: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isPaid: {
    type: Boolean,
    required: true,
    default: false,
  },
  paidAt: {
    type: Date,
  },
  paymentMethod: {
    type: String,
    required: false,
  },
  paymentResult: {
    id: { type: String },
    status: { type: String },
    updated_time: { type: String },
    email_address: { type: String },
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
