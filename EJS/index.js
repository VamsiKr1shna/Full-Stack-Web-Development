const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const today = new Date();
var currDay = today.getDay();
const dayArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var adviceMessage = "Work Hard!!";

if(currDay == 0 || currDay == 6 ){
  adviceMessage = "So Rest Well";
}

var dayObj = {
  day : dayArr[currDay],
  advice : adviceMessage
};
app.get('/' , (req , res)=>{

  res.render("index.ejs", dayObj);

})

app.listen(port, console.log( `Server running on port ${port} `));