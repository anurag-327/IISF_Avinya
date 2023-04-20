const dotenv=require("dotenv").config();
const express=require("express");
const app=express();
var cors = require('cors')
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const ConnectMongoDb=require("./config/mongoose")

app.use("/",(req,res,next)=>
{
     return (res.json("API RUNNING SUCCESSFULLY"))
})

app.use("/auth",require("./routes/auth"));
// /team contains all routes for accessing teams

app.use("/team",require("./routes/team"))

app.use((req,res,next)=>
{
     return (res.json("route doesnot exist"))
})
app.listen(process.env.PORT||5500,(err) =>
{
    if(err)
    console.log("Error in runing server")
    console.log("Server running at PORT",process.env.PORT)
})