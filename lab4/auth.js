const jwt = require("jsonwebtoken");

function authenticate(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.status(401).json({ message: "not authenticated" });
  }

  jwt.verify(
    token,
    "3c686fe447b1b1e4f1b101dad5d222c572062bf5e4f41c8b0170dfe5395534f03a21ec549d4bd9521b0224ad7d5ac137d536090288f8818c7a8173ea4a591fa8",
    (err, user) => {
      console.log(err);
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    }
  );
}

module.exports = authenticate;
