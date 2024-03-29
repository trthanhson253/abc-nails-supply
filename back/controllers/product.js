const Product = require("../models/product");
const Category = require("../models/category");
// const User = require("../models/user");
const Order = require("../models/order");
const slugify = require("slugify");
const Sub = require("../models/sub");
const SubSub = require("../models/subSub");
const formidable = require("formidable");
const cloudinary = require("cloudinary");

exports.create = (req, res) => {
  const {
    item,
    name,
    category,
    description,
    price,
    discountPrice,
    subSub,
    sub,
    quantity,
    images,
    shipping,
    color,
    size,
    brand,
    status,
  } = req.body;
  // console.log(req.body);
  // console.log(fields);
  // if (!name || !name.length) {
  //   return res.status(400).json({
  //     error: "Name is required"
  //   });
  // }

  // if (!item || !item.length) {
  //   return res.status(400).json({
  //     error: "Item is required"
  //   });
  // }

  // if (!category || category.length === 0) {
  //   return res.status(400).json({
  //     error: "Category is required"
  //   });
  // }
  let product = new Product();
  product.item = item;
  product.name = name;
  product.slug = slugify(name);
  product.category = category;
  product.sub = sub;
  product.subSub = subSub;
  product.description = description;
  product.price = price;
  product.discountPrice = discountPrice;
  product.quantity = quantity;
  product.image = images;
  product.shipping = shipping;
  product.color = color;
  product.status = status;
  product.size = size;
  product.brand = brand;
  product.save((err, result) => {
    if (err) {
      // console.log(err);
      return res.status(400).json({
        error: "Cannot Create Product",
      });
    }
    res.json(result);
  });
};

exports.listAll = async (req, res) => {
  let products = await Product.find({})
    // .limit(parseInt(req.params.count))
    .populate("category", "name")
    .populate("sub", "name")
    .populate("subSub", "name")
    .sort([["createdAt", "desc"]])
    .exec();
  res.json(products);
};

exports.listRecentlyProducts = async (req, res) => {
  const { recentlyProduct, pslug1 } = req.body;
  // console.log("recentlyProduct",recentlyProduct)
  let currentProduct = await Product.findOne({ slug: pslug1 });
  // console.log("currentProduct",currentProduct);
  var notPresentInArray = recentlyProduct.filter(
    (val) => !val.includes(currentProduct._id)
  );
  // (obj._id == currentProduct._id))

  // console.log("notPresentInArray",notPresentInArray);

  let products = await Product.find().where("_id").in(notPresentInArray).exec();
  // console.log(products)
  res.json(products);
};

exports.listProductBySubSub = (req, res) => {
  SubSub.find({ slug: req.params.slug })
    .populate("category")
    .populate("sub")
    .exec((err, subSub) => {
      if (err || !subSub) {
        return res.status(400).json({
          error: "Do not find sub-sub",
        });
      }
      // console.log(subSub[0]._id);
      Product.find({ subSub: subSub[0]._id })
        .populate("category")
        .populate("sub")
        .populate("subSub")
        // .sort([[sortBy, order]])
        // .skip(skip)
        // .limit(limit)
        .exec((err, products) => {
          // console.log(products);
          res.json({
            products: products,
            subSub: subSub,
            size: products.length,
          });
        });
    });
};

exports.listProductByCategory = (req, res) => {
  let order = req.body.order ? req.body.order : "desc";
  let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  let skip = parseInt(req.body.skip);

  Category.find({ slug: req.params.cslug }).exec((err, category) => {
    if (err || !category) {
      return res.status(400).json({
        error: "Do not find category",
      });
    }

    Product.find({ category: category[0]._id })
      // .populate('category')
      // .populate('sub')
      // .populate('subSub')
      .sort([[sortBy, order]])
      .skip(skip)
      .limit(limit)
      .populate("category", "name slug")
      .populate("sub", "name slug")
      .populate("subSub", "name slug")
      .exec((err, products) => {
        // console.log(products);
        res.json({
          products: products,
          category: category,
          size: products.length,
        });
      });
  });
};

exports.listMenuByCategory = (req, res) => {
  Category.find({ slug: req.params.cslug }).exec((err, category) => {
    if (err || !category) {
      return res.status(400).json({
        error: "Do not find category",
      });
    }
    Product.find({ category: category[0]._id }).exec((err, products) => {
      if (err || !products) {
        return res.status(400).json({
          error: "Do not find products",
        });
      }
      Sub.find({ category: category[0]._id }).exec((err, subs) => {
        res.json({
          products,
          subs,
        });
      });
    });
  });
};

exports.remove = async (req, res) => {
  try {
    const { image } = req.body;

    const deletedProduct = await Product.findOneAndDelete({
      slug: req.params.slug,
    });
    // res.json(deletedCategory);
    if (image.length == 2) {
      // console.log(images[1])
      await cloudinary.uploader.destroy(image[1].public_id);
    } else {
      res.json(deletedProduct);
    }
  } catch (err) {
    res.status(400).send("Product delete failed");
  }

  try {
    const deleted = await Product.findOneAndRemove({
      slug: req.params.slug,
    }).exec();
    res.json(deleted);
  } catch (err) {
    // console.log(err);
    return res.staus(400).send("Product delete failed");
  }
};

exports.read = async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug })
    .populate("category", "name slug")
    .populate("sub", "name slug")
    .populate("subSub", "name slug")
    // .populate("verifiedPurchase", "_id")
    // .populate('size', 'name slug')
    // .populate('brand', 'name slug')
    .exec();
  res.json({ product: product });
  // console.log("product", product);
};

// exports.update = async (req, res) => {
//   try {
//     if (req.body.title) {
//       req.body.slug = slugify(req.body.title);
//     }
//     const updated = await Product.findOneAndUpdate(
//       { slug: req.params.slug },
//       req.body,
//       { new: true }
//     ).exec();
//     res.json(updated);
//   } catch (err) {
//     console.log("PRODUCT UPDATE ERROR ----> ", err);
//     // return res.status(400).send("Product update failed");
//     res.status(400).json({
//       err: err.message,
//     });
//   }
// };

// // WITHOUT PAGINATION
// // exports.list = async (req, res) => {
// //   try {
// //     // createdAt/updatedAt, desc/asc, 3
// //     const { sort, order, limit } = req.body;
// //     const products = await Product.find({})
// //       .populate("category")
// //       .populate("subs")
// //       .sort([[sort, order]])
// //       .limit(limit)
// //       .exec();

// //     res.json(products);
// //   } catch (err) {
// //     console.log(err);
// //   }
// // };

// // WITH PAGINATION
// exports.list = async (req, res) => {
//   // console.table(req.body);
//   try {
//     // createdAt/updatedAt, desc/asc, 3
//     const { sort, order, page } = req.body;
//     const currentPage = page || 1;
//     const perPage = 3; // 3

//     const products = await Product.find({})
//       .skip((currentPage - 1) * perPage)
//       .populate("category")
//       .populate("subs")
//       .sort([[sort, order]])
//       .limit(perPage)
//       .exec();

//     res.json(products);
//   } catch (err) {
//     console.log(err);
//   }
// };

// exports.productsCount = async (req, res) => {
//   let total = await Product.find({}).estimatedDocumentCount().exec();
//   res.json(total);
// };

exports.productReview = async (req, res) => {
  const product = await Product.findById(req.params.productId).exec();
  const user = await User.findOne({ email: req.user.email }).exec();
  const { star } = req.body;

  // who is updating?
  // check if currently logged in user have already added rating to this product?
  let existingRatingObject = product.ratings.find(
    (ele) => ele.postedBy.toString() === user._id.toString()
  );

  // if user haven't left rating yet, push it
  if (existingRatingObject === undefined) {
    let ratingAdded = await Product.findByIdAndUpdate(
      product._id,
      {
        $push: { ratings: { star, postedBy: user._id } },
      },
      { new: true }
    ).exec();
    // console.log("ratingAdded", ratingAdded);
    res.json(ratingAdded);
  } else {
    // if user have already left rating, update it
    const ratingUpdated = await Product.updateOne(
      {
        ratings: { $elemMatch: existingRatingObject },
      },
      { $set: { "ratings.$.star": star } },
      { new: true }
    ).exec();
    // console.log("ratingUpdated", ratingUpdated);
    res.json(ratingUpdated);
  }
};

exports.listRelated = async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug }).exec();
  const related = await Product.aggregate([
    { $match: { _id: { $ne: product._id }, category: product.category } },
    { $sample: { size: 5 } },
  ]);

  // console.log("related", related);
  res.json(related);
};

// SEARCH / FILTER

// const handleQuery = async (req, res, query) => {
//   console.log('query', query);
//   const products = await Product.find({ $text: { $search: query } })
//     .populate('category', '_id name')
//     .populate('sub', '_id name')
//     .populate('subSub', '_id name')
//     .exec();
//   console.log('products', products);
//   res.json(products);
// };
const handleQuery = (req, res, query) => {
  // console.log("query", query);
  Product.find({ name: { $regex: query, $options: "i" }, status: 0 })
    .populate("category", "_id name slug")
    .populate("sub", "_id name slug")
    .populate("subSub", "_id name slug")
    .exec((err, products) => {
      if (err) {
        return res.status(400).json({
          error: "Not Found",
        });
      }
      // console.log("products", products);
      res.json(products);
    });
};

const handlePrice = async (req, res, price) => {
  try {
    let products = await Product.find({
      price: {
        $gte: price[0],
        $lte: price[1],
      },
    })
      .populate("category", "_id name")
      .populate("subs", "_id name")
      .populate("postedBy", "_id name")
      .exec();

    res.json(products);
  } catch (err) {
    // console.log(err);
  }
};

// const handleCategory = async (req, res, category) => {
//   try {
//     let products = await Product.find({ category })
//       .populate("category", "_id name")
//       .populate("subs", "_id name")
//       .populate("postedBy", "_id name")
//       .exec();

//     res.json(products);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const handleStar = (req, res, stars) => {
//   Product.aggregate([
//     {
//       $project: {
//         document: "$$ROOT",
//         // title: "$title",
//         floorAverage: {
//           $floor: { $avg: "$ratings.star" }, // floor value of 3.33 will be 3
//         },
//       },
//     },
//     { $match: { floorAverage: stars } },
//   ])
//     .limit(12)
//     .exec((err, aggregates) => {
//       if (err) console.log("AGGREGATE ERROR", err);
//       Product.find({ _id: aggregates })
//         .populate("category", "_id name")
//         .populate("subs", "_id name")
//         .populate("postedBy", "_id name")
//         .exec((err, products) => {
//           if (err) console.log("PRODUCT AGGREGATE ERROR", err);
//           res.json(products);
//         });
//     });
// };

// const handleSub = async (req, res, sub) => {
//   const products = await Product.find({ subs: sub })
//     .populate("category", "_id name")
//     .populate("subs", "_id name")
//     .populate("postedBy", "_id name")
//     .exec();

//   res.json(products);
// };

// const handleShipping = async (req, res, shipping) => {
//   const products = await Product.find({ shipping })
//     .populate("category", "_id name")
//     .populate("subs", "_id name")
//     .populate("postedBy", "_id name")
//     .exec();

//   res.json(products);
// };

// const handleColor = async (req, res, color) => {
//   const products = await Product.find({ color })
//     .populate("category", "_id name")
//     .populate("subs", "_id name")
//     .populate("postedBy", "_id name")
//     .exec();

//   res.json(products);
// };

const handleBrand = async (req, res, brand) => {
  const products = await Product.find({ brand })
    .populate("category", "_id name")
    .populate("subs", "_id name")
    .populate("postedBy", "_id name")
    .exec();

  res.json(products);
};

exports.searchFilters = async (req, res) => {
  const {
    query,
    price,
    // category,
    // stars,
    // sub,/
    // shipping,
    // color,
    brand,
  } = req.body;
  // console.log("req.body", req.body);
  if (query) {
    // console.log("query --->", query);
    await handleQuery(req, res, query);
  }

  // price [20, 200]
  if (price !== undefined) {
    // console.log("price ---> ", price);
    await handlePrice(req, res, price);
  }

  // if (category) {
  //   console.log("category ---> ", category);
  //   await handleCategory(req, res, category);
  // }

  // if (stars) {
  //   console.log("stars ---> ", stars);
  //   await handleStar(req, res, stars);
  // }

  // if (sub) {
  //   console.log("sub ---> ", sub);
  //   await handleSub(req, res, sub);
  // }

  // if (shipping) {
  //   console.log("shipping ---> ", shipping);
  //   await handleShipping(req, res, shipping);
  // }

  // if (color) {
  //   console.log("color ---> ", color);
  //   await handleColor(req, res, color);
  // }

  if (brand) {
    // console.log("brand ---> ", brand);
    await handleBrand(req, res, brand);
  }
};

exports.listByFilters = (req, res) => {
  let order = req.body.order ? req.body.order : "desc";
  let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  let skip = parseInt(req.body.skip);
  let findArgs = {};

  // console.log(order, sortBy, limit, skip, req.body.filters);
  // console.log("findArgs", findArgs);

  for (let key in req.body.filters) {
    if (req.body.filters[key].length > 0) {
      findArgs[key] = req.body.filters[key];
      // console.log("findArgs", findArgs[key]);
    }
  }

  Product.find(findArgs)
    .populate("category")
    .sort([[sortBy, order]])
    .skip(skip)
    .limit(limit)
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: "Products not found",
        });
      }
      res.json({
        size: data.length,
        data,
      });
    });
};

exports.getCountOfPurchase = async (req, res) => {
  // console.log("req.user._id", req.user._id);
  let product = await Product.findOne({ slug: req.params.slug }).select("_id");
  let lastOrder = await Order.find({
    "products.product": { $in: { _id: product._id } },
    orderdBy: req.user._id,
  })
    .sort({ createdAt: -1 })
    .limit(1);
  let totalOrder = await Order.find({
    "products.product": { $in: { _id: product._id } },
    orderdBy: req.user._id,
  });

  if (lastOrder) {
    res.json({ lastOrder, totalOrder: totalOrder.length });
  }
};
