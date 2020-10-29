const Brand = require("../models/brand");
const slugify = require("slugify");

exports.create = async (req, res) => {
  try {
    req.body.slug = slugify(req.body.name);
    const newBrand = await new Brand(req.body).save();
    res.json(newBrand);
  } catch (err) {
    res.status(400).send("Create Brand failed");
  }
};

exports.list = async (req, res) =>
  res.json(await Brand.find({}).collation({locale:'en',strength: 2}).sort({ name: 1 }).exec());

// exports.read = async (req, res) => {
//   let category = await Category.findOne({ slug: req.params.slug }).exec();
//   // res.json(category);
//   const products = await Product.find({ category }).populate("category").exec();

//   res.json({
//     category,
//     products,
//   });
// };

// exports.update = async (req, res) => {
//   const { name } = req.body;
//   try {
//     const updated = await Category.findOneAndUpdate(
//       { slug: req.params.slug },
//       { name, slug: slugify(name) },
//       { new: true }
//     );
//     res.json(updated);
//   } catch (err) {
//     res.status(400).send("Category update failed");
//   }
// };

// exports.remove = async (req, res) => {
//   try {
//     const deleted = await Category.findOneAndDelete({ slug: req.params.slug });
//     res.json(deleted);
//   } catch (err) {
//     res.status(400).send("Category delete failed");
//   }
// };

