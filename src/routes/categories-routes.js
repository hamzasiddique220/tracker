const express = require("express");
const router = express.Router();
const JwtAuthentication = require("../middleware/jwt-auth");
const {addCategories } = require("../controller/categories-Contoller");

router.post("/categories",JwtAuthentication, addCategories);

module.exports = router;