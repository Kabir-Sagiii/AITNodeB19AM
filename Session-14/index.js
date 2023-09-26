const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/data", (req, res) => {
  console.log(req.body);
  res.send("Successfull");
});

app.post("/newdata", (req, res) => {
  console.log(req.body);

  res.send("Received");
});

app.post("/newuserreact", (req, res) => {
  console.log(req.body);
  // validation of data received from the client

  //Logic to connect with database (mongodb) //jdbc
  //mongodb //mongoose //mysql //oracle

  //logic to add the data in the database

  //if everything goes well, we will send success response to the client

  //if something goes wrong we will error response to client

  res.send("Received User");
});

app.post("/newdata/:id", (req, res) => {
  console.log(req.params);
  res.send("Path Params Received");
});

app.post("/newdata/:id/:gender", (req, res) => {
  console.log(req.params);
  res.send("Multiple Path Params Received");
});

app.post("/newdata/:id/:gender?", (req, res) => {
  console.log(req.params);
  res.send(" Optional Path Params Received");
});

app.post("/queryparams", (req, res) => {
  console.log(req.query);
  res.send(" Query Params Received");
});

app.listen(6060, () => {
  console.log("Server Started");
});
