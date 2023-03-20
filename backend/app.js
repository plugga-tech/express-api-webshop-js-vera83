const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//routes importer
const usersRouter = require("./routes/users");

const app = express();

//apply middlewares
app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());

//apply route middleware
app.use("/api/users", usersRouter);

//connect to database
async function init() {
  try {
    await mongoose.connect("mongodb://localhost:27017/veronica-bergstrom");
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
  app.listen(3000, () => {
    console.log("server started on 3000");
  });
}

init();