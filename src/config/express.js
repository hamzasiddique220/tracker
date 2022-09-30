const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const session = require('express-session');  // session middleware
const passport = require('passport');  // authentication
const { sessionSecret } = require("./variables");

const UserRoutes = require("../routes/user-routes");
const UserCategories = require("../routes/categories-routes");
const UserExpense = require("../routes/expense-routes");
const UserIncome = require("../routes/income-routes");
const UserSource = require("../routes/source-routes");


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

//  remove X-Powered-By to for security and saving bandwith
app.disable("x-powered-by");

// app.use(passport.initialize());
// app.use(passport.session());

// init session
// app.use(session({
//   secret: sessionSecret,
//   resave: false,
//   saveUninitialized: true,
//   cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
// }));

// health route
app.use("/health", (req, res) => res.send("Expense tracker v1"));
app.use("/be/api/v1", UserRoutes);
app.use("/be/api/v1", UserCategories);
app.use("/be/api/v1", UserExpense);
app.use("/be/api/v1", UserIncome);
app.use("/be/api/v1", UserSource);


module.exports = {
    app,
    passport
  };