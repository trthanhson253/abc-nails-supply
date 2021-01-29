const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const reviewSchema = mongoose.Schema(
  {
    title: { type: String, trim: true, required: true },
    rating: { type: Number, required: true },
    content: { type: String, required: true },
    likes: [
      {
        userLike: {
          type: ObjectId,
          required: true,
          ref: "User",
        },
      },
    ],
    reply: [
      {
        userReply: {
          type: ObjectId,
          required: true,
          ref: "User",
        },
        content: {
          type: String,
          max: 1000,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    violate: [
      {
        content: {
          type: String,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    product: {
      type: ObjectId,
      required: true,
      ref: "Product",
    },
    user: {
      type: ObjectId,
      required: true,
      ref: "User",
    },
    show: {
      type: Number,
      default: 1,
      //0 là show, 1 là ẩn, nhưng tạm thời cứ cho hiện hết với giá trị 1
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", reviewSchema);
