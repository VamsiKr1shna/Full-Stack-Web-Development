const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const query = req.body.cityName;
  const unit = "metric";
  const appID = "6979b234397cfb444bc18f11f15dece6";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&units=" +
    unit +
    "&appid=" +
    appID;

  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imgURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write("<p>The weather currently is " + weatherDescription + "</p>");
      res.write(
        "<h1>The Current temperature in " + query + " is " + temp + "</h1>"
      );
      res.write("<img src =" + imgURL + ">");
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("Server is running on 3000");
});
