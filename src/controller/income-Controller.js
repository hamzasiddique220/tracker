const Income = require("../models/Income");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpirationInterval } = require("../config/variables");

const addIncome = async (req, res) => {
    try {
        const { id } = req.user;
        const { tax, amount } = req.body;
    
        if (!id) {
          return res.status(200).json({ status: false, msg: "Invalid Id" });
        }
    
        await Income.create({
          amount: amount,
          tax: tax,
          userId: id,
        });
    
        return res.status(200).json({
          status: true,
          msg: "add user income successfully",
        });
      } catch (err) {
        console.error(err);
        return res
          .status(200)
          .json({ status: false, msg: "Error add income categories." });
      }
};

const getAllUserIncome = async (req, res) => {
    try {
      const { id } = req.user;
      console.log(id);
  
      if (!id) {
        return res.status(200).json({ status: false, msg: "Invalid Id" });
      }
  
      const income = await Income.find({
        userId: id,
      });
  
      return res.status(200).json({
        status: true,
        msg: "income fetched successfully",
        data: income,
      });
    } catch (err) {
      console.error(err);
      return res
        .status(200)
        .json({ status: false, msg: "Error while fetching gifts." });
    }
  };



module.exports = {
    addIncome,
    getAllUserIncome,
};