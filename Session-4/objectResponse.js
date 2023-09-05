var http = require("http");

var server = http.createServer((req, res) => {
  res.end(
    JSON.stringify({
      name: "Riya",
      gender: "female",
      city: "Delhi",
    })
  );
});

server.listen(9090, () => {
  console.log("Server is Running");
});
