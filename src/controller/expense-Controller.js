const Expenses = require("../models/Expenses");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpirationInterval } = require("../config/variables");

const addExpense = async (req, res) => {
    try {
        const { id } = req.user;
        const { total, source,category } = req.body;
    
        if (!id) {
          return res.status(200).json({ status: false, msg: "Invalid Id" });
        }
    
        await Expenses.create({
          total: total,
          source: source,
          category: category,
          userId: id,
        });
    
        return res.status(200).json({
          status: true,
          msg: "add user expense successfully",
        });
      } catch (err) {
        console.error(err);
        return res
          .status(200)
          .json({ status: false, msg: "Error add expense categories." });
      }
};

const getAllUserExpense = async (req, res) => {
    try {
      const { id } = req.user;
      console.log(id);
  
      if (!id) {
        return res.status(200).json({ status: false, msg: "Invalid Id" });
      }
  
      const expenses = await Expenses.find({
        userId: id,
      });
  
      return res.status(200).json({
        status: true,
        msg: "expenses fetched successfully",
        data: expenses,
      });
    } catch (err) {
      console.error(err);
      return res
        .status(200)
        .json({ status: false, msg: "Error while fetching gifts." });
    }
  };



module.exports = {
    addExpense,
    getAllUserExpense,
};