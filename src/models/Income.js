

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
    "Income",
    Income,
    "Incomes"
);