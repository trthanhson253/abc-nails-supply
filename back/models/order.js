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
    orderStatus: {
      type: Number,
      default: 0,
      // 0: "Waiting for Process",
      // 1: "Confirmed,
      // 2: "processing",
      // 3: "Prepare for shipping",
      // 4: "Shipped",
      // 5: "Completed",
      // 6:"Ready for pickup at store"
      // 7:Cancelled
    },
    orderdBy: { type: ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
