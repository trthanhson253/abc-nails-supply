const express = require("express");
const router = express.Router();
const {
    brandCreateValidator,
    brandUpdateValidator,
  } = require('../validators/brand');
  const { runValidation } = require('../validators');
// middlewares
const { requireSignin, adminCheck } = require("../middlewares/auth");

// controller
const {
  create,
//   read,
//   update,
//   remove,
  list,
} = require("../controllers/brand");

// routes
router.post("/brand", brandCreateValidator,runValidation,requireSignin,adminCheck,create);
router.get("/brands", list);
// router.get("/category/:slug", read);
// router.put("/category/:slug", authCheck, adminCheck, update);
// router.delete("/category/:slug", authCheck, adminCheck, remove);

module.exports = router;
