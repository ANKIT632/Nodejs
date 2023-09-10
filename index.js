
const dbConnection=require('./mongdb')

const main= async ()=>{
  // both are return promises there for we are handle througth async-wait
  let data=await dbConnection();
 data= await data.find({}).toArray();
 console.warn(data)
}
main()
