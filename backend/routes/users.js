const express = require("express");
const router = express.Router();
const userModel = require("../models/user");

router.get("/", async (req, res) => {
  const users = await userModel.find();
  res.send(users);
});

router.post("/", (req, res) => {
  const id = req.body.id;
  res.send(id);
});

router.post("/add", async (req, res) => {
  //gör validering av input och kryptera lösenord

  const body = req.body;

  const user = await userModel.create({
    ...body,
    id: crypto.randomUUID(),
  });
  res.send(user);
});

router.post("/login", (req, res) => {
  const body = req.body;
  res.send(body);
});
module.exports = router;
