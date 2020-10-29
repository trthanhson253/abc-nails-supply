const { check } = require('express-validator');

exports.subCreateValidator = [
  check('name').not().isEmpty().withMessage('Name field is required'),
  check('category').not().isEmpty().withMessage('Category field is required'),
];