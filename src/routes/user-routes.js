const express = require("express");
const router = express.Router();
const JwtAuthentication = require("../middleware/jwt-auth");
const { loginUser, registerNewUser ,getAllUsers} = require("../controller/user-controller");

router.post("/register", registerNewUser);
router.post("/login", loginUser);
router.get("/fetch/users", getAllUsers);


module.exports = router;