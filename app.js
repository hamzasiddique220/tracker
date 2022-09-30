const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const PORT = 3001;
const connection = require("./utils/connection");
connection()
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



// app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(function (err, req, res, next) {
  res.status(500).send("something went wrong");
});


module.exports = app.listen(PORT, () =>
  console.log("Server Started on Port: " + PORT)
);

module.exports = app;
