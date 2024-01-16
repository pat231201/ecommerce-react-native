const router = require("express").Router();
const {
  registerUser,
  verifyUser,
  loginUser,
  getUserOrders,
  getUserAddress,
  getUserProfile,
  storeAddress,
  storeOrders,
} = require("../controllers/user.controller");

router.post("/register", registerUser);
router.get("/verify/:token", verifyUser);
router.post("/login", loginUser);
router.get("/addresses/:userId", getUserAddress);
router.get("/orders/:userId", getUserOrders);
router.get("/profile/:userId", getUserProfile);
router.post("/addresses", storeAddress);
router.post("/orders", storeOrders);

module.exports = router;
