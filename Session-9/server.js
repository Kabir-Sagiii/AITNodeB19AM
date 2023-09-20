var http = require("http");
var fs = require("fs");

var server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  console.log(req.url); //"/products/electronics"
  fs.readFile("Products.json", "utf-8", (err, data) => {
    if (err) {
      res.end("Something went Wrong");
    } else {
      var productsJSON = JSON.parse(data);
      var productsData;
      var title;

      if (req.url === "/products") {
        productsData = productsJSON.results; //
        title = "All Product Details";
      } else if (req.url === "/products/electronics") {
        productsData = productsJSON.results.filter(
          (product) => product.category === "electronics"
        );
        title = "Electronics Product Details";
      } else if (req.url === "/products/jewelerys") {
        productsData = productsJSON.results.filter(
          (product) => product.category === "jewelery"
        );
        title = "Jewelery's Product Details";
      } else if (req.url === "/products/mensclothing") {
        productsData = productsJSON.results.filter(
          (product) => product.category === "men's clothing"
        );
        title = "Men'sClothing Product Details";
      } else if (req.url === "/products/womensclothing") {
        productsData = productsJSON.results.filter(
          (product) => product.category === "women's clothing"
        );
        title = "Women'sClothing Product Details";
      }

      res.end(
        JSON.stringify({
          results: productsData,
          title,
        })
      );
    }
  });
});

server.listen(6030, () => {
  console.log("Server Started");
});
