const express = require("express");
const router = express.Router();
const productModel = require("../models/product");
const crypto = require("crypto");

router.get("/", async (req, res) => {
  const products = await productModel.find();
  res.send(products);
});

router.get("/:id", async (req, res) => {
  const product = await productModel.findOne({ productId: req.params.id });
  res.send(product);
});

//SKAPA PRODUKT
router.post("/add", async (req, res) => {
  const body = req.body;
  const product = await productModel.create({
    ...body,
    productId: crypto.randomUUID(),
  });
  res.send(product);
});

module.exports = router;
