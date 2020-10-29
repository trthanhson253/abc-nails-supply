const User = require("../models/user");
const expressJwt = require('express-jwt');

exports.requireSignin = expressJwt({ secret:  process.env.JWT_SECRET });

exports.authCheck = (req, res, next) => {
    const authUserId = req.user._id;
    User.findOne({ _id: authUserId }).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        req.profile = user;
        next();
    });
};

exports.adminCheck = (req, res, next) => {
    const adminUserId = req.user._id;
    User.findOne({ _id: adminUserId }).exec((err, data) => {
        if (err || !data) {
            return res.status(400).json({
                error: 'User not found'
            });
        }

        if (data.role != 0) {
            return res.status(400).json({
                error: 'Admin resource. Access denied'
            });
        }

        req.user = data;
        next();
    });
};


