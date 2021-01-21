const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    order: { type: ObjectId, ref: "Order" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("OrderUpdate", orderSchema);
