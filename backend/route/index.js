const express = require("express");
const _ = express.Router();
const productRoute = require("./productRoutes")

_.use("/product",productRoute)

module.exports = _;
