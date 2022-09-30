

const mongoose = require("mongoose");
const Users = require("./Users")

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
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Users,
      },
    ],
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