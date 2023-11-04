const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get('/' , (req , res)=>{

  res.render("index.ejs", {day : "Monday",advice : "Work Hard"});

})

app.listen(port, () => `Server running on port ${port} 🔥`);