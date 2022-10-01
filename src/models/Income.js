

const mongoose = require("mongoose");
const Users = require("./Users");

const Income = new mongoose.Schema(
    {

        amount: {
            type: Number,
            default: 0
        },
        tax: {
            type: Number,
            default: 0
        },
        userId: {
            type: String,
          },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model(
    "Income",
    Income,
    "Incomes"
);