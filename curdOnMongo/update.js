const conndb=require('../mongodb')

const update=async()=>{

    const db=await conndb();
    // update many
    const data= await db.updateMany({name:'Note6'}, {$set :{brand:"redmi"}})

    if(data.acknowledged){
        console.warn("update complete "+ data.modifiedCount +" value")
    }
}
update();