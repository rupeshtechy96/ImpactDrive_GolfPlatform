const express = require("express");
const {
  signupUser,
  loginUser,
  getProfile,
  updateSubscription,
  updateCharity,
  addScore,
  getAllUsers,
} = require("../controllers/userController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.get("/profile", authMiddleware, getProfile);
router.put("/subscription", authMiddleware, updateSubscription);
router.put("/charity", authMiddleware, updateCharity);
router.post("/scores", authMiddleware, addScore);
router.get("/all", authMiddleware, getAllUsers);

module.exports = router;