const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productId: String,
  name: String,
  description: String,
  price: Number,
  lager: Number,
});

module.exports = mongoose.model("Product", productSchema);
