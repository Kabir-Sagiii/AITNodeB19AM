var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var productRouter = require("./routes/productRoute");
var userRouter = require("./routes/usersRoute");
var app = express();
app.use(cors());
app.use(express.json());
app.use("/products", productRouter);
app.use("/users", userRouter);

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
