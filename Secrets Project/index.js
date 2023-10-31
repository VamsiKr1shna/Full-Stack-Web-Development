import express from "express"
import bodyParser from "body-parser"
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000;
const password = "Programming";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})
app.post("/check",(req,res)=>{
    if(req.body["password"] === password)
        res.sendFile(__dirname+"/public/secrets.html")
    else
    res.sendFile(__dirname+"/public/index.html")
})
app.listen(port, () => console.log(`Server is running on ${port}`));