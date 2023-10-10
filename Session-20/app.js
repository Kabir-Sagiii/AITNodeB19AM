var express = require("express");
var mongoose = require("mongoose");

var app = express();

app.use(express.json());
var dburl = "mongodb://localhost:27017/empdb";

mongoose
  .connect(dburl)
  .then(() => {
    console.log("Connected with the database");
  })
  .catch((err) => {
    console.log(err);
  });

//Create the Schema

var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  isMarried: Boolean,
  phone: Number,
});

//Create a Model
var User = new mongoose.model("UserColl", UserSchema);

app.get("/", (req, res) => {
  res.send("working");
});

app.post("/newuser", async (req, res) => {
  var newuser = new User(req.body);

  var resp = await newuser.save();

  console.log(resp);
  res.send("Inserted Successfully");
});

app.get("/getusers", async (req, res) => {
  var data = await User.find({});

  res.send({
    ok: true,
    NoOfUsers: data.length,
    results: data,
  });
});

app.get("/getusersbyid/:id", async (req, res) => {
  var data = await User.find({ _id: req.params.id });

  res.send({
    ok: true,
    results: data,
  });
});

app.delete("/delete/:id", async (req, res) => {
  var resp = await User.deleteOne({
    _id: req.params.id,
  });

  console.log(resp);

  res.send("Deleted Successfully");
});

app.put("/update/:id", async (req, res) => {
  var resp = await User.updateOne({ _id: req.params.id }, req.body);

  res.send("Update Successfully");
});

app.listen(3939, () => {
  console.log("Server Started");
});
