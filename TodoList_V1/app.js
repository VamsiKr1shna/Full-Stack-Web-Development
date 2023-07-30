const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-IN", options);

  res.render("list", { kindOfDay: day });
});

app.post("/", function (req, res) {
  var input = req.body.newItem;
  console.log(input);
});

app.listen(3000, function () {
  console.log("> Server is up and running on port 3000 : ");
});
