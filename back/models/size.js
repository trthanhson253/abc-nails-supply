const mongoose = require("mongoose");

const sizeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Name is required",
      text: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Size", sizeSchema);
