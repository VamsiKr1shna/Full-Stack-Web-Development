const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/about", (req, res) => {
  res.send("hello My name is Vamsi");
});

app.get("/contact", (req, res) => {
  res.send("Contact me at : pvamsikri2003@gmail.com");
});

app.get("/hobbies", (req, res) => {
  res.send("Coffee and Tea");
});

app.listen(3000, function () {
  console.log("Server started at 3000");
});
