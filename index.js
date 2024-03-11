const express=require("express");
const router=require("./routes/jwtRoute")
require("./config/db.Connect")

const cookieParser = require("cookie-parser");

const bodyparser=require("body-parser")


const app=express()
app.use(express.json())
app.use(cookieParser());

app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())


app.get("/",(req,res)=>{
    // console.log("hello 8000");
    res.send("hello")
})

app.use("/",router)

app.listen(3000,()=>{
    console.log("server is running");
})

