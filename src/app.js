const { app } = require("./config/express");
const { port, env } = require("./config/variables");
const db = require("./config/db");
const { logger } = require("./config/winston");

// Database connection
db.connect();

// listen to requests
app.listen(port, () => logger.info(`Server started on port ${port} (${env})`));