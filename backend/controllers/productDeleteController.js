const Product = require("../model/productSchema");

const productDeleteController = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.query.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error });
  }
};

module.exports = productDeleteController;
