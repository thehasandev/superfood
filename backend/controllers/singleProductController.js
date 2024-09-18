const Product = require("../model/productSchema");

const singleProductController = async (req, res) => {
  try {
    const product = await Product.findById(req.query.id).populate(
      "category",
      "name"
    );
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error });
  }
};

module.exports = singleProductController;
