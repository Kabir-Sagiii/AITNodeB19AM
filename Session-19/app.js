var express = require("express");
var mongoose = require("mongoose");

var app = express();

var dburl = "mongodb://localhost:27017/empdb";

mongoose
  .connect(dburl)
  .then(() => {
    console.log("Connected Successfully with the database");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(4949, () => {
  console.log("Server Start at Port", "4949");
});
