const Product = require("../model/productSchema");

const productEditController = async (req, res) => {
  try {
    const { name, description, price, category, image } = req.body;

    const product = await Product.findByIdAndUpdate(
      req.query.id,
      { name, description, price, category, image },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
};

module.exports = productEditController;
