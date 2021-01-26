const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const orderUpdateSchema = new mongoose.Schema(
  {
    name: {
      type: Number,
      default: 0,
    },
    order: { type: ObjectId, ref: "Order" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("OrderUpdate", orderUpdateSchema);
