var express = require('express');
var router = express.Router();
const userDetails = require("./models/userDetails");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post("/save", async (req, res) => {
  if (req.body !=null) {
    userDetails
      .create(req.body)
      .then((user) => {
        res.status(200).json({
          user,
          statusCode: 200,
        });
      })
      .catch((e) => {
        console.error("error: ", e);
        res.send({ error: e.data, statusCode: 400 });
      });
  } else {
    res.status(500).send({ error: "invalid parameters" });
  }
});
module.exports = router;
