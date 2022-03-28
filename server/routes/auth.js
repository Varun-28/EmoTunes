const express = require("express");
const User = require("../modules/User.js");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser.js");

//ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 8 characters").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    // If there are errors return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    // check whether the user with this email already exists
    try {
      let user = await User.findOne({ email: req.body.email });
      // if user exists
      if (user) {
        return res.status(400).json({
          success: false,
          error: "Sorry a user with this email already exists",
        });
      }
      // encoding user password using HASH and SALT
      const salt = await bcrypt.genSalt(10);
      const securePass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: securePass,
      });
      // creating token for user
      const authData = { user: { id: user.id } };
      const authToken = jwt.sign(authData, process.env.JWT_SECRET);
      res.json({
        success: true,
        authToken,
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    // If there are errors return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // getting entered email and password
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      // if user does not exists
      if (!user) {
        return res.status(400).json({
          success: false,
          error: "Please try to login with correct credentials",
        });
      }

      // matching password of existing user
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({
          success: false,
          error: "Please try to login with correct credentials",
        });
      }

      const authData = { user: { id: user.id } };
      const authToken = jwt.sign(authData, process.env.JWT_SECRET);
      res.json({
        success: true,
        authToken,
        playlist: user.playlist,
        favourite: user.favourite,
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.post("/getuser", fetchUser, async (req, res) => {
  // this is next function which will run after fetchUser
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
