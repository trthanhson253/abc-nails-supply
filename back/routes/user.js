const express = require("express");

const router = express.Router();

// middlewares

const { requireSignin, authCheck } = require("../middlewares/auth");

// controllers
const {
  userCart,
  getUserCart,
  emptyCart,
  // saveAddress,
  applyCouponToUserCart,
  // createOrder,
  // orders,
  addToWishlist,
  wishlist,
  removeFromWishlist,
  // createCashOrder,
} = require("../controllers/user");

router.post("/user/cart", requireSignin,authCheck, userCart); // save cart
router.get("/user/cart", requireSignin,authCheck, getUserCart); // get cart
router.delete("/user/cart", requireSignin,authCheck, emptyCart); // empty cart
// router.post("/user/address", authCheck, saveAddress);

// router.post("/user/order", authCheck, createOrder); // stripe
// router.post("/user/cash-order", authCheck, createCashOrder); // cod
// router.get("/user/orders", authCheck, orders);

// coupon
router.post("/user/cart/coupon", requireSignin,authCheck, applyCouponToUserCart);

// wishlist
router.post("/user/wishlist", requireSignin,authCheck, addToWishlist);
router.get("/user/wishlist", requireSignin,authCheck, wishlist);
router.put("/user/wishlist/:productId", requireSignin,authCheck, removeFromWishlist);


module.exports = router;
