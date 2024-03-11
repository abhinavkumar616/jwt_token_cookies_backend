const express= require("express")
const jwtToken = require("../controllers/jwtToken")
const addProduct = require("../controllers/addProduct")

const verifyToken=require("../middleware/verifyToken")


const router=express.Router()

router.post("/jwt",jwtToken)
router.post("/addProduct",verifyToken,addProduct)

module.exports=router