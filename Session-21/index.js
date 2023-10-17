var express = require("express");
var mongoose = require("mongoose");
var UserRouter = require("./router/userRouter");
var ProductRouter = require("./router/productRouter");

var app = express();

var PORT = 3939;
var dburl = "mongodb://localhost:27017/usersdb";
app.use(express.json());
app.use("/user", UserRouter);
app.use("/product", ProductRouter);

mongoose
  .connect(dburl)
  .then(() => {
    console.log("Connected With Database");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log("Server Started");
});
