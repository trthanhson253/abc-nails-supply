const User = require("../models/user");
const Product = require("../models/product");
const Cart = require("../models/cart");
const Coupon = require("../models/coupon");
const Order = require("../models/order");
const OrderUpdate = require("../models/orderUpdate");
const { orderPlaceEmail } = require("../helpers/email");
const AWS = require("aws-sdk");
// const uniqueid = require('uniqueid');
// const shortId = require("shortid");
const nanoid = require("nanoid");
const ShippingAndBillingAddress = require("../models/shippingAndBillingAddress");

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});
const ses = new AWS.SES({ apiVersion: "2010-12-01" });
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

    object.product = cart[i].product._id;
    object.count = cart[i].count;
    // get price for creating total
    let productFromDb = await Product.findById(cart[i].product._id)
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
  cartTotalBeforeTax = cartTotal.toFixed(2);
  cartTotal = (cartTotal * 1.08 + 8).toFixed(2);
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

// exports.getUserCart = async (req, res) => {
//   // const user = await User.findOne({ email: req.user.email }).exec();

//   let cart = await Cart.findOne({ orderdBy: req.user._id })
//     .populate("products.product", "_id name price image")
//     .exec();

//   const {
//     products,
//     cartTotal,
//     totalAfterDiscount,
//     shipOption,
//     cartTotalBeforeTax,
//   } = cart;
//   console.log("cart", cart);
//   res.json({
//     products,
//     cartTotal,
//     totalAfterDiscount,
//     shipOption,
//     cartTotalBeforeTax,
//   });
// };

exports.getUserCart = (req, res) => {
  Cart.findOne({ orderdBy: req.user._id })
    .populate("products.product", "_id name price image")
    .exec((err, cart) => {
      if (err) {
        return res.status(400).json({
          error: "Not Found Cart",
        });
      }
      const {
        products,
        cartTotal,
        totalAfterDiscount,
        shipOption,
        cartTotalBeforeTax,
      } = cart;
      // console.log("cart", cart);
      res.json({
        products,
        cartTotal,
        totalAfterDiscount,
        shipOption,
        cartTotalBeforeTax,
      });
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
      cartTotal = (cartTotal - 8.0).toFixed(2);
      shipOption = 1;
    }
  } else {
    if (shipping == 0) {
      cartTotal = (cartTotal + 8.0).toFixed(2);
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
  // console.log("VALID COUPON", validCoupon);

  const user = await User.findOne({ email: req.user.email }).exec();

  let {
    products,
    cartTotalBeforeTax,
    shipOption,
    cartTotal,
  } = await Cart.findOne({
    orderdBy: user._id,
  })
    .populate("products.product", "_id title price")
    .exec();

  // console.log('cartTotal', cartTotal, 'discount%', validCoupon.discount);

  // calculate the total after discount
  let totalAfterDiscount =
    cartTotalBeforeTax - (cartTotalBeforeTax * validCoupon.discount) / 100; // 99.99
  if (shipOption == 0) {
    cartTotal = (totalAfterDiscount * 1.08 + 8.0).toFixed(2);
  } else {
    cartTotal = (totalAfterDiscount * 1.08).toFixed(2);
  }

  // console.log("totalAfterDiscount ", totalAfterDiscount);
  // console.log("cartTotal ", cartTotal);
  // console.log("shipOption ", shipOption);

  Cart.findOneAndUpdate(
    { orderdBy: user._id },
    { totalAfterDiscount, cartTotal, shipOption },
    { new: true }
  ).exec();

  res.json({ totalAfterDiscount, cartTotal, shipOption });
};

exports.createOrder = async (req, res) => {
  // console.log(req.body.stripeResponse);
  // return;
  const { paymentIntent } = req.body.stripeResponse;

  const user = await User.findOne({ email: req.user.email });
  let address = await ShippingAndBillingAddress.findOne({ user: user._id });
  let { products, cartTotal, shipOption } = await Cart.findOne({
    orderdBy: user._id,
  });

  let newOrder = await new Order({
    products,
    paymentIntent,
    trackId: nanoid(),
    orderdBy: user._id,
    orderStatus: 0,
    address: address,
    shipOption: shipOption,
    total: cartTotal,
  });
  // newOrder.reason.push({
  //   name: 0,
  //   date: Date.now(),
  // });
  let orderUpdate = await new OrderUpdate({
    name: 0,
    order: newOrder._id,
  });
  newOrder.save();
  orderUpdate.save();

  // decrement quantity, increment sold
  let bulkOption = products.map((item) => {
    return {
      updateOne: {
        filter: { _id: item.product._id }, // IMPORTANT item.product
        update: {
          $inc: { quantity: -item.count, sold: +item.count },
          $addToSet: { verifiedPurchase: user._id },
        },
      },
    };
  });
  // console.log("bulkOption", bulkOption);
  let updated = await Product.bulkWrite(bulkOption, {});

  // const params = orderPlaceEmail(user.name, user.email, newOrder);
  // await ses.sendEmail(params).promise();

  res.json({ order: newOrder });
};

exports.orders = async (req, res) => {
  // let user = await User.findOne({ email: req.user.email }).exec();

  let userOrders = await Order.find({ orderdBy: req.user._id })
    .populate("products.product")
    .sort({ createdAt: -1 })
    .exec();

  res.json(userOrders);
};

exports.userOrderDetail = async (req, res) => {
  let userOrderDetail = await Order.findOne({
    trackId: req.params.trackId,
    orderdBy: req.user._id,
  })
    .populate("products.product")
    .exec();
  if (userOrderDetail) {
    res.json(userOrderDetail);
  } else {
    res.json({
      success: false,
      message: "You cannot access to this page",
    });
  }
};

exports.userOrderUpdate = async (req, res) => {
  let userOrder = await Order.findOne({ trackId: req.params.orderId }).exec();
  let userOrderUpdate = await OrderUpdate.find({ order: userOrder._id }).exec();
  res.json(userOrderUpdate);
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
  // console.log("shippingAndBillingAddress", shippingAndBillingAddress);
  res.json({
    shippingAndBillingAddress,
  });
};

// exports.getLatestOrder = async (req, res) => {
//   // const user = await User.findOne({ email: req.user.email }).exec();

//   let order = await Order.findOne({ orderdBy: req.user._id })
//     .sort({ createdAt: -1 })
//     .populate("products.product")
//     .limit(1)
//     .exec();
//   console.log("order", order);

//   res.json(order);
// };

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

exports.requestCancelOrder = async (req, res) => {
  let userOrder = await Order.findOneAndUpdate(
    { trackId: req.params.trackId },
    { orderStatus: 5 },
    { new: true }
  ).exec();
  let userOrderUpdate = new OrderUpdate({
    name: 5,
    order: userOrder._id,
  });

  userOrderUpdate.save();
  res.json({ ok: true });
};
