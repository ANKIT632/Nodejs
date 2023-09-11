const express=require ('express');
const dbconn=require('../mongodb');
const app =express();
const mongodb=require('mongodb')

//use middleware use to get request in json
app.use(express.json());
// we can pass multiple API request on same route.
// get method (does not pass body on get method , we can pass query param on url)
// app.get('/',async(req,res)=>{
//     let db=await dbconn();
//     const data=await db.find().toArray();
//      res.send(data)
//      // ok show when page are reload
//      console.log('OK')
  

// });

// //post method insert trough api
// app.post('/',async(req,res)=>{

//    const db =await dbconn();
//     const data=await db.insertOne(req.body);

//      res.send(data)
   
  

// });


//update  use param (pass in url)
// app.put('/:name',async(req,res)=>{

//      const db =await dbconn();
//      let result =db.updateOne({name:req.params.name},{$set:req.body})
//        res.send({result:"update"})
     
    
  
//   });

// delete
  app.delete('/:id',async(req,res)=>{

     const db =await dbconn();
     let result =db.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
       res.send("done")
     
    
  
  });
app.listen(5000);