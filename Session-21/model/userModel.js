//import mongoose
var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  from: String,
  message: String,
});

var User = new mongoose.model("User", UserSchema);

module.exports = User;
