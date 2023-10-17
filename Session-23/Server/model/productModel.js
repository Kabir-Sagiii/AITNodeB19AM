var mongoose = require("mongoose");

var ProductScehma = new mongoose.Schema({
  id: Number,
  title: String,
  price: String,
  category: String,
  description: String,
  image: String,
});

var Product = new mongoose.model("Product", ProductScehma);

module.exports = Product;
