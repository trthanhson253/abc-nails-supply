const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const shippingAndBillingAddressSchema = new mongoose.Schema(
  {
    ship_name: {
      type: String,
    },
    ship_email: {
      type: String,
    },
    ship_phone: {
      type: String,
    },
    ship_address: {
      type: String,
    },
    ship_city: {
      type: String,
    },
    ship_state: {
      type: String,
    },
    ship_zip: {
      type: String,
    },
    bill_name: {
      type: String,
    },

    bill_address: {
      type: String,
    },
    bill_city: {
      type: String,
    },
    bill_state: {
      type: String,
    },
    bill_zip: {
      type: String,
    },
    user: [{ type: ObjectId, ref: 'User' }],
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  'ShippingAndBillingAddress',
  shippingAndBillingAddressSchema
);
