const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        product: {
          type: ObjectId,
          ref: "Product",
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
      // 5: "Request for cancel order"
      // 6: "Cancelled completed",
      // 7: "Request for return",
      // 8: "Return Completed"
    },
    reason: [
      {
        name: {
          type: String,
        },
        date: { type: Date },
      },
    ],
    deliveryId: { type: String },
    orderdBy: { type: ObjectId, ref: "User" },
    //chú ý chỗ này viết sai chính tả
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
