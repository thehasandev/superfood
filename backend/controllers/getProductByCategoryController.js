const Product = require("../model/productSchema");
const Category = require("../model/categorySchema");
const getProductByCategoryController = async (req, res) => {
  try {
    const category = await Category.findById(req.query.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    const products = await Product.find({ category: category._id }).populate(
      "category"
    );

    res.status(200).json({
      category: category,
      products: products,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching products by category", error });
  }
};

module.exports = getProductByCategoryController;
