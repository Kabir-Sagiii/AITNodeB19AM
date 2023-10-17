var express = require("express");
var User = require("../model/userModel");
var { get_userdata, post_userdata } = require("../controllers/userController");

var router = express.Router();

router.get("/getdata", get_userdata); //http://localhost:3939/user/getdata

router.post("/newdata", post_userdata); //http://localhost:3939/user/newdata

module.exports = router;
