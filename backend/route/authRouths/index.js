const express = require("express");

const upload = require("../../middleware/multer");
const signupController = require("../../controllers/singupController");
const loginController = require("../../controllers/loginController");
const _ = express.Router();

_.post("/singup", upload.single("image"), signupController);
_.post("/login", loginController);

module.exports = _;
