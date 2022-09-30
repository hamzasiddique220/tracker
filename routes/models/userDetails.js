const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userDetailSchema = new Schema({
  source_project_id: String,
  source_project_name: String,
  customer_id: String,
  role_id: Number,
});

module.exports = mongoose.model("userDetails", userDetailSchema);
