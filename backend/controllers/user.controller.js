//register.controller.js
const User = require("../models/User.model");
const Order = require("../models/Order.model");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const sendVerificationEmail = async (email, verificationToken) => {
  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    // Configure the email service or SMTP details here
    service: "gmail",
    auth: {
      user: "prasannatapkire7@gmail.com",
      pass: "lpurlgmukvgejidr",
    },
  });

  // Compose the email message
  const mailOptions = {
    from: "amazon.com",
    to: email,
    subject: "Email Verification",
    text: `Please click the following link to verify your email: http://192.168.29.112:4000/verify/${verificationToken}`,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    console.log("Verification email sent successfully");
  } catch (error) {
    console.error("Error sending verification email:", error);
  }
};

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Existing user?
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already registered" });
    }

    const newUser = new User({ username, email, password });
    newUser.verificationToken = crypto.randomBytes(20).toString("hex");
    sendVerificationEmail(newUser.email, newUser.verificationToken);

    // Save the user to the database
    await newUser.save();

    console.log("New User Registered:", newUser);

    res.status(200).json({ message: "Registration successful", user: newUser });
  } catch (err) {
    console.log("Error registering User", err);
    res.status(500).json({ message: "Registration Failed" });
  }
};

const verifyUser = async (req, res) => {
  try {
    const token = req.params.token;
    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      return res.status(404).json({ message: "Invalid Verification token" });
    }
    user.verified = true;
    user.verificationToken = undefined;
    await user.save();
  } catch (err) {
    res.status(500).json({ message: "Email Verification Failed" });
  }
};
const generateSecretKey = () => {
  let secret = crypto.randomBytes(32).toString("hex");
  return secret;
};
const secretKey = generateSecretKey();

//login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //check if user exists
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or passowrd" });
    }

    //check password correct or not
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    //generate token
    const token = jwt.sign({ userId: user._id }, secretKey);
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: "Login Failed" });
  }
};
const storeAddress = async (req, res) => {
  try {
    const { userId, address } = req.body;

    //find by userId
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "No such user found" });
    }

    user.addresses.push(address);

    await user.save();
    return res.status(200).json({ message: "Address stored successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error storing address" });
  }
};

// get addresses of a particular user
const getUserAddress = async (req, res) => {
  try {
    // const { userId } = req.params.userId;
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "No such User" });
    }
    const addresses = user.addresses;
    res.status(200).json({ addresses });
  } catch (error) {
    res.status(500).json({ message: "Error getting user address" });
  }
};

//store orders of a user
const storeOrders = async (req, res) => {
  try {
    const { userId, cartItems, totalPrice, shippingAddress, paymentMethod } =
      req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "Error Storing Orders" });
    }
    const products = cartItems.map((item) => ({
      name: item.title,
      quantity: item.quantity,
      price: item.price,
      image: item.image,
    }));
    const order = new Order({
      user: userId,
      products: products,
      totalPrice: totalPrice,
      shippingAddress: shippingAddress,
      paymentMethod: paymentMethod,
    });
    await order.save();
    res.status(200).json({ message: "Order stored successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating orders" });
  }
};

//get User profile
const getUserProfile = async (req, res) => {
  try {
    // const userId = req.params.id;
    const userId = req.params.userId;

    const user = await User.findOne({ _id: userId });
    if (!user) {
      return res.status(400).json({ message: "No such user found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving User" });
  }
};

//get user orders
const getUserOrders = async (req, res) => {
  try {
    const userId = req.params.userId;
    const orders = await Order.find({ user: userId }).populate("user");
    if (!orders || orders.length === 0) {
      return res
        .status(400)
        .json({ message: "No orders found for the particular user" });
    }
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving user orders" });
  }
};

module.exports = {
  verifyUser,
  registerUser,
  loginUser,
  storeAddress,
  getUserAddress,
  storeOrders,
  getUserProfile,
  getUserOrders,
};
