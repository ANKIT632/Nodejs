const conndb=require('../mongodb')

const readData = async()=>{

    const db=await conndb();
    
    const data= await db.find({name:'Note6'}).toArray()
   console.log(data);
   
}
readData();