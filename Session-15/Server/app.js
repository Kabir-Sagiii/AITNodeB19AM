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
      fs.writeFile("data.json", data, (err) => {
        if (err) {
          res.json({
            status: false,
            data: "Failed to add data in the File",
          });
        } else {
          res.json({
            status: true,
            data: "Successfully Stored the data in the File",
          });
        }
      });
    }
  });
});

app.get("/", (req, res) => {
  console.log("yes");
  fs.readFile("data.json", "utf-8", (err, data) => {
    // console.log(data.results.results);
    res.json({
      results: JSON.parse(data),
    });
  });
});

app.listen(5050);
