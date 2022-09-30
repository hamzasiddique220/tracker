const express = require("express");
const router = express.Router();
const JwtAuthentication = require("../middleware/jwt-auth");
const { loginUser, registerNewUser } = require("../controller/user-controller");

router.post("/register", registerNewUser);
router.post("/login", loginUser);

module.exports = router;