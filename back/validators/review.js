const { check } = require("express-validator");

exports.reviewCreateValidator = [
  check("title").not().isEmpty().withMessage("Title field is required"),
  check("rating").not().isEmpty().withMessage("Rating field is required"),
  check("content").not().isEmpty().withMessage("Content field is required"),
];
