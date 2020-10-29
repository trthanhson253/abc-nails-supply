const { check } = require('express-validator');

exports.sizeCreateValidator = [
  check('name').not().isEmpty().withMessage('Name field is required'),
];

// exports.categoryUpdateValidator = [
//   check('name').not().isEmpty().withMessage('Name is required'),
//   check('content').isLength({ min: 20 }).withMessage('Content is required'),
// ];
