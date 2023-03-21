const express = require("express");
const router = express.Router();
const orderModel = require("../models/order");
const crypto = require("crypto");

//HÄMTA ALLA ORDERS
router.get("/all", async (req, res) => {
  const orders = await orderModel.find();
  res.send(orders);
});

//SKAPA ORDER
router.post("/add", async (req, res) => {
  const body = req.body;

  const order = await orderModel.create({
    ...body,
  });
  res.send(order);
});

module.exports = router;
