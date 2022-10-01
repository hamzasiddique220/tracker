const express = require("express");
const router = express.Router();
const JwtAuthentication = require("../middleware/jwt-auth");
const {addCategories,getAllUserCategories,updateUserCategories } = require("../controller/categories-Contoller");
router.post("/categories", addCategories);
router.get("/fetch/categories", getAllUserCategories);
router.post("/update/categories", updateUserCategories);



module.exports = router;