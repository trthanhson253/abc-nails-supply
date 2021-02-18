const express = require("express");

const router = express.Router();

const {
  saveShippingBillingValidator,
  saveShippingBillingBothSameValidator,
} = require("../validators/user");
const { runValidation } = require("../validators");

// middlewares
const { requireSignin, authCheck } = require("../middlewares/auth");

// controllers
const {
  userCart,
  getUserCart,
  emptyCart,
  applyCouponToUserCart,
  createOrder,
  orders,
  addToWishlist,
  wishlist,
  removeFromWishlist,
  shippingChange,
  saveShippingBilling,
  getBillingAndShippingAddress,
  getLatestOrder,
  saveShippingBillingBothSame,
  getDetailOrderBaseOnTrackId,
  requestCancelOrder,
  userOrderUpdate,
  userOrderDetail,
} = require("../controllers/user");

router.post("/user/cart", requireSignin, authCheck, userCart); // save cart
router.get("/user/cart", requireSignin, authCheck, getUserCart); // get cart
router.delete("/user/cart", requireSignin, authCheck, emptyCart); // empty cart

router.post(
  "/user/cart/shipping-change",
  requireSignin,
  authCheck,
  shippingChange
);

router.post(
  "/user/cart/save-shipping-billing",
  saveShippingBillingValidator,
  runValidation,
  requireSignin,
  authCheck,
  saveShippingBilling
);
router.post(
  "/user/cart/save-shipping-billing-both-same",
  saveShippingBillingBothSameValidator,
  runValidation,
  requireSignin,
  authCheck,
  saveShippingBillingBothSame
);
router.get(
  "/user/cart/get-billing-shipping-address",
  requireSignin,
  authCheck,
  getBillingAndShippingAddress
);

// FOR ORDERS
router.post("/user/order", requireSignin, authCheck, createOrder); // stripe
router.get(
  "/user/order/detail/:trackId",
  requireSignin,
  authCheck,
  userOrderDetail
);
router.get("/user/orders", requireSignin, authCheck, orders);
router.get(
  "/user/user-order-update/:orderId",
  requireSignin,
  authCheck,
  userOrderUpdate
);

// router.get("/user/orders/getLatest", requireSignin, authCheck, getLatestOrder);
router.get("/track-order/:trackId", getDetailOrderBaseOnTrackId);

router.get(
  "/user/order/request-cancel/:trackId",
  requireSignin,
  authCheck,
  requestCancelOrder
);

// coupon
router.post(
  "/user/cart/coupon",
  requireSignin,
  authCheck,
  applyCouponToUserCart
);

// wishlist
router.post("/user/wishlist", requireSignin, authCheck, addToWishlist);
router.get("/user/wishlist", requireSignin, authCheck, wishlist);
router.put(
  "/user/wishlist/:productId",
  requireSignin,
  authCheck,
  removeFromWishlist
);

module.exports = router;
