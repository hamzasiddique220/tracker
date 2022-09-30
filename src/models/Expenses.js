

const mongoose = require("mongoose");

const Expenses = new mongoose.Schema(
  {
    total: {
      type: Number,
    },
    source: {
      type: Number,
    },
    category: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "expense",
  Expenses,
  "expenses"
);