var http = require("http");
var fs = require("fs");
var PORT = 7070;

var server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is my NodeJS Response in String Format");
  } else if (req.url === "/file/html") {
    fs.readFile("myhtml.html", "utf-8", function (err, data) {
      if (err) {
        res.end("Something Went Wrong While Reading The HTML file");
      } else {
        res.end(data);
      }
    });
  } else if (req.url === "/file/json") {
    fs.readFile("myJson.json", "utf-8", function (err, data) {
      if (err) {
        res.end("Something Went Wrong While Reading The JSON file");
      } else {
        res.end(data);
      }
    });
  } else if (req.url === "/file/text") {
    fs.readFile("myfile.txt", "utf-8", function (err, data) {
      if (err) {
        res.end("Something Went Wrong While Reading The TEXT file");
      } else {
        res.end(data);
      }
    });
  } else if (req.url === "/json") {
    res.end(
      JSON.stringify({
        data: [{ name: "Sagar" }, { name: "Ayush" }, { name: "Kirti" }],
      })
    );
  }
});

server.listen(PORT, () => {
  console.log("Server is Running on Port Number", PORT);
});
