import express from "express";
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("<h1>Hello h1</h1>");
});

app.get("/aboutme", (req, res) => {
  res.send("<p>About me</p> ");
});

app.get("/contact", (req, res) => {
  res.send("<h3>Contact me : 8555995320</h3>");
});

app.post("/register",(req,res)=>{
  res.sendStatus(201);
})

app.put("/user/vamsi",(req,res)=>{
  res.sendStatus(200);
})

app.patch("/user/vamsi",(req,res)=>{
  res.sendStatus(200);
})

app.delete("/user/vamsi",(req,res)=>{
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`server is started! ${port}`);
});
