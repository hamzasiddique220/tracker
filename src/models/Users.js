const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
            default: "",
        },
        is_deleted: {
            type: Boolean,
            default: false,
        },
        phone: {
            type: String,
        },
        country: {
            type: String,
            required: true,
        },
        date_of_birth: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            enum: ["Male", "Female", "Other"],
        }
    },
    {
        timestamps: true
    })

module.exports = mongoose.model("user", UserSchema, "users");