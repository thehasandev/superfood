const express = require("express");
const productCreateController = require("../../controllers/productCreateControllers");
const productDeleteController = require("../../controllers/productDeleteController");
const productEditContoroller = require("../../controllers/productEditContoroller");
const allProductsController = require("../../controllers/allProductsController");
const upload = require("../../middleware/multer");
const createCategoryController = require("../../controllers/createCategory");
const deleteCategoryController = require("../../controllers/deleteCategoryController");
const updateCategoryController = require("../../controllers/updateCategoryController");
const allCategoreisController = require("../../controllers/allCategoreisController");
const singleCategoryController = require("../../controllers/singleCategoryController");
const singleProductController = require("../../controllers/singleProductController");
const _ = express.Router();

_.get("/categories", allCategoreisController);
_.get("/category", singleCategoryController);
_.post("/create-category", createCategoryController);
_.delete("/delete-category", deleteCategoryController);
_.patch("/update-category", updateCategoryController);

_.post("/create-product", upload.single("image"), productCreateController);
_.get("/allproduct", allProductsController);
_.get("/product", singleProductController);
_.patch("/update-product", productEditContoroller);
_.delete("/delete-product", productDeleteController);

module.exports = _;
