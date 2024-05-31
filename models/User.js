const mongoose = require("mongoose");

const DEFAULT_USERNAME = "Taia";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        default: DEFAULT_USERNAME,
        unique: true,
    },
    coins: {
        type: Number,
        default: 0,
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
