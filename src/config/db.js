const mongoose = require("mongoose");
const { mongo, env } = require("./variables");

exports.connect = () => {
  mongoose
    .connect(mongo.uri, {
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    })
    .then(() => console.log("Database connected..."))
    .catch((error) => console.error(error));
  return mongoose.connection;
};