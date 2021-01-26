const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const cartSchema = new mongoose.Schema(
  {
    products: [
      {
        product: {
          type: ObjectId,
          ref: "Product",
        },
        count: Number,
        // color: String,
        // price: Number,
      },
    ],
    // If 0 thi cong them 8 dong tien shipping, con neu la 1 thi ko cong
    //ship: 0
    //pickup:1
    shipOption: {
      type: Number,
      default: 0,
    },
    cartTotalBeforeTax: Number,
    cartTotal: Number,
    totalAfterDiscount: Number,
    orderdBy: { type: ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
