const express = require("express");
const router = express.Router();
const JwtAuthentication = require("../middleware/jwt-auth");
const {addIncome } = require("../controller/income-Controller");

router.post("/income", addIncome);

module.exports = router;