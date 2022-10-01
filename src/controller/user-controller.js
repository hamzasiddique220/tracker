const Users = require("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpirationInterval } = require("../config/variables");
require('../middleware/passport')

genToken = user => {
  return jwt.sign({
    iss: 'Joan_Louji',
    sub: user.id,
    iat: new Date().getTime(),
    exp: new Date().setDate(new Date().getDate() + 1)
  }, jwtSecret);
}
const registerNewUser = async (req, res) => {
    const { name, email, password, phone, country, date_of_birth, gender,role } =
      req.body;
    try {
      // Check if a user exists
      let user = await Users.findOne({ $or: [{ email }, { phone }] }).lean();
      if (user) {
        return res
          .status(200)
          .json({ status: false, msg: "User already exists" }); // So that our instance won't give any error msgs
      }
      // Encrypting the password using bcrypt
      user = new Users({
        name,
        email,
        password,
        country,
        date_of_birth,
        phone,
        gender,
        role,
      });
      const salt = await bcrypt.genSalt(14);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
  
      // Returning a json web token for automatic login after registration
      // Expiration is totally optional
      // Mongoose abstraction allows us to use id instead of _id
      const payload = {
        user: {
          id: user.id,
        },
      };
  
      const respUser = { ...user["_doc"] };
      delete respUser["password"];
  
      const token = genToken(payload.user)
      return res.status(200).json({
        status: true,
        msg: "Registered successfully",
        token,
        ...user,
    });
    } catch (err) {
        logger.error(err);
        return res
            .status(400)
        .json({ status: false, msg: "Error while registering user" });
    }
  };
const loginUser = async (req, res) => {
    const { email, password, phone } = req.body;

    try {
        // Check if a user doesn't exist
        const user = await Users.findOne({ $or: [{ email }, { phone }] }).lean();
        if (!user) {
            return res
                .status(404)
                .json({ status: false, msg: "Invalid credentials" });
        }

        // Matching the passwords to authorize log-in
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res
                .status(403)
                .json({ status: false, msg: "Invalid credentials" });
        }

        const payload = {
            user: {
                id: user._id,
            },
        };
        delete user["password"];

        const token = genToken(payload.user)
        return res.status(200).json({
          status: true,
          msg: "Logged in successfully",
          token,
          ...user,
      });
    } catch (err) {
        logger.error(err);
        return res
            .status(400)
            .json({ status: false, msg: "Error while loggin in user" });
    }
};

const getAllUsers = async (req, res) => {
  try {
    const { id ,role} = req.user;

    if (!id) {
      return res.status(200).json({ status: false, msg: "Invalid Id" });
    }
    if(role !=='admin'){
      return res.status(200).json({ status: false, msg: "you are not authorized" });

    }


    const users = await Users.find().lean();

    return res.status(200).json({
      status: true,
      msg: "users fetched successfully",
      data: users,
    });
  } catch (err) {
    console.error(err);
    return res
      .status(200)
      .json({ status: false, msg: "Error while fetching users." });
  }
};


module.exports = {
    registerNewUser,
    loginUser,
    getAllUsers,
};