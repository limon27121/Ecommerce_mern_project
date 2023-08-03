//express server ready for work
const express=require("express");
const morgan=require("morgan");
//third partymiddle ware
const body_parser=require("body-parser");
const app=express();


app.use(morgan("dev"));
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}));


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

//client error handling

app.use((req,res,next)=>{
res.status(404).json({message:"route note found"})
next()

})

//server error handle
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(404).json({message:"something broke"})
    
    })







//running server at 3001 port
app.listen(3001,()=>{
    console.log("server is running at : 3001 port")
});
