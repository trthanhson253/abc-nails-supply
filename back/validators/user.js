const { check } = require('express-validator');

exports.saveShippingBillingValidator = [
  check('values.ship_name')
    .not()
    .isEmpty()
    .withMessage('Shipping name field is required'),
  check('values.ship_email')
    .not()
    .isEmpty()
    .withMessage('Shipping email field is required'),
  check('values.ship_phone')
    .not()
    .isEmpty()
    .withMessage('Shipping phone field is required'),
  check('values.ship_address')
    .not()
    .isEmpty()
    .withMessage('Shipping address field is required'),
  check('values.ship_city')
    .not()
    .isEmpty()
    .withMessage('Shipping city field is required'),
  check('values.ship_state')
    .not()
    .isEmpty()
    .withMessage('Shipping state field is required'),
  check('values.ship_zip')
    .not()
    .isEmpty()
    .withMessage('Shipping zip field is required'),
  check('values.bill_name')
    .not()
    .isEmpty()
    .withMessage('Billing name field is required'),
  check('values.bill_address')
    .not()
    .isEmpty()
    .withMessage('Billing address field is required'),
  check('values.bill_city')
    .not()
    .isEmpty()
    .withMessage('Billing city field is required'),
  check('values.bill_state')
    .not()
    .isEmpty()
    .withMessage('Billing state field is required'),
  check('values.bill_zip')
    .not()
    .isEmpty()
    .withMessage('Billing zip field is required'),
];
