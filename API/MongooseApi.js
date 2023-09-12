// static curd operation
const mongoose=require('mongoose');
const main=async()=>{
    await mongoose.connect("mongodb://0.0.0.0:27017/e-comm");
    const ProductSchema=new mongoose.Schema({
        name:String,
        brand:String,
        price:Number

    });

    const ProductsModel=mongoose.model('products',ProductSchema);
    let data=new ProductsModel({name:"v9",brand:"vivo",price:2000});
    let result=await data.save();
    console.log(result) 
    

}

const updateInDb=async()=>{
    await mongoose.connect("mongodb://0.0.0.0:27017/e-comm");
    // only update name and number
    const ProductSchema=new mongoose.Schema({
        name:String,
        price:Number
    });
// if name is note persent in the table then modified count return 0;
    const Products=mongoose.model('products',ProductSchema);
    let data=await Products.updateOne({name:"Note5"},{$set:{price:6000,name:"vivo"}});
  
    console.log(data) 
     

}

// delete

const deleteData=async()=>{
   
 
    await mongoose.connect("mongodb://0.0.0.0:27017/e-comm");
    const ProductSchema=new mongoose.Schema({
        name:String,
        brand:String,
        price:Number

    });
    const ProductsModel=mongoose.model('products',ProductSchema);
    let data=await ProductsModel.deleteOne({name:"vivo"});
  
    console.log(data) 
    

}
deleteData();
