const express = require("express");
const router = express.Router();

// middlewares
const { requireSignin, adminCheck } = require("../middlewares/auth");

// controllers
const { upload, remove } = require("../controllers/cloudinary");

router.post("/uploadimages", requireSignin, upload);
router.post("/removeimage", requireSignin, remove);

module.exports = router;
