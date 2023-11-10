var express = require("express");
var Product = require("../model/productModel");
var router = express.Router();
var jwt = require("jsonwebtoken");
var secretkey = "mysecretkeyvdkfjvbkdjfbvkd1234jfbvdkjfbvdkjb";

router.post("/adddata", async (req, res) => {
  var resp = await Product.insertMany(req.body.data);
  res.json({
    ok: true,
    data: "Inserted Successfully",
  });
});

router.get("/allproducts", async (req, res) => {
  var valid, token;
  try {
    if (req.headers.authorization) {
      let { authorization } = req.headers;
      token = authorization.split(" ")[1];
      console.log(token);
      valid = jwt.verify(token, secretkey);
    } else {
      throw Error("Missing Token");
    }
    if (valid) {
      var products = await Product.find();
      console.log(products);
      res.json({
        ok: true,
        length: products.length,
        results: products,
      });
    } else {
      throw Error("Invalid Toke or Token is Missing");
    }
  } catch (error) {
    console.log(error);
    res.json({
      ok: false,
      error: error.message,
    });
  }
});

router.get("/electronic", async (req, res) => {
  var valid, token;
  try {
    if (req.headers.authorization) {
      let { authorization } = req.headers;
      token = authorization.split(" ")[1];
      console.log(token);
      valid = jwt.verify(token, secretkey);
    } else {
      throw Error("Missing Token");
    }
    if (valid) {
      var products = await Product.find({ category: "electronics" });
      console.log(products);
      res.json({
        ok: true,
        length: products.length,
        results: products,
      });
    } else {
      throw Error("Invalid Toke or Token is Missing");
    }
  } catch (error) {
    console.log(error);
    res.json({
      ok: false,
      error: error.message,
    });
  }
});

module.exports = router;
