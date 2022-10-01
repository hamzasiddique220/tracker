const Categories = require("../models/Categories");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpirationInterval } = require("../config/variables");

const addCategories = async (req, res) => {
    try {
        const { id } = req.user;
        const { name, description } = req.body;
    
        if (!id) {
          return res.status(200).json({ status: false, msg: "Invalid Id" });
        }
    
        await Categories.create({
          name: name,
          description: description, 
          userId: id,
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
const getAllUserCategories = async (req, res) => {
  try {
    const { id } = req.user;
    console.log(id);

    if (!id) {
      return res.status(200).json({ status: false, msg: "Invalid Id" });
    }

    const categories = await Categories.find({
      userId: id,
    });

    return res.status(200).json({
      status: true,
      msg: "categoried fetched successfully",
      data: categories,
    });
  } catch (err) {
    console.error(err);
    return res
      .status(200)
      .json({ status: false, msg: "Error while fetching gifts." });
  }
};

const updateUserCategories = async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(200).json({ status: false, msg: "Invalid Id" });
    }

    await Categories.updateOne(
      { _id: id },
      {
        ...req.body,
      }
    ).lean();

    return res.status(200).json({
      status: true,
      msg: "categories updated successfully",
      data: id,
    });
  } catch (err) {
    console.error(err);
    return res
      .status(200)
      .json({ status: false, msg: "Error while updating profile" });
  }
};




module.exports = {
    addCategories,
    getAllUserCategories,
    updateUserCategories,
};