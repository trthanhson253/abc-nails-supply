const express = require("express");
const router = express.Router();
const {
  create,
  getReviewsBasedOnProduct,
  like,
  //   reply,
  //   violate,
  //   averageRating,
  //   list,
  //   removeComment,
  dislike,
} = require("../controllers/review");
const { runValidation } = require("../validators");
const { requireSignin, authCheck, adminCheck } = require("../middlewares/auth");
const { reviewCreateValidator } = require("../validators/review");

router.post(
  "/review/:productId",
  reviewCreateValidator,
  requireSignin,
  authCheck,
  runValidation,
  create
);
router.get("/review/:slug", getReviewsBasedOnProduct);
router.get("/like/:reviewId", requireSignin, authCheck, like);
router.get("/dislike/:reviewId", requireSignin, authCheck, dislike);
// router.post('/reply/:id', reply);
// router.post('/violate/:id', violate);

// router.get('/averageRating/:slug', averageRating);

// // ADMIN
// router.delete('/admin/comment/delete/:idComment', removeComment);

module.exports = router;
