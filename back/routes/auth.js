const express = require("express");

const router = express.Router();
const {
  userRegisterValidator,
  userLoginValidator,
  forgotPasswordValidator,
  resetPasswordValidator,
} = require("../validators/auth");
const { runValidation } = require("../validators");

const {
  register,
  registerActivate,
  login,
  forgotPassword,
  resetPassword,
  currentUser,
  updateUser,
} = require("../controllers/auth");

// middlewares
const { requireSignin, adminCheck } = require("../middlewares/auth");

// controller
// const { createOrUpdateUser, currentUser } = require("../controllers/auth");

// router.post("/create-or-update-user", authCheck, createOrUpdateUser);
// router.post("/current-user", authCheck, currentUser);
// router.post("/current-admin", authCheck, adminCheck, currentUser);

router.post("/register", userRegisterValidator, runValidation, register);
router.get("/register/activate/:token", registerActivate);
router.post("/login", userLoginValidator, runValidation, login);
router.put(
  "/forgot-password",
  forgotPasswordValidator,
  runValidation,
  forgotPassword
);
router.put(
  "/reset-password",
  resetPasswordValidator,
  runValidation,
  resetPassword
);

router.post("/current-user", requireSignin, currentUser);
router.post("/current-admin", requireSignin, adminCheck, currentUser);

router.post("/user/update", requireSignin, updateUser);

module.exports = router;
