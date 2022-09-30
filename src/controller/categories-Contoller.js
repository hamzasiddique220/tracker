const Categories = require("../models/Categories");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpirationInterval } = require("../config/variables");

const addCategories = async (req, res) => {
    try {
        // const { id } = req.user;
        // console.log("testt",id);
        const { name, description } = req.body;
    
        // if (!id) {
        //   return res.status(200).json({ status: false, msg: "Invalid Id" });
        // }
    
        await Categories.create({
          name: name,
          description: description,
        });
    
        return res.status(200).json({
          status: true,
          msg: "add user categories successfully",
        });
      } catch (err) {
        console.error(err);
        return res
          .status(200)
          .json({ status: false, msg: "Error add user categories." });
      }
};





module.exports = {
    addCategories,
};