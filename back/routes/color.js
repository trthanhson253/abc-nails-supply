const express = require("express");
const router = express.Router();
const {
    colorCreateValidator,
    colorUpdateValidator,
  } = require('../validators/color');
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
} = require("../controllers/color");

// routes
router.post("/color", colorCreateValidator,runValidation,requireSignin,create);
router.get("/colors", list);
// router.get("/category/:slug", read);
// router.put("/category/:slug", authCheck, adminCheck, update);
// router.delete("/category/:slug", authCheck, adminCheck, remove);

module.exports = router;
