const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const session = require('express-session');  // session middleware
const passport = require('passport');  // authentication
const { sessionSecret } = require("./variables");

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

app.use(passport.initialize());
app.use(passport.session());

// init session
app.use(session({
  secret: sessionSecret,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
}));

// health route
app.use("/", (req, res) => res.send("Expense tracker v1"));
app.use("/be/api/v1", UserRoutes);

module.exports = {
    app,
    passport
  };