const Product = require("../model/productSchema");

const productEditController = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;

    const updatedData = {
      name,
      description,
      price,
      category,
    };

    if (req.file) {
      updatedData.image = req.file.path; 
    }

    const product = await Product.findByIdAndUpdate(req.query.id, updatedData, {
      new: true, 
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Error updating product", error });
  }
};

module.exports = productEditController;
