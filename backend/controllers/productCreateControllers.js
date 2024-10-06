const Product = require("../model/productSchema");
const Category = require("../model/categorySchema");
const mongoose = require("mongoose");

const productCreateController = async (req, res) => {
  try {
    const { name, description, price, category, createdBy } = req.body;

    // Validate category ID
    if (!mongoose.Types.ObjectId.isValid(category)) {
      return res.status(400).json({ message: "Invalid category ID" });
    }

    // Check if the category exists
    const existingCategory = await Category.findById(category);
    if (!existingCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    // Check if image was uploaded
    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const image = req.file.path;

    // Create a new product
    const newProduct = new Product({
      name,
      description,
      price,
      category,
      image,
      createdBy,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error });
  }
};

module.exports = productCreateController;
