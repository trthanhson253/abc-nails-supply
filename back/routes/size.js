const express = require("express");
const router = express.Router();
const {
    sizeCreateValidator,
    sizeUpdateValidator,
  } = require('../validators/size');
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
} = require("../controllers/size");

// routes
router.post("/size", sizeCreateValidator,runValidation,requireSignin,create);
router.get("/sizes", list);
// router.get("/category/:slug", read);
// router.put("/category/:slug", authCheck, adminCheck, update);
// router.delete("/category/:slug", authCheck, adminCheck, remove);

module.exports = router;
