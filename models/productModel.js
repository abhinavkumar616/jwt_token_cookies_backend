const mongoose=require("mongoose")

const productModelSchema=new mongoose.Schema({
    productName:{
        type:String
    },
    description:{
        type:String
    }
})

const product=new mongoose.model("product",productModelSchema)
module.exports=product