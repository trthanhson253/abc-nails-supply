const express = require('express');

const router = express.Router();

// middlewares
const { requireSignin, adminCheck } = require('../middlewares/auth');

const { orders, orderStatus } = require('../controllers/adminOrders');

// routes
router.get('/admin/orders', requireSignin, adminCheck, orders);
router.put('/admin/order-status', requireSignin, adminCheck, orderStatus);

module.exports = router;
