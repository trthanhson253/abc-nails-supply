const User = require("../models/user");
const Product = require("../models/product");
const Cart = require("../models/cart");
const Coupon = require("../models/coupon");
const Order = require("../models/order");
// const uniqueid = require('uniqueid');
const shortId = require("shortid");
const ShippingAndBillingAddress = require("../models/shippingAndBillingAddress");

exports.userCart = async (req, res) => {
  // console.log("SonTran1",req.body.cart); // {cart: []}
  const { cart } = req.body;

  let products = [];

  const user = await User.findOne({ email: req.user.email }).exec();

  // check if cart with logged in user id already exist
  let cartExistByThisUser = await Cart.findOne({ orderdBy: user._id }).exec();

  if (cartExistByThisUser) {
    cartExistByThisUser.remove();
    // console.log('removed old cart');
  }

  for (let i = 0; i < cart.length; i++) {
    let object = {};

    object.product = cart[i]._id;
    object.count = cart[i].count;
    // get price for creating total
    let productFromDb = await Product.findById(cart[i]._id)
      .select("price")
      .exec();
    object.price = productFromDb.price;

    products.push(object);
  }

  // console.log('products', products)

  let cartTotal = 0;
  for (let i = 0; i < products.length; i++) {
    cartTotal = cartTotal + products[i].price * products[i].count;
  }
  cartTotalBeforeTax = cartTotal;
  cartTotal = cartTotal * 1.08 + 8;
  // console.log("cartTotal", cartTotal);

  let newCart = await new Cart({
    products,
    cartTotal,
    cartTotalBeforeTax,
    orderdBy: user._id,
  }).save();

  // console.log("new cart ----> ", newCart);
  res.json({ ok: true });
};

exports.getUserCart = async (req, res) => {
  // const user = await User.findOne({ email: req.user.email }).exec();

  let cart = await Cart.findOne({ orderdBy: req.user._id })
    .populate("products.product", "_id name price image")
    .exec();

  const {
    products,
    cartTotal,
    totalAfterDiscount,
    shipOption,
    cartTotalBeforeTax,
  } = cart;
  console.log("cart", cart);
  res.json({
    products,
    cartTotal,
    totalAfterDiscount,
    shipOption,
    cartTotalBeforeTax,
  });
};

exports.emptyCart = async (req, res) => {
  // console.log('empty cart');
  const user = await User.findOne({ email: req.user.email }).exec();

  const cart = await Cart.findOneAndRemove({ orderdBy: user._id }).exec();
  res.json(cart);
};

exports.shippingChange = async (req, res) => {
  // console.log("SonTran1",req.body.cart); // {cart: []}
  const { shipping } = req.body;
  const user = await User.findOne({ email: req.user.email }).exec();
  let { cartTotal, shipOption } = await Cart.findOne({
    orderdBy: user._id,
  }).exec();
  // if (!cartExistByThisUser) {
  //   res.status(400).json({
  //     error: 'Cannot update',
  //   });

  if (shipOption == 0) {
    if (shipping == 1) {
      cartTotal = cartTotal - 8;
      shipOption = 1;
    }
  } else {
    if (shipping == 0) {
      cartTotal = cartTotal + 8;
      shipOption = 0;
    }
  }

  await Cart.findOneAndUpdate(
    { orderdBy: user._id },
    { shipOption: shipOption, cartTotal: cartTotal }
  ).exec();
  res.json({ ok: true });
};

// exports.saveAddress = async (req, res) => {
//   const userAddress = await User.findOneAndUpdate(
//     { email: req.user.email },
//     { address: req.body.address }
//   ).exec();

//   res.json({ ok: true });
// };

exports.applyCouponToUserCart = async (req, res) => {
  const { coupon } = req.body;
  // console.log('COUPON', coupon);

  const validCoupon = await Coupon.findOne({ name: coupon }).exec();
  if (validCoupon === null) {
    return res.json({
      err: "Invalid coupon",
    });
  }
  console.log("VALID COUPON", validCoupon);

  const user = await User.findOne({ email: req.user.email }).exec();

  let { products, cartTotalBeforeTax } = await Cart.findOne({
    orderdBy: user._id,
  })
    .populate("products.product", "_id title price")
    .exec();

  // console.log('cartTotal', cartTotal, 'discount%', validCoupon.discount);

  // calculate the total after discount
  let totalAfterDiscount = (
    cartTotalBeforeTax -
    (cartTotalBeforeTax * validCoupon.discount) / 100
  ).toFixed(2); // 99.99

  // console.log('----------> ', totalAfterDiscount);

  Cart.findOneAndUpdate(
    { orderdBy: user._id },
    { totalAfterDiscount },
    { new: true }
  ).exec();

  res.json(totalAfterDiscount);
};

