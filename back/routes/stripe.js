const express = require('express');
const router = express.Router();

const { createPaymentIntent } = require('../controllers/stripe');
const { route } = require('./user');
// middleware
const { requireSignin, authCheck } = require('../middlewares/auth');

router.post(
  '/create-payment-intent',
  requireSignin,
  authCheck,
  createPaymentIntent
);

module.exports = router;
