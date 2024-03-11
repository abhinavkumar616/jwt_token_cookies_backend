const mongoose=require("mongoose")

const jwtModelSchema=new mongoose.Schema({
    name:{
        type:String
    },
    password:{
        type:String
    }
})

const jwt=new mongoose.model("jwt",jwtModelSchema)
module.exports=jwt