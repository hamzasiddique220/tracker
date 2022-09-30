const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const UserRoutes = require("../routes/user-routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

//  remove X-Powered-By to for security and saving bandwith
app.disable("x-powered-by");

// health route
app.use("/", (req, res) => res.send("Expense tracker v1"));

module.exports = {
    app,
  };