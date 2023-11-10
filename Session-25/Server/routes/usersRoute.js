var express = require("express");
var User = require("../model/userModel");
var jwt = require("jsonwebtoken");
var secretkey = "mysecretkeyvdkfjvbkdjfbvkd1234jfbvdkjfbvdkjb";

var router = express.Router();

// router.get("/usertest", (req, res) => {
//   res.send("Working");
// });

router.post("/login", async (req, res) => {
  var user;
  var token;
  try {
    var credentails = Object.keys(req.body);
    if (credentails[0] === "email") {
      if (credentails[1] === "password") {
        user = await User.findOne(req.body);
      } else {
        throw Error("Password is Missing");
      }
    } else {
      throw Error(" Email Id is Misisng");
    }

    if (user != null) {
      token = jwt.sign({ _id: user._id }, secretkey, { expiresIn: "1d" });

      res.json({
        ok: true,
        results: user,
        token,
      });
    } else {
      throw Error("User Does not Exist");
    }
  } catch (error) {
    console.log(error);
    res.json({
      ok: false,
      error: error.message,
    });
  }
});

router.post("/newuser", async (req, res) => {
  try {
    var user = await User.create(req.body);
    res.json({
      ok: true,
      results: "Inserted successfully",
    });
  } catch (error) {
    res.json({
      ok: false,
      error,
    });
  }
});

router.get("/getusers", async (req, res) => {
  var valid, token;
  try {
    if (req.headers.authorization) {
      let { authorization } = req.headers;
      token = authorization.split(" ")[1];
      valid = jwt.verify(token, secretkey);
    } else {
      throw Error("Missing Token");
    }

    // console.log(authorization);

    console.log(valid);

    if (valid) {
      var users = await User.find();
      res.json({
        ok: true,
        length: users.length,
        results: users,
      });
    } else {
      throw Error("Invalid Toke or Token is Missing");
    }
    // console.log(valid);

    // console.log(token);
  } catch (error) {
    console.log(error);
    res.json({
      ok: false,
      error: error.message,
    });
  }
});

module.exports = router;
