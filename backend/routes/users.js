const express = require("express");
const router = express.Router();
const userModel = require("../models/user");
const crypto = require("crypto");

//HÄMTA ALLA USERS
router.get("/", async (req, res) => {
  const users = await userModel.find();
  res.send(users);
});

//HÄMTA SPEC. USER
router.post("/", async (req, res) => {
  const id = req.body.id;

  const user = await userModel.findOne({ userId: id });
  res.send(user);
});

//SKAPA USER
router.post("/add", async (req, res) => {
  //gör validering av input och kryptera lösenord

  const body = req.body;

  const user = await userModel.create({
    ...body,
    userId: crypto.randomUUID(),
  });
  res.send(user);
});

//LOGGA IN USER
router.post("/login", (req, res) => {
  const body = req.body;
  res.send(body);
});
module.exports = router;
