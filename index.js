const {MongoClient} =require('mongodb');
const url ='mongodb://0.0.0.0:27017';

const  client = new MongoClient(url);
async function getData(){
  let result=await client.connect();
  let db=result.db('e-comm'); 
  let collection=db.collection('products');
   let reponse=await collection.find({}).toArray();
  console.log(reponse);

} 
getData();