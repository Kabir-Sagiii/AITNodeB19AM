const fs = require("fs");
var user = require("./User.js");
console.log(user);

user.changeCity();

// fs.readFile("demo.txt", "utf-8", function (err, data) {
//   console.log(data);
// });

// fs.rename("demo.txt", "newdemo.txt", function (error) {
//   console.log("File Got Renamed");
// });

// fs.writeFile(
//   "index.html",
//   "<div><h2>This is my Div with h2 tag</h2></div>",
//   function (err) {
//     if (err) {
//       console.log("Error while Creating the File");
//     } else {
//       console.log("New File is Created");
//     }
//   }
// );

// fs.appendFile("index.html", "<p>This is para</p>", function (err) {
//   console.log("Added new Data");
// });

// fs.unlink("newdemo.txt", function (err) {
//   if (err) {
//     console.log("Error while deleting the file");
//   } else {
//     console.log("Deleted the File");
//   }
// });