exports.createOrder = async (req, res) => {
  // console.log(req.body.stripeResponse);
  // return;
  const { paymentIntent } = req.body.stripeResponse;

  const user = await User.findOne({ email: req.user.email }).exec();

  let { products } = await Cart.findOne({ orderdBy: user._id }).exec();

  let newOrder = await new Order({
    products,
    paymentIntent,
    trackId: shortId.generate(),
    orderdBy: user._id,
    orderStatus: 0,
  });
  newOrder.reason.push({
    name: 0,
    date: Date.now(),
  });
  newOrder.save();

  // decrement quantity, increment sold
  let bulkOption = products.map((item) => {
    return {
      updateOne: {
        filter: { _id: item.product._id }, // IMPORTANT item.product
        update: { $inc: { quantity: -item.count, sold: +item.count } },
      },
    };
  });

  let updated = await Product.bulkWrite(bulkOption, {});
  // console.log('PRODUCT QUANTITY-- AND SOLD++', updated);

  // console.log('NEW ORDER SAVED', newOrder);
  res.json({ ok: true });
};

exports.orders = async (req, res) => {
  let user = await User.findOne({ email: req.user.email }).exec();

  let userOrders = await Order.find({ orderdBy: user._id })
    .populate("products.product")
    .sort({ createdAt: -1 })
    .exec();

  res.json(userOrders);
};

// addToWishlist wishlist removeFromWishlist
exports.addToWishlist = async (req, res) => {
  const { productId } = req.body;

  const user = await User.findOneAndUpdate(
    { email: req.user.email },
    { $addToSet: { wishlist: productId } }
  ).exec();

  res.json({ ok: true });
};

exports.wishlist = async (req, res) => {
  const list = await User.findOne({ email: req.user.email })
    .select("wishlist")
    .populate("wishlist")
    .exec();

  res.json(list);
};

exports.removeFromWishlist = async (req, res) => {
  const { productId } = req.params;
  const user = await User.findOneAndUpdate(
    { email: req.user.email },
    { $pull: { wishlist: productId } }
  ).exec();

  res.json({ ok: true });
};

exports.saveShippingBilling = (req, res) => {
  const {
    ship_name,
    ship_email,
    ship_phone,
    ship_address,
    ship_city,
    ship_state,
    ship_zip,
    bill_name,
    bill_address,
    bill_city,
    bill_state,
    bill_zip,
  } = req.body.values;
  // console.log(token);

  ShippingAndBillingAddress.findOne({ user: req.user._id }).exec(
    (err, shippingAndBillingAddress) => {
      if (!shippingAndBillingAddress) {
        let shippingAndBillingAddress1 = new ShippingAndBillingAddress();
        shippingAndBillingAddress1.ship_name = ship_name;
        shippingAndBillingAddress1.ship_email = ship_email;
        shippingAndBillingAddress1.ship_phone = ship_phone;
        shippingAndBillingAddress1.ship_address = ship_address;
        shippingAndBillingAddress1.ship_city = ship_city;
        shippingAndBillingAddress1.ship_state = ship_state;
        shippingAndBillingAddress1.ship_zip = ship_zip;

        shippingAndBillingAddress1.bill_name = bill_name;
        shippingAndBillingAddress1.bill_address = bill_address;
        shippingAndBillingAddress1.bill_city = bill_city;
        shippingAndBillingAddress1.bill_state = bill_state;
        shippingAndBillingAddress1.bill_zip = bill_zip;
        shippingAndBillingAddress1.user = req.user._id;
        shippingAndBillingAddress1.save((err, result) => {
          if (err || !result) {
            return res.status(400).json({
              error: "Cannot Create A New shipping and billing address",
            });
          }
          res.json({ ok: true });
        });
      } else {
        shippingAndBillingAddress.ship_name = ship_name;
        shippingAndBillingAddress.ship_email = ship_email;
        shippingAndBillingAddress.ship_phone = ship_phone;
        shippingAndBillingAddress.ship_address = ship_address;
        shippingAndBillingAddress.ship_city = ship_city;
        shippingAndBillingAddress.ship_state = ship_state;
        shippingAndBillingAddress.ship_zip = ship_zip;

        shippingAndBillingAddress.bill_name = bill_name;
        shippingAndBillingAddress.bill_address = bill_address;
        shippingAndBillingAddress.bill_city = bill_city;
        shippingAndBillingAddress.bill_state = bill_state;
        shippingAndBillingAddress.bill_zip = bill_zip;

        shippingAndBillingAddress.user = req.user._id;

        shippingAndBillingAddress.save((err, result) => {
          if (err || !result) {
            return res.status(400).json({
              error: "Cannot Update A New shipping and billing address",
            });
          }
          res.json({ ok: true });
        });
      }
    }
  );
};

