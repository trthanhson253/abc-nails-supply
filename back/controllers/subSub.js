const SubSub = require("../models/subSub");
const Sub = require("../models/sub");
const Product = require("../models/product");
const slugify = require("slugify");

exports.create = (req, res) => {
 
    const { name, category, sub } = req.body;
    Sub.findOne({ category }).exec((err, data) => {
      if (err || !data) {
        return res.status(400).json({
          error: 'Category and SubCategory does not match'
        });
      }
      let subSub = new SubSub();
      subSub.name = name;
      subSub.slug = slugify(name);
      subSub.category = category;
      subSub.sub = sub;

      subSub.save((err, result) => {
        if (err) {
          return res.status(400).json({
            error: 'Cannot Create SubCategory'
          });
        }
        res.json(result);
      });
  });
}

exports.list = async (req, res) =>
  res.json(await SubSub.find({})
  .populate("category", "name")
  .populate("sub", "name")
  .collation({locale:'en',strength: 2}).sort({ category:1,sub:1,name: 1, })  
  .sort({ createdAt: -1 }).exec());


  exports.remove = async (req, res) => {
    try {     
      await Product.deleteMany({ subSub : req.params.subSubId});   
      const deletedSubSub = await SubSub.findOneAndDelete({ slug: req.params.slug });
      res.json(deletedSubSub);
    } catch (err) {
      res.status(400).send("Sub-Sub delete failed");
    }
  };
  