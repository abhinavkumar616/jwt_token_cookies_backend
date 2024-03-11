const productModel=require("../models/productModel")


const addProduct=(async(req,res)=>{
    try{
        console.log("name",req.user);

        let productName=req.body.productName
        let description=req.body.description

        let data= await productModel.create({
            productName, description
        })

        // await data.save()

        res.send({
            data:data
        })
    }
    catch(error){
        res.send({
            message:"Internal Server Error",
            error:error.message
        })
    }
})

module.exports=addProduct