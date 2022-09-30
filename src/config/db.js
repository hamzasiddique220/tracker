const mongoose = require("mongoose");
const { mongo, env } = require("./variables");
const { logger } = require("./winston");

exports.connect = () => {
  mongoose
    .connect(mongo.uri, {
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    })
    .then(() => logger.info("Database connected..."))
    .catch((error) => logger.error(error));
  return mongoose.connection;
};