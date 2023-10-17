var express = require("express");
var Product = require("../model/productModel");
var router = express.Router();

router.post("/adddata", async (req, res) => {
  var resp = await Product.insertMany(req.body.data);
  res.send("Added the data");
});

router.get("/getdata", async (req, res) => {
  var resp = await Product.find();
  res.send({
    data: resp,
  });
});

module.exports = router;
