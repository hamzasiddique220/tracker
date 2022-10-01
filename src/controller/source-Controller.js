const Sources = require("../models/Sources");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpirationInterval } = require("../config/variables");

const addSource = async (req, res) => {
    try {
        const { id } = req.user;
        console.log("testt",id);
        const { name, description } = req.body;
    
        if (!id) {
          return res.status(200).json({ status: false, msg: "Invalid Id" });
        }
    
        await Sources.create({
          name: name,
          description: description,
          userId: id,
        });
    
        return res.status(200).json({
          status: true,
          msg: "add user description successfully",
        });
      } catch (err) {
        console.error(err);
        return res
          .status(200)
          .json({ status: false, msg: "Error add description categories." });
      }
};

const getAllUserSource = async (req, res) => {
    try {
      const { id } = req.user;
      console.log("company",id);
  
      if (!id) {
        return res.status(200).json({ status: false, msg: "Invalid Id" });
      }
  
      const sources = await Sources.find({
        userId: id,
      });
  
      return res.status(200).json({
        status: true,
        msg: "sources fetched successfully",
        data: sources,
      });
    } catch (err) {
      console.error(err);
      return res
        .status(200)
        .json({ status: false, msg: "Error while fetching gifts." });
    }
  };

  const updateUserSource = async (req, res) => {
    try {
      const { id } = req.query;
  
      if (!id) {
        return res.status(200).json({ status: false, msg: "Invalid Id" });
      }
  
      await Sources.updateOne(
        { _id: id },
        {
          ...req.body,
        }
      ).lean();
  
      return res.status(200).json({
        status: true,
        msg: "source updated successfully",
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
    addSource,
    getAllUserSource,
    updateUserSource,
};