exports.saveShippingBillingBothSame = (req, res) => {
  const {
    ship_name,
    ship_email,
    ship_phone,
    ship_address,
    ship_city,
    ship_state,
    ship_zip,
  } = req.body.values;
  // console.log(token);

  ShippingAndBillingAddress.findOne({ user: req.user._id }).exec(
    (err, shippingAndBillingAddress) => {
      if (!shippingAndBillingAddress) {
        let shippingAndBillingAddress1 = new ShippingAndBillingAddress();
        shippingAndBillingAddress1.ship_name = ship_name;
        shippingAndBillingAddress1.ship_email = ship_email;
        shippingAndBillingAddress1.ship_phone = ship_phone;
        shippingAndBillingAddress1.ship_address = ship_address;
        shippingAndBillingAddress1.ship_city = ship_city;
        shippingAndBillingAddress1.ship_state = ship_state;
        shippingAndBillingAddress1.ship_zip = ship_zip;

        shippingAndBillingAddress1.bill_name = ship_name;
        shippingAndBillingAddress1.bill_address = ship_address;
        shippingAndBillingAddress1.bill_city = ship_city;
        shippingAndBillingAddress1.bill_state = ship_state;
        shippingAndBillingAddress1.bill_zip = ship_zip;
        shippingAndBillingAddress1.user = req.user._id;
        shippingAndBillingAddress1.save((err, result) => {
          if (err || !result) {
            return res.status(400).json({
              error: "Cannot Create A New shipping and billing address",
            });
          }
          res.json({ ok: true });
        });
      } else {
        shippingAndBillingAddress.ship_name = ship_name;
        shippingAndBillingAddress.ship_email = ship_email;
        shippingAndBillingAddress.ship_phone = ship_phone;
        shippingAndBillingAddress.ship_address = ship_address;
        shippingAndBillingAddress.ship_city = ship_city;
        shippingAndBillingAddress.ship_state = ship_state;
        shippingAndBillingAddress.ship_zip = ship_zip;

        shippingAndBillingAddress.bill_name = ship_name;
        shippingAndBillingAddress.bill_address = ship_address;
        shippingAndBillingAddress.bill_city = ship_city;
        shippingAndBillingAddress.bill_state = ship_state;
        shippingAndBillingAddress.bill_zip = ship_zip;

        shippingAndBillingAddress.user = req.user._id;

        shippingAndBillingAddress.save((err, result) => {
          if (err || !result) {
            return res.status(400).json({
              error: "Cannot Update A New shipping and billing address",
            });
          }
          res.json({ ok: true });
        });
      }
    }
  );
};

exports.getBillingAndShippingAddress = async (req, res) => {
  let shippingAndBillingAddress = await ShippingAndBillingAddress.findOne({
    user: req.user._id,
  }).exec();

  res.json({
    shippingAndBillingAddress,
  });
};

exports.getLatestOrder = async (req, res) => {
  const user = await User.findOne({ email: req.user.email }).exec();

  let order = await Order.findOne({ orderdBy: user._id })
    .sort({ createdAt: -1 })
    .populate("products.product")
    .limit(1)
    .exec();
  // console.log('order', order);

  res.json(order);
};

exports.getDetailOrderBaseOnTrackId = async (req, res) => {
  // let order = await Order.findOne({ trackId: req.params.trackId })
  //   .sort({ createdAt: -1 })
  //   .limit(1)
  //   .exec();

  // res.json(order);

  Order.findOne({ trackId: req.params.trackId }).exec((err, order) => {
    if (!order) {
      return res.status(400).json({
        error: "Cannot Find Order",
      });
    }

    res.json(order);
  });
};

exports.requestCancelOrder = (req, res) => {
  console.log("req.params.trackId", req.params.trackId);

  Order.findOne({ trackId: req.params.trackId }).exec((err, oldOrder) => {
    if (err) {
      return res.status(400).json({
        error: "Not Found Order",
      });
    }

    oldOrder.orderStatus = 5;
    oldOrder.reason.push({
      name: 5,
      date: Date.now(),
    });
    oldOrder.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: "cannot save",
        });
      }
      res.json(result);
    });
  });
};
