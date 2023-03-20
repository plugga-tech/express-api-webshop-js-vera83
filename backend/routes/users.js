const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("users list");
});

router.post("/", (req, res) => {
  const id = req.body.id;
  res.send(id);
});

router.post("/add", (req, res) => {
  const body = req.body;
  res.send(body);
});

router.post("/login", (req, res) => {
  const body = req.body;
  res.send(body);
});
module.exports = router;
