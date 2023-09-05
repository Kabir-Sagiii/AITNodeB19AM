var http = require("http");
var fs = require("fs");
var port = 7030;
var server = http.createServer((request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  fs.readFile("User.json", "utf-8", function (err, data) {
    if (err) {
      response.end("Error While Reading the File");
    } else {
      response.end(data);
    }
  });
});

server.listen(port, () => {
  console.log("Serve started at ", port);
});
