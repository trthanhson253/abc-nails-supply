const express = require("express");
const router = express.Router();

const {
    subSubCreateValidator,
    subSubUpdateValidator,
  } = require('../validators/subSub');
  const { runValidation } = require('../validators');
  const { requireSignin, adminCheck } = require("../middlewares/auth");

// controller
const { create, 
    // read, update, 
    remove, 
    list 
} = require("../controllers/subSub");

// routes
router.post("/subSub", subSubCreateValidator,runValidation, requireSignin, adminCheck, create);
router.get("/subSubs", list);
// router.get("/subSub/:slug", read);
// router.put("/subSub/:slug", authCheck, adminCheck, update);
router.delete("/subSub/:subSubId/:slug", requireSignin, adminCheck, remove);

module.exports = router;
