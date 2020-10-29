const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { readdirSync } = require("fs");
require("dotenv").config();

// app
const app = express();

// db

if(process.env.VERSION=='production'){
  db=process.env.DATABASE_PRODUCTION
}else if(process.env.VERSION=='development'){
  db=process.env.DATABASE_DEVELOPMENT
}

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERR", err));

const authRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/category');
const subRoutes = require('./routes/sub');
const subSubRoutes = require('./routes/subSub');
const productRoutes = require('./routes/product');
const cloudinaryRoutes = require('./routes/cloudinary');
const brandRoutes = require('./routes/brand');
const colorRoutes = require('./routes/color');
const sizeRoutes = require('./routes/size');
const couponRoutes = require('./routes/coupon');

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: '5mb', type: 'application/json' }));
app.use(cors());

// routes middleware

app.use('/api', authRoutes);
app.use('/api', categoryRoutes);
app.use('/api', subRoutes);
app.use('/api', subSubRoutes);
app.use('/api', productRoutes);
app.use('/api', cloudinaryRoutes);
app.use('/api', brandRoutes);
app.use('/api', colorRoutes);
app.use('/api', sizeRoutes);
app.use('/api', couponRoutes);

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
