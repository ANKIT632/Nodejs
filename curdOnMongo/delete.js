const conndb=require('../mongodb')
 
const deleteData = async()=>{

    const db=await conndb();
    // delete many
    const data= await db.deleteMany({name:'Note1'})
   console.log(data);
    if(data.acknowledged){
        console.warn("delete complete "+data.deletedCount +" value")
    }
} 
deleteData();
