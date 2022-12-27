//require express
const express = require("express");
const app = express();
app.use(express.json());

app.use("/sayhello",function(req,res,next){
    console.log("use will always works")
    next()
})
//app signifies your server
//.get to read at route
app.get("/sayhello",function(req,res){
    console.log("data",req.body)
    res.send("hello from server");
})

app.get("/saybye",function(req,res){
    res.end("bye");
})

//send the data
app.post("/sayhello",function(req,res){
    console.log("data",req.body);
    res.send("hi from backend")
})
//patch is intented for update
app.patch("/sayhello",function(req,res){
    console.log("data",req.body);
    res.send("hi from backend")
})

//delete is intented for delete
app.delete("/sayhello",function(req,res){
    console.log("data",req.body);
    res.send("hi from backend")
})
//send the data using get
//template route
app.get("/getsquare/:num1",function(req,res){
    console.log("number fetched",req.params.num1)
    const number=req.params.num1/req.params.num1;
    res.end(number+" ");
})


//server created at 3000
app.listen(5000,function(){
    console.log("Server is started at 5000");//server is set at port 5000
})
console.log("hi nodemon");