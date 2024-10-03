const express = require("express");
const _ = express.Router();
const productRoute = require("./productRoutes")
const authRouts = require("./authRouths")

_.use("/product",productRoute)
_.use("/auth",authRouts)

module.exports = _;
