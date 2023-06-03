const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.listen(3000, function () {
  console.log("> Server is up and running on port : ");
});
