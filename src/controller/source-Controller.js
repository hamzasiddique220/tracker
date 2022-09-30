const Sources = require("../models/Sources");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpirationInterval } = require("../config/variables");

const addSource = async (req, res) => {
    try {
        user = new Sources({
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
    addSource,
};