const Product = require("../models/product");
const User = require("../models/user");
const Review = require("../models/review");

exports.create = async (req, res) => {
  const { title, rating, content } = req.body;

  const reviews = await Review.find({});
  const user = await User.findById(req.user._id);
  if (user) {
    const alreadyReviewed = reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );
    if (alreadyReviewed) {
      res.status(400).json({ error: "Product already reviewed" });
      throw new Error("Product already reviewed");
    }
    const product = await Product.findById(req.params.productId);
    if (product) {
      let newReview = new Review({
        title,
        rating: Number(rating),
        content,
        user: user._id,
        product: product._id,
      });
      await newReview.save();
      const reviews1 = await Review.find({});
      product.avg =
        reviews1.reduce((acc, item) => item.rating + acc, 0) / reviews1.length;
      await product.save();

      res.status(201).json({ message: "Review added" });
    } else {
      res.status(404).json({ error: "Product not found" });
      throw new Error("Product not found");
    }
  } else {
    res.status(404).json({ error: "User not found" });
    throw new Error("User not found");
  }
};

exports.getReviewsBasedOnProduct = async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  const reviews = await Review.find({ product: product._id })
    .populate("user", "name")
    .sort({
      createdAt: -1,
    });
  // const avg =
  //   reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length;
  res.json(reviews);
};

exports.like = async (req, res) => {
  const reviews = await Review.findById(req.params.reviewId);
  if (reviews) {
    const alreadyLiked = reviews.likes.find(
      (r) => r.userLike.toString() === req.user._id.toString()
    );
    if (alreadyLiked) {
      res.status(400);
      throw new Error("This comment is already liked");
    }
    const like = {
      userLike: req.user._id,
    };
    reviews.likes.push(like);
    await reviews.save();
    res.status(201).json({ message: "Likes added to this comment" });
  } else {
    res.status(404);
    throw new Error("Comment not found");
  }
};

exports.dislike = async (req, res) => {
  const reviews = await Review.findById(req.params.reviewId);

  if (reviews) {
    const likedIndex = reviews.likes.findIndex(
      (r) => r.userLike.toString() === req.user._id.toString()
    );
    const alreadyLiked = reviews.likes.find(
      (r) => r.userLike.toString() === req.user._id.toString()
    );
    // console.log("likedIndex", likedIndex);
    // console.log("reviews", reviews.likes);
    if (alreadyLiked) {
      reviews.likes.splice(likedIndex, 1);
    } else {
      res.status(404);
      throw new Error("You have not liked this review yet");
    }
    await reviews.save();
    res.status(201).json({ message: "Likes added to this review" });
  } else {
    res.status(404);
    throw new Error("Review not found");
  }
};

// exports.reply = async (req, res) => {
//   try {
//     const comment = await Comment.findById(req.params.id);
//     const newReply = {
//       name: req.body.name,
//       content: req.body.content,
//     };

//     comment.reply.unshift(newReply);

//     await comment.save();

//     res.json(comment);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// };

// exports.violate = async (req, res) => {
//   try {
//     const comment = await Comment.findById(req.params.id);
//     const newViolate = {
//       content: req.body.content,
//     };

//     comment.violate.unshift(newViolate);

//     await comment.save();

//     res.json(comment);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// };

// exports.averageRating = async (req, res) => {
//   const slug = req.params.slug.toLowerCase();
//   const company = await Company.findOne({ slug });
//   var companyId = company._id;
//   console.log('companyId' + companyId);
//   const comments = await Comment.find({ company: companyId });
//   var sum = 0;
//   var result = 0;
//   for (var i = 0; i < comments.length; i++) {
//     sum += comments[i].point;
//   }
//   if (comments.length > 0) {
//     result = sum / comments.length;
//   } else {
//     result = 0;
//   }

//   let a = await Company.findOneAndUpdate(
//     { slug },
//     { $set: { avgRating: result } },
//     { new: true }
//   );

//   res.send({ result });
// };

// exports.removeComment = (req, res) => {
//   const idComment = req.params.id;
//   console.log('Id la:' + idComment);
//   Comment.findOneAndRemove({ idComment }).exec((err, data) => {
//     if (err) {
//       return res.status(400).json({
//         error: 'Tag Not Found',
//       });
//     }
//     res.json({
//       message: 'Tag deleted successfully',
//     });
//   });
// };