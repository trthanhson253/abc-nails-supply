const express = require('express');
const router = express.Router();
const { couponCreateValidator } = require('../validators/coupon');
const { runValidation } = require('../validators');
// middlewares
const { requireSignin, adminCheck } = require('../middlewares/auth');

// controller
const { create, remove, list } = require('../controllers/coupon');

// routes
router.post(
  '/coupon',
  couponCreateValidator,
  runValidation,
  requireSignin,
  adminCheck,
  create
);
router.get('/coupons', list);
router.delete('/coupon/:couponId', requireSignin, adminCheck, remove);

module.exports = router;
