//express server ready for work
const express=require("express");
const app=express();


// //http request handle 
// api health check
// using get method
app.get("/test",(req,res)=>{
    res.status(200).send({
        message:"welcome to server",
    })
})

//running server at 3001 port
app.listen(3001,()=>{
    console.log("server is running at : 3001 port")
});