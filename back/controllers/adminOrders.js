const Order = require("../models/order");
const User = require("../models/user");

exports.orders = async (req, res) => {
  let allOrders = await Order.find({})
    .sort({ createdAt: -1 })
    .populate("products.product")
    .populate("orderdBy")
    .exec();

  res.json(allOrders);
};

exports.orderStatus = async (req, res) => {
  // console.log(req.body);
  // return;
  const { orderId, orderStatus } = req.body;

  let updated = await Order.findByIdAndUpdate(
    orderId,
    { orderStatus },
    { new: true }
  ).exec();

  res.json(updated);
};

exports.getAdminDetailOrder = async (req, res) => {
  let order = await Order.find({ trackId: req.params.orderId })
    .sort({ createdAt: -1 })
    .populate("products.product")
    .populate("orderdBy")
    .exec();

  res.json(order);
};
