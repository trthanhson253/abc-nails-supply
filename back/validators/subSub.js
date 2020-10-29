const { check } = require('express-validator');

exports.subSubCreateValidator = [
  check('name').not().isEmpty().withMessage('Name field is required'),
  check('category').not().isEmpty().withMessage('Category field is required'),
  check('sub').not().isEmpty().withMessage('Sub-Category field is required'),
];