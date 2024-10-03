const express = require("express");

const upload = require("../../middleware/multer");
const productCreateController = require("../../controllers/productCreateControllers");
const productDeleteController = require("../../controllers/productDeleteController");
const productEditContoroller = require("../../controllers/productEditContoroller");
const allProductsController = require("../../controllers/allProductsController");
const createCategoryController = require("../../controllers/createCategory");
const deleteCategoryController = require("../../controllers/deleteCategoryController");
const updateCategoryController = require("../../controllers/updateCategoryController");
const allCategoreisController = require("../../controllers/allCategoreisController");
const singleCategoryController = require("../../controllers/singleCategoryController");
const singleProductController = require("../../controllers/singleProductController");
const getProductByCategoryController = require("../../controllers/getProductByCategoryController");
const _ = express.Router();

_.get("/categories", allCategoreisController);
_.get("/categori", singleCategoryController);
_.get("/category", getProductByCategoryController);
_.post("/create-category", createCategoryController);
_.delete("/delete-category", deleteCategoryController);
_.put("/update-category", updateCategoryController);

_.post("/create-product", upload.single("image"), productCreateController);
_.get("/allproduct", allProductsController);
_.get("/single-product", singleProductController);
_.put("/update-product", upload.single("image"), productEditContoroller);
_.delete("/delete-product", productDeleteController);

module.exports = _;
