const express = require("express");

const router = express.Router();

// middlewares
const { requireSignin, adminCheck } = require("../middlewares/auth");

const {
  orders,
  orderStatus,
  getAdminDetailOrder,
} = require("../controllers/adminOrders");

// routes
router.get("/admin/orders", requireSignin, adminCheck, orders);
router.get(
  "/admin/order/:orderId",
  requireSignin,
  adminCheck,
  getAdminDetailOrder
);
router.put("/admin/order-status", requireSignin, adminCheck, orderStatus);

module.exports = router;
