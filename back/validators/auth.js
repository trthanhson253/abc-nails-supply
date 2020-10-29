const { check } = require('express-validator');

exports.userRegisterValidator = [
  check('name').not().isEmpty().withMessage('Name field is required'),
  check('email').isEmail().withMessage('Must be a valid email address'),
  check('password')
  .not().isEmpty()
  .withMessage('Password field is required'),
  check('confirmPassword')
  .not().isEmpty()
  .withMessage('Confirm Password field is required'),
];

exports.userLoginValidator = [
  check('email').isEmail().withMessage('Email field is required'),
  check('password')
  .not().isEmpty()
    .withMessage('Password is required'),
];

exports.forgotPasswordValidator = [
  check('email').isEmail().withMessage('Must be a valid email address'),
];

exports.resetPasswordValidator = [
  check('newPassword')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  check('resetPasswordLink').not().isEmpty().withMessage('Token is required'),
];

// exports.userUpdateValidator = [
//   check('name').not().isEmpty().withMessage('Name is required'),
// ];
