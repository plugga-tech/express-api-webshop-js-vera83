const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: String,
  products: [{ productId: String, quantity: Number }],
});

module.exports = mongoose.model("Orders", orderSchema);
