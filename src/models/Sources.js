

const mongoose = require("mongoose");


const Sources = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        description: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model(
    "source",
    Sources,
    "sources"
);