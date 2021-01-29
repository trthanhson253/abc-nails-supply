const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const orderUpdateSchema = new mongoose.Schema(
  {
    name: {
      type: Number,
      default: 0,
    },
    note: { type: String },
    order: { type: ObjectId, ref: "Order" },
    deliveryId: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("OrderUpdate", orderUpdateSchema);
