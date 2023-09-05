var http = require("http");
var fs = require("fs");
var port = 7030;
var server = http.createServer((request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  if (request.url === "/randomuser") {
    fs.readFile("RandomUser.json", "utf-8", (err, data) => {
      if (err) {
        response.end(
          JSON.stringify({
            status: false,
            Msg: "Error While Reading the content From file",
          })
        );
      } else {
        response.end(data);
      }
    });
  }
});

server.listen(port, () => {
  console.log("Serve started at ", port);
});
