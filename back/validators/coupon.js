const { check } = require('express-validator');

exports.couponCreateValidator = [
  check('name').not().isEmpty().withMessage('Name field is required'),
  check('expiry').not().isEmpty().withMessage('Expiry field is required'),
  check('discount').not().isEmpty().withMessage('Discount field is required'),
];
