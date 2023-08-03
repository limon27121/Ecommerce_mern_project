//express server ready for work
const express=require("express");
const morgan=require("morgan");
const app=express();


app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//middleware
const is_logged=(req,res,next)=>{
   const value=true;
   if(value){
    req.body.id=101;
    next()
   } else{
    return res.status(401).json({message:"please log in first"});
   }
 
}

// app.use(is_logged);

// //http request handle 
// api health check
// using get method
app.get("/test",(req,res)=>{
    res.status(200).send({
        message:"welcome to  limon server",
    });
});

app.get("/api/user",is_logged,(req,res)=>{
    console.log(req.body.id)
    res.status(200).send({
        message:"user profile are returned",
    });
});










//running server at 3001 port
app.listen(3001,()=>{
    console.log("server is running at : 3001 port")
});