

const mongoose = require("mongoose");


const Categories = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  userId: {
    type: String,
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model(
  "categories",
  Categories,
  "categories"
);