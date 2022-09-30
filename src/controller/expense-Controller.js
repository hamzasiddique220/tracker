const Expenses = require("../models/Expenses");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpirationInterval } = require("../config/variables");

const addExpense = async (req, res) => {
    try {
        user = new Expenses({
            ...req.body
        });


    } catch (err) {
        logger.error(err);
        return res
            .status(400)
            .json({
                status: false,
                msg: "Error while registering user"
            });
    }
};



module.exports = {
    addExpense,
};