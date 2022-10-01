const express = require("express");
const router = express.Router();
const {addIncome,getAllUserIncome } = require("../controller/income-Controller");

router.post("/income", addIncome);
router.get("/fetch/income", getAllUserIncome);


module.exports = router;