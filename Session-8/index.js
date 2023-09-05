var http = require("http");
var fs = require("fs");

var server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  console.log(req.url); //"/products/electronics"
  if (req.url === "/products") {
    fs.readFile("Products.json", "utf-8", (err, data) => {
      if (err) {
        res.end("Something went wrong while Reading the File");
      } else {
        res.end(data); //{results:[]}
      }
    });
  } else if (req.url === "/products/electronics") {
    fs.readFile("Products.json", "utf-8", (err, data) => {
      if (err) {
        res.end("Something went wrong while Reading the File");
      } else {
        var productsJSON = JSON.parse(data); //{results:[]}
        var electronicData = productsJSON.results.filter(
          (product) => product.category === "electronics"
        ); //[{},{},{}]
        res.end(
          JSON.stringify({
            results: electronicData,
          })
        );
      }
    });
  }
});

server.listen(6030, () => {
  console.log("Server Started");
});
