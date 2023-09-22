const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.static("public"));
const PORT = 7070;

app.get("/", (req, res) => {
  fs.readFile("Home.html", "utf-8", (err, data) => {
    if (err) {
      res.send(`
            <h2 style="color:red;text-align:center"> Error While the Reading the content From File </h2>
            `);
    } else {
      res.send(data);
    }
  });
});
app.get("/products", (req, res) => {
  fs.readFile("Products.html", "utf-8", (err, data) => {
    if (err) {
      res.send(`
            <h2 style="color:red;text-align:center"> Error While the Reading the content From File </h2>
            `);
    } else {
      res.send(data);
    }
  });
});

app.get("/profile", (req, res) => {
  fs.readFile("Profile.html", "utf-8", (err, data) => {
    if (err) {
      res.send(`
            <h2 style="color:red;text-align:center"> Error While the Reading the content From File </h2>
            `);
    } else {
      res.send(data);
    }
  });
});

// app.get("/", (req, res) => {
//   //   res.send();
//   res.json({
//     status: true,
//     data: [
//       {
//         name: "Raj",
//         city: "Delhi",
//       },
//       {
//         name: "Sneha",
//         city: "Pune",
//       },
//       {
//         name: "Ayush",
//         city: "Gurugram",
//       },
//     ],
//   });
// });

app.get("/html", (req, res) => {
  res.send(
    `<h2>Express JS</h2>
    <p> This is my second Express App, As of now everthing looks simple</p> 
    <ol>
    <li>HTML</li>
    <li>CSS</li>
    <li>JS</li>
    </ol>`
  );
});

app.get("/htmlfile", (req, res) => {
  fs.readFile("User.html", "utf-8", (err, data) => {
    if (err) {
      res.send(`
            <h2 style="color:red;text-align:center"> Error While the Reading the content From File </h2>
            `);
    } else {
      res.send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log("Server Started on Port No :", PORT);
});
