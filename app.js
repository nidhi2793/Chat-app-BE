const express = require("express");
const app = express();
require("dotenv").config();
const sequelize = require("./util/database");

const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const userRouter = require("./router/userRouter");
const homePageRouter = require("./router/homePageRouter");
app.use("/", userRouter);
app.use("/user", userRouter);
app.use("/homePage", homePageRouter);

sequelize
  .sync()
  .then((result) => {
    app.listen(process.env.PORT || 4000);
  })
  .catch((err) => {
    console.log(err);
  });
