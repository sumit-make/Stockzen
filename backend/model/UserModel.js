const mongoose = require("mongoose");
const UserSchema = require("../schema/UserSchema");

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;