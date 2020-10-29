const { check } = require('express-validator');

exports.productCreateValidator = [
  check('name').not().isEmpty().withMessage('dsfsdf is required'),
  check('item').not().isEmpty().withMessage('Item field is required'),
  check('category').not().isEmpty().withMessage('Category field is required'),
  check('sub').not().isEmpty().withMessage('Sub-Category field is required'),
  check('subSub').not().isEmpty().withMessage('Sub Sub-Category field is required'),
  check('brand').not().isEmpty().withMessage('Brand field is required'),
  check('color').not().isEmpty().withMessage('Color field is required'),
  check('size').not().isEmpty().withMessage('Size field is required'),
  
];