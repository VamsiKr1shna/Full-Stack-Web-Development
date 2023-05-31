const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
const https = require("https");

app.use(express.static("public")); //server can access the static files like css
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const emailID = req.body.emailID;

  const data = {
    members: [
      {
        email_address: emailID,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };
  const jsonData = JSON.stringify(data);
  const url = "https://us21.api.mailchimp.com/3.0/lists/400056784e";

  const options = {
    method: "POST",
    auth: "vulcan1601:f8e9d8b740ea45584fc83872332ce773-us21",
  };

  const request = https.request(url, options, function (response) {
    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();
});

app.listen(3000, function () {
  console.log("Server is running on 3000");
});

//f8e9d8b740ea45584fc83872332ce773-us21 (mailchimp api key)
//400056784e mailchimp audience id
