const express = require("express");
const router = express.Router();
const JwtAuthentication = require("../middleware/jwt-auth");
const {addExpense } = require("../controller/expense-Controller");

router.post("/expense", addExpense);

module.exports = router;