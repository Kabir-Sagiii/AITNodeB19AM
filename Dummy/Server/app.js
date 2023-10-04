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
  // console.log("yes");
  fs.readFile("data.json", "utf-8", (err, data) => {
    // console.log(data.results.results);
    res.json({
      info: JSON.parse(data),
    });
  });
});

app.get("/getuser/:id", (req, res) => {
  // console.log(req.params);
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) {
      res.json({
        status: false,
        info: "Failed to Read the data from file",
      });
    } else {
      data = JSON.parse(data);
      var filtereduser = data.results.filter((user) => {
        // console.log(user.id == Number(req.params.id));
        return user.id == Number(req.params.id);
      });
      // console.log(filtereduser);
      res.json({
        status: true,
        info: filtereduser[0],
      });
    }
  });
});

app.put("/updateuser", (req, res) => {
  console.log(req.body);
  //write the logic to replace new data with old exisiting data
  fs.readFile("data.json", "utf-8", (err, data) => {
    data = JSON.parse(data);

    data.results.forEach((ele, index) => {
      if (ele.id == req.body.id) {
        data.results.splice(index, 1, req.body);
        fs.writeFile("data.json", JSON.stringify(data), () => {
          res.json({
            status: true,
            info: "Update data",
          });
        });
      }
    });
  });
});

app.delete("/delete/:id", (req, res) => {
  console.log("Deleted");
  fs.readFile("data.json", "utf-8", (err, data) => {
    data = JSON.parse(data);

    data.results.forEach((ele, index) => {
      if (ele.id == req.params.id) {
        data.results.splice(index, 1);
        fs.writeFile("data.json", JSON.stringify(data), () => {
          res.json({
            status: true,
            info: "deleted",
          });
        });
      }
    });
  });
});

app.listen(5050, () => {
  console.log("Server Started");
});
