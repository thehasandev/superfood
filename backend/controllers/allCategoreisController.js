const Category = require("../model/categorySchema");

const allCategoreisController = async (req, res) => {
  try {
    const categories = await Category.find().populate("createdBy","name");
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching categories", error });
  }
};

module.exports = allCategoreisController;
