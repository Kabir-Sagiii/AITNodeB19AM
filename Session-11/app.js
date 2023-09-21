const express = require("express");
const fs = require("fs");

const PORT = 6060;

const app = express();
// console.log(app);

app.get("/", (req, res) => {
  //write logic to read content from file
  // endpoint  // http://localhost:6060/
  res.send("This is first response from Express JS");
});

app.get("/html", (req, res) => {
  res.send("<h2>This is first html response in express </h2>");
});

app.get("/json", (req, res) => {
  res.send({
    name: "Kabir",
    city: "Delhi",
    email: "Kabir@gmail.com",
  });
});

app.listen(PORT, () => {
  console.log("Server is Started");
});
