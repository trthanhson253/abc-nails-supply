const User = require('../models/user');
const AWS = require('aws-sdk');
const jwt = require('jsonwebtoken');
const { registerEmailParams, activateSuccessEmailParams,forgotPasswordEmailParams } = require('../helpers/email');
const _ = require('lodash');

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

exports.register = (req, res) => {
    // console.log('REGISTER CONTROLLER', req.body);
    const { name,email, password, confirmPassword} = req.body;
    // check if user exists in our db
    User.findOne({ email }).exec((err, user) => {
        if (user) {
            return res.status(400).json({
                error: 'The username or email you have chosen already exists. Please try another one.'
            });
        }
        if (password != confirmPassword) {
            return res.status(400).json({
                error: 'The passwords in the Password and Confirm password fields do not match.'
            });
        }
        // generate token with user name email and password
        const token = jwt.sign({ name,email, password }, process.env.JWT_ACCOUNT_ACTIVATION, {
            expiresIn: '3d'
        });

        // send email
        const params = registerEmailParams(name, email, token);

        const sendEmailOnRegister = ses.sendEmail(params).promise();

        sendEmailOnRegister
            .then(data => {
                console.log('email submitted to SES', data);
                res.json({
                    message: `An activation link has been sent to ${email}, please follow the instructions to activate your account.`
                });
            })
            .catch(error => {
                console.log('ses email on register', error);
                res.json({
                    error: `We can not verify your email. Please try again`
                });
            });
    });
};

exports.registerActivate = (req, res) => {
    const { token } = req.params;
    // console.log(token);
    jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, function(err, decoded) {
        if (err) {
            return res.status(401).json({
                error: 'This link is already expired. Please register again'
            });
        }

        const { name, email, password } = jwt.decode(token);

        User.findOne({ email }).exec((err, user) => {
            if (user) {
                return res.status(401).json({
                    error: 'Your account is already activated. Please sign in.'
                });
            }

            // register new user
            const newUser = new User({ name, email, password });
            newUser.save((err, result) => {
                if (err) {
                    return res.status(401).json({
                        error: 'Error saving user in database. Try later'
                    });
                }
                // send email
                const params = activateSuccessEmailParams(name, email);
                ses.sendEmail(params).promise();

                return res.json({
                    message: 'Congratulations ! Your account is activated.'
                });
            });
        });
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;
    // console.table({ email, password });
    User.findOne({ email }).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'The username or password you have entered is invalid. Please try again.'
            });
        }
        // authenticate
        if (!user.authenticate(password)) {
            return res.status(400).json({
                error: 'Email and password do not match'
            });
        }
        // generate token and send to client
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        const { email,name,role,_id } = user;

        return res.json({
            token,
            user: { email,name,role,_id }
        });
    });
};


exports.forgotPassword = (req, res) => {
    const { email } = req.body;
    // check if user exists with that email
    User.findOne({ email }).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'This email does not exist'
            });
        }
        // generate token and email to user
        const token = jwt.sign({ name: user.name }, process.env.JWT_RESET_PASSWORD, { expiresIn: '10m' });
        // send email
        const params = forgotPasswordEmailParams(email, token);

        // populate the db > user > resetPasswordLink
        return user.updateOne({ resetPasswordLink: token }, (err, success) => {
            if (err) {
                return res.status(400).json({
                    error: 'Password reset failed. Try later.'
                });
            }
            const sendEmail = ses.sendEmail(params).promise();
            sendEmail
                .then(data => {
                    console.log('ses reset pw success', data);
                    return res.json({
                        message: `Email has been sent to ${email}. Click on the link to reset your password`
                    });
                })
                .catch(error => {
                    console.log('ses reset pw failed', error);
                    return res.json({
                        message: `We could not verify your email at this time. Please try again later.`
                    });
                });
        });
    });
};

exports.resetPassword = (req, res) => {
    const { resetPasswordLink, newPassword } = req.body;
    if (resetPasswordLink) {
        // check for expiry
        jwt.verify(resetPasswordLink, process.env.JWT_RESET_PASSWORD, (err, success) => {
            if (err) {
                return res.status(400).json({
                    error: 'Expired Link. Try again.'
                });
            }

            User.findOne({ resetPasswordLink }).exec((err, user) => {
                if (err || !user) {
                    return res.status(400).json({
                        error: 'Invalid token. Try again'
                    });
                }

                const updatedFields = {
                    password: newPassword,
                    resetPasswordLink: ''
                };

                user = _.extend(user, updatedFields);

                user.save((err, result) => {
                    if (err) {
                        return res.status(400).json({
                            error: 'Password reset failed. Try again.'
                        });
                    }

                    res.json({
                        message: `Congratulations!Now you can login with your new password.`
                    });
                });
            });
        });
    }
};


exports.currentUser = async (req, res) => {
    
    User.findOne({ _id: req.user._id }).exec((err, user) => {
      if (err) throw new Error(err);
      res.json(user);
    });
  };
  