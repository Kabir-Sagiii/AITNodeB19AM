const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/newdata", (req, res) => {
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) {
      res.send({
        status: false,
        data: "Error while reading the data from file",
      });
    } else {
      data = JSON.parse(data);

      data.results.push(req.body);
      data = JSON.stringify(data);
      fs.writeFile("data.json", data, () => {
        console.log("added");
        res.send("Added");
      });
    }
  });
});

app.listen(5050);
