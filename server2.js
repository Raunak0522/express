const express=require("express");
const app=express()
app.use(express.json());

app.post("/simple",function bodyChech(req,res,next){
    let data=req.body;
    let length=Object.keys(data).length;
    if(length ==0 ){
        console.log("no data found in user")
        res.end("kindly enter the data");
    }
    else{
        next()
    }
})

app.post("/simple",function(req,res){
    console.log("data",req.body);
    res.end("hi from backend")
})

app.listen(3000,function(){
    console.log("server is started at 3000" );
})