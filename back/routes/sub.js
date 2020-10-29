const express = require("express");
const router = express.Router();

const {
    subCreateValidator,
    subUpdateValidator,
  } = require('../validators/sub');
  const { runValidation } = require('../validators');
  const { requireSignin, adminCheck } = require("../middlewares/auth");

// controller
const { create,
    // read, update, 
    remove, 
    list,
} = require("../controllers/sub");

// routes
router.post("/sub",subCreateValidator,runValidation,requireSignin,adminCheck,create);
router.get("/subs", list);
// router.get("/sub/:slug", read);
// router.put("/sub/:slug", authCheck, adminCheck, update);
router.delete("/sub/:subId/:slug", requireSignin, adminCheck, remove);

module.exports = router;
