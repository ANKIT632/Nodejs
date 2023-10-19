const conndb=require('../mongodb');
// double .. use when import file outside of the current folder.
 
const insert=async()=>{
    const db= await conndb();
    const data=await db.insertMany([{name:"Note6" , brand:"mi",price:"2600"},{name:"Note5" , brand:"mi",price:"2500"}])
    console.log(data);

    if(data.acknowledged){
        console.log("insert successfull " + data.insertedCount +" object");
      }
} 


insert();
