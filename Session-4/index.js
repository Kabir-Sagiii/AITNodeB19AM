var http = require("http");

var server = http.createServer((req, res) => {
  console.log(req.url);
  res.end("This is my First Response From the Server");
});

server.listen(9091, () => {
  console.log("Server is Running");
});
