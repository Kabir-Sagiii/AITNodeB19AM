var express = require("express");
var Product = require("../model/productModel");
var router = express.Router();

router.post("/adddata", async (req, res) => {
  var resp = await Product.insertMany(req.body.data);
  res.json({
    ok: true,
    data: "Inserted Successfully",
  });
});

router.get("/getdata", async (req, res) => {
  try {
    var productData = await Product.find();
    res.json({
      ok: true,
      data: productData,
    });
  } catch (error) {
    res.json({
      ok: false,
      error,
    });
  }
});

module.exports = router;
