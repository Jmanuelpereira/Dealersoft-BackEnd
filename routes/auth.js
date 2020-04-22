const express = require("express")
const router = express.router()
const userModel = require("../models/user.model")

const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.get("/login", (req, res, next) => {
  res.render("auth/login");
});

module.exports = router;