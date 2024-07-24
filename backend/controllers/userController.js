const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({
      name,
      email,
      password,
    });
    const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "24h" });

    res.status(201).json({ success: true, token });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      console.log("user not found");
      return res
        .status(400)
        .json({ success: false, error: "wrong credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.log("password doesnt match ...");
      return res
        .status(400)
        .json({ success: false, error: "Wrong credentianls" });
    }

    const token = jwt.sign({ id: user._id, isAdmin }, "secret", {
      expiresIn: "24h",
    });
    console.log("login successfull..");

    res.json({ token, isAdmin: user.isAdmin });

    res.status(200).json({ success: true, token });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { signup, login };
