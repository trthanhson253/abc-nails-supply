const Category = require("../models/category");
const Product = require("../models/product");
const Sub = require("../models/sub");
const SubSub = require("../models/subSub");
const slugify = require("slugify");
const cloudinary = require("cloudinary");

exports.create = async (req, res) => {
  try {
    // console.log(req.body);
    req.body.slug = slugify(req.body.name);
    const newCategory = await new Category(req.body).save();
    res.json(newCategory);
  } catch (err) {
    res.status(400).send("Create category failed");
  }
};

exports.list = async (req, res) =>
  res.json(await Category.find({})
  .select('_id name slug images')
  .collation({locale:'en',strength: 2}).sort({ name: 1 }).exec());

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

exports.remove = async (req, res) => {
  try {
    const { images,cateId } = req.body;
    
    await Product.deleteMany({ category : cateId});
    await SubSub.deleteMany({ category : cateId});
    await Sub.deleteMany({ category : cateId});  
    const deletedCategory = await Category.findOneAndDelete({ slug: req.params.slug }); 
    // res.json(deletedCategory);
    if(images.length == 2){
      console.log(images[1])
      cloudinary.uploader.destroy(images[1].public_id, (err, result) => {
        if (err) return res.json({ success: false, err });
        res.send("ok");
      });
    }else{
      res.json(deletedCategory);
    }
  } catch (err) {
    res.status(400).send("Category delete failed");
  }
};

exports.getSubs = (req, res) => {
  // console.log(req.params._id);
  Sub.find({ category: req.params._id }).exec((err, subs) => {
    if (err) console.log(err);
    res.json(subs);
    // console.log(subs);
  });
};

exports.getSubSubs = (req, res) => {
  SubSub.find({ sub: req.params._id }).exec((err, data) => {
    if (err) console.log(err);
    res.json(data);
    // console.log(subs);
  });
};

exports.loadMenu = async (req, res) => {
  const { id } = req.body;
  let result=[];

  const subAll = await Sub.find({ category: id }).exec();
  for (let i = 0; i < subAll.length; i++) {
    let object = {};
    // console.log("subAll",subAll[i]._id);
    const subSubAll = await SubSub.find({sub:subAll[i]._id}).exec();
    // console.log("subSubAll",subSubAll);
    object.name=subAll[i].name;
    object.slug=subAll[i].slug;
    object.subSub=subSubAll;
    result.push(object);
  }
  res.json({ result });
};

