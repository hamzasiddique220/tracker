const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/variables");

module.exports = function (req, res, next) {
  // Retrieving the token from the http header
  const header_token =
    req.header("authorization") || req.header("Authorization");
  // Check whether a token is available or not
  if (!header_token) {
    return res
      .status(401)
      .json({ status: false, msg: "No token found, authorization denied" });
  }
  const token = header_token.split("Bearer ")[1];
  // Verifying the present token
  try {
    const decoded = jwt.verify(token, jwtSecret); // token verification
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(200).json({ status: false, msg: "Token is not valid" });
  }
};