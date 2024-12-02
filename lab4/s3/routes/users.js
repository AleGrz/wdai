const express = require("express");
const router = express.Router();
const { Users } = require("../init_db.js");
const jwt = require("jsonwebtoken");

router.post("/register", async function (req, res) {
  try {
    let user = await Users.findOne({ where: req.body });
    if (user != null) {
      return res.status(401).json({ message: "user exists" });
    }
    let token = jwt.sign(
      req.body,
      "3c686fe447b1b1e4f1b101dad5d222c572062bf5e4f41c8b0170dfe5395534f03a21ec549d4bd9521b0224ad7d5ac137d536090288f8818c7a8173ea4a591fa8"
    );
    Users.create(req.body);
    return res.json({ token: token });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "server error" });
  }
});

router.post("/login", async function (req, res) {
  try {
    let user = await Users.findOne({ where: req.body });
    if (user === null) {
      return res.status(401).json({ message: "invalid credentials" });
    }
    let token = jwt.sign(
      req.body,
      "3c686fe447b1b1e4f1b101dad5d222c572062bf5e4f41c8b0170dfe5395534f03a21ec549d4bd9521b0224ad7d5ac137d536090288f8818c7a8173ea4a591fa8"
    );
    return res.json({ token: token });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "server error" });
  }
});

module.exports = router;
