const Category = require("../model/categorySchema");
const deleteCategoryController = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.query.id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({ message: "Category deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting category", error });
  }
};

module.exports = deleteCategoryController;
