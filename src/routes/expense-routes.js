const express = require("express");
const router = express.Router();
const {addExpense ,getAllUserExpense} = require("../controller/expense-Controller");

router.post("/expense", addExpense)
router.get("/fetch/expense", getAllUserExpense);


module.exports = router;