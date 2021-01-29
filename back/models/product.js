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
      required: true,
    },
    description: {
      type: String,
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
      required: true,
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
      type: String,
    },
    size: {
      type: String,
    },
    brand: {
      type: String,
    },
    avg: {
      type: Number,
      default: 0,
    },
    // verifiedPurchase: [
    //   {
    //     name: {
    //       type: ObjectId,
    //       ref: "Product",
    //     },
    //   },
    // ], // mảng push danh sách người đã mua sản phẩm này tạo verified purchase
    clicks: { type: Number, default: 0 },
    // reviews: [reviewSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
