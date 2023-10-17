var express = require("express");

var router = express.Router();

router.get("/getproducts", (req, res) => {
  res.send({
    data: [{ name: "Iphone 11 ", price: "35000" }],
  });
}); //http://localhost:3939/product/getproducts

module.exports = router;
