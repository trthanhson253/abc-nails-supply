const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      text: true,
    },
    slug: {
      type: String,
      lowercase: true,
      index: true,
    },
    item: {
      type: String,
      trim: true,
      text: true,
      required: true
    },
    description: {
      type: {},
      min: 20,
      max: 2000000,
    },
    price: {
      type: Number,
      trim: true,
      maxlength: 32,
    },
    discountPrice: {
        type: Number,
        trim: true,
        maxlength: 32,
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: true
    },
    sub: {
      type: ObjectId,
      ref: "Sub",
    },
    subSub: {
      type: ObjectId,
      ref: "subSub",
    },
    quantity: {
      type: Number,
      default: 50,
    },
    sold: {
      type: Number,
      default: 0,
    },
    image: {
      type: Array,
    },
    shipping: {
      type: Number,
      default: 0, 
      //0: Yes
      //1: No
    },
    status: {
      type: Number,
      default: 0, 
      //0: Show
      //1: Hide
    },
    color: {
        type: ObjectId,
        ref: "Color",
    },
    size: {
        type: ObjectId,
        ref: "Size",
    },
    brand: {
        type: ObjectId,
        ref: "Brand",
    },
    clicks: { type: Number, default: 0 },
    ratings: [
      {
        star: Number,
        postedBy: { type: ObjectId, ref: "User" },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
