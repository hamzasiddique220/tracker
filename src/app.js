const { app } = require("./config/express");
const { port, env } = require("./config/variables");
const db = require("./config/db");

// Database connection
db.connect();

// listen to requests
app.listen(port, () => console.log(`Server started on port ${port} (${env})`));