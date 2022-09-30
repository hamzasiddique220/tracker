const express = require("express");
const router = express.Router();
const JwtAuthentication = require("../middleware/jwt-auth");
const {addSource } = require("../controller/source-Controller");

router.post("/source", addSource);

module.exports = router