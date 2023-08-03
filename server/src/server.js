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
    });
});

app.post("/test",(req,res)=>{
    res.status(200).send({
        message:"post: welcome to  limon server",
    });
});

app.put("/test",(req,res)=>{
    res.status(200).send({
        message:"put: welcome to  limon server",
    });
});

app.delete("/test",(req,res)=>{
    res.status(200).send({
        message:"delete: welcome to  limon server",
    });
});









//running server at 3001 port
app.listen(3001,()=>{
    console.log("server is running at : 3001 port")
});