const express=require('express');
require('./config');


const product = require('./product');

const app=express();
app.use(express.json());

// create

app.post('/create', async(req,res)=>{
    
    let data=new product(req.body);
    const result= await data.save();
   res.send("done") 
});

//Read

app.get('/list', async(req,res)=>{
  
    let data=await product.find({});
   
   res.send(data) 
});


//delete
// parms always return in the form of jason
app.delete('/delete/:_id', async(req,res)=>{
    console.log(req.params)
    let data=await product.deleteOne(req.params);
   
   res.send(data) 
});

//update
app.put('/update/:_id', async(req,res)=>{
    console.log(req.params)
    let data=await product.updateOne(req.params,{$set:req.body});
   
   res.send(data) 
});


app.listen(5000); 
