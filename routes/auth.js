const express = require("express")
const router = express.Router();
const userModel = require("../models/user.model")

const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.get("/login", (req, res, next) => {
  res.json({ message: 'login rendered.' })
});

router.get("/signup", (req, res, next) => {
  res.json({ message: 'signup rendered yesss.' })
});



module.exports = router;