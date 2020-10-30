const express = require("express");
const router = express.Router();
const {
    categoryCreateValidator,
    categoryUpdateValidator,
  } = require('../validators/category');
  const { runValidation } = require('../validators');
// middlewares
const { requireSignin, adminCheck } = require("../middlewares/auth");

// controller
const {
  create,
//   read,
//   update,
  remove,
  list,
  getSubs,
  getSubSubs,
  loadMenu
} = require("../controllers/category");

// routes
router.post("/category", categoryCreateValidator,runValidation,requireSignin,adminCheck,create);
router.get("/categories", list);
// router.get("/category/:slug", read);
// router.put("/category/:slug", authCheck, adminCheck, update);
router.post("/category/:slug", requireSignin, adminCheck, remove);
router.get("/category/subs/:_id", getSubs);
router.get("/category/subs/subsubs/:_id", getSubSubs);

router.post("/loading/category/load-menu", loadMenu);

module.exports = router;
