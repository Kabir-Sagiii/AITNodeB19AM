const express = require("express");

const app = express();

app.use(express.json());

app.get("/newuser", (req, res) => {
  //http://localhost:5050/newuser : Get
  console.log(req);
  res.send("Get Request");
});

app.post("/newuser", (req, res) => {
  ////http://localhost:5050/newuser : POST
  //   const { username, password } = req.body;
  //   console.log(username, password);

  res.send("Post Request");
});

app.get("/newdata/:name", (req, res) => {
  console.log(req.params);
  res.send("Succesful");
});

app.listen(5050, () => {
  console.log("Server Started");
});
