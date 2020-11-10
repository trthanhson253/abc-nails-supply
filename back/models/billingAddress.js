const mongoose = require('mongoose');

const billingAddressSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },

    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zip: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('BillingAddress', billingAddressSchema);
