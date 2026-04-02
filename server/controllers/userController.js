const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Signup successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Server error during signup" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      "secretkey",
      { expiresIn: "7d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        subscription: user.subscription,
        charity: user.charity,
        scores: user.scores,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
};

const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch profile" });
  }
};

const updateSubscription = async (req, res) => {
  try {
    const { subscription } = req.body;

    if (!["monthly", "yearly"].includes(subscription)) {
      return res.status(400).json({ message: "Invalid subscription plan" });
    }

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { subscription },
      { new: true }
    ).select("-password");

    res.status(200).json({
      message: "Subscription updated",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to update subscription" });
  }
};

const updateCharity = async (req, res) => {
  try {
    const { charity } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { charity },
      { new: true }
    ).select("-password");

    res.status(200).json({
      message: "Charity updated",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to update charity" });
  }
};

const addScore = async (req, res) => {
  try {
    const { score, date } = req.body;

    if (!score || !date) {
      return res.status(400).json({ message: "Score and date are required" });
    }

    if (score < 1 || score > 45) {
      return res.status(400).json({ message: "Score must be between 1 and 45" });
    }

    const user = await User.findById(req.user.id);

    user.scores.push({ score, date });
    user.scores.sort((a, b) => new Date(b.date) - new Date(a.date));
    user.scores = user.scores.slice(0, 5);

    await user.save();

    res.status(200).json({
      message: "Score added successfully",
      scores: user.scores,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to add score" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users" });
  }
};

module.exports = {
  signupUser,
  loginUser,
  getProfile,
  updateSubscription,
  updateCharity,
  addScore,
  getAllUsers,
};