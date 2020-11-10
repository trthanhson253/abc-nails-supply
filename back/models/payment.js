const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    card: {
      type: String,
    },
    cvv: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Payment', paymentSchema);
