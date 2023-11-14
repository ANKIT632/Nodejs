const express=require('express');
require('./config');
const product = require('./product');

const app=express();

app.get("/search/:key", async(req,res)=>{
console.log(req.params.key)
    let data= await product.find({
        "$or":[
            {"name":{$regex:req.params.key}},
            {"name":{$regex:req.params.key}}
        ]
    });
 
   res.send(data) 

});

app.listen(5000);
