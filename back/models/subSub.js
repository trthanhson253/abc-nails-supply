const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const subSubSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Name is required",
      text: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    category: { type: ObjectId, ref: "Category", required: true },
    sub: { type: ObjectId, ref: "Sub", required: true },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("subSub", subSubSchema);
