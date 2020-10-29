const express = require("express");
const router = express.Router();

// middlewares
const { requireSignin, adminCheck } = require("../middlewares/auth");

// controllers
const { upload, remove } = require("../controllers/cloudinary");

router.post("/uploadimages", requireSignin, adminCheck, upload);
router.post("/removeimage", requireSignin, adminCheck, remove);

module.exports = router;
