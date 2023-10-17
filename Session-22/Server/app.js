var express = require("express");
var mongoose = require("mongoose");
var productRouter = require("./Route/productRoute");
var app = express();
app.use(express.json());
app.use("/product", productRouter);

var dburl = "mongodb://localhost:27017/productsdb";

mongoose
  .connect(dburl)
  .then(() => {
    console.log("connected Successfully");
  })
  .catch(() => {
    console.log("Failed to connect");
  });

app.listen(2929, () => {
  console.log("Started Server");
});
