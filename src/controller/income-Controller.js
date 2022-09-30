const Income = require("../models/Income");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpirationInterval } = require("../config/variables");

const addIncome = async (req, res) => {
    try {
        user = new Income({
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
    addIncome,
};