const express = require('express');
const router = express.Router();

const {
  productCreateValidator,
  subUpdateValidator,
} = require('../validators/product');

const { runValidation } = require('../validators');
const { requireSignin, adminCheck } = require('../middlewares/auth');

// controller
const {
  create,
  listAll,
  listProductBySubSub,
  listDetailProduct,
  remove,
  read,
  listRecentlyProducts,
  listByFilters,
  //   update,
  //   list,
  //   productsCount,
  //   productStar,
  //   listRelated,
  searchFilters,
} = require('../controllers/product');

// routes
router.post(
  '/product',
  productCreateValidator,
  runValidation,
  requireSignin,
  adminCheck,
  create
);
// router.get("/products/total", productsCount);

router.get('/products', listAll); // products/100
router.post('/products/recentlyProduct', listRecentlyProducts);

router.get('/products/subSub/:slug', listProductBySubSub);

router.post('/product/:slug', requireSignin, adminCheck, remove);
router.get('/product/:slug', read);
// router.put("/product/:slug", authCheck, adminCheck, update);

// router.post("/products", list);
// rating
// router.put("/product/star/:productId", authCheck, productStar);
// related
// router.get("/product/related/:productId", listRelated);
// search
router.post('/search/filters', searchFilters);

router.post('/products/by/search', listByFilters);

module.exports = router;
