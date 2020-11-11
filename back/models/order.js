const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        product: {
          type: ObjectId,
          ref: 'Product',
        },
        count: Number,
      },
    ],
    paymentIntent: {},
    trackId: String,
    orderStatus: {
      type: Number,
      default: 0,
      // 0: "Order Received",
      // 1: "processing,
      // 2: "Shipped",
      // 3: "Completed",
      // 4: "Ready for pickup at store",
      // 5: "Cancelled",
    },
    orderdBy: { type: ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
