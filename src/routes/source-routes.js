const express = require("express");
const router = express.Router();
const JwtAuthentication = require("../middleware/jwt-auth");
const {addSource ,getAllUserSource,updateUserSource} = require("../controller/source-Controller");

router.post("/source", addSource);
router.get("/fetch/source", getAllUserSource);
router.post("/update/source", updateUserSource);



module.exports = router