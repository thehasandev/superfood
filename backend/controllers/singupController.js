const bcrypt = require("bcrypt");
const User = require("../model/userSchema");

const signupController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const image = req.file.path;
    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      image,
    });

    // Save the new user to the database
    await newUser.save();

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error during user registration", error });
  }
};

module.exports = signupController;
