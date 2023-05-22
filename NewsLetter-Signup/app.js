const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.use(express.static("public")); //server can access the static files like css
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var emailID = req.body.emailID;
  console.log(firstName + " " + lastName + " " + emailID);
});

app.listen(3000, function () {
  console.log("Server is running on 3000");
});

//f8e9d8b740ea45584fc83872332ce773-us21 (mailchimp api key)
//400056784e mailchimp audience id
