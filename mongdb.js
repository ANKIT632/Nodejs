const {MongoClient} =require('mongodb');
const url ='mongodb://0.0.0.0:27017';

const  client = new MongoClient(url);

const dbConnection= async ()=>{
  let result=await client.connect();
  let db=result.db('e-comm'); 
   collection=db.collection('products');
return collection;

} 

module.exports=dbConnection;
