var mongoose = require("mongoose");

var UserScehma = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: String,
  phone: Number,
});

var User = new mongoose.model("User", UserScehma);

module.exports = User;
