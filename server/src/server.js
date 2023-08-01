//express server ready for work
const express=require("express");
const morgan=require("morgan");
const app=express();

app.use(morgan("dev"));

// //http request handle 
// api health check
// using get method
app.get("/test",(req,res)=>{
    res.status(200).send({
        message:"welcome to  limon server",
    })
})

//running server at 3001 port
app.listen(3001,()=>{
    console.log("server is running at : 3001 port")
});