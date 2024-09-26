const Category = require("../model/categorySchema");

const updateCategoryController = async (req, res) => {
  try {
    const { name, description } = req.body;
    const categoryId = req.query.id;

    
    const existingCategory = await Category.findOne({ name, _id: { $ne: categoryId } });

    if (existingCategory) {
      return res.status(400).json({ message: "Category with this name already exists" });
    }

    const category = await Category.findByIdAndUpdate(
      categoryId,
      { name, description },
      { new: true }
    );

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: "Error updating category", error });
  }
};

module.exports = updateCategoryController;
