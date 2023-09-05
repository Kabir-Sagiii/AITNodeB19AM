var http = require("http");

var server = http.createServer(function (req, res) {
  res.end("This is My first Response");
});

server.listen(3030, function () {
  console.log("Server Started");
});
