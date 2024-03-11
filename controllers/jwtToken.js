// const express=require("express")
// const jwt=require("jsonwebtoken")

// const jwtModel=require("../models/jwtModel")

// const jwtToken=(async(req,res)=>{
    
//     // var token= jwt.sign({
//     //     // data:"foobar"
//     // },'secret',{expiresIn:'1h'})
//     // console.log(token);

//     const {name,password}=req.body

//     var token= jwt.sign({
//         exp: Math.floor(Date.now() / 1000) + (60 * 60),
//         data: 'hello'
//       }, 'secret');
//       // console.log("token",token);

//       res.cookie('token', token, { httpOnly: true, maxAge: 60 * 60 * 1000 }); // maxAge is in milliseconds


//       const data= await jwtModel.create({
//         name,password
//       })

//       await data.save()

//       const decodedToken = jwt.verify(token, 'secret');
//         const dataValue = decodedToken.data;
//         // console.log("dataValue",dataValue);

//       res.status(201).send({
//         token:token,
//         data:data
//       })

// })

// module.exports=jwtToken

////////////////////////////////////////////////////


const express=require("express")
const jwt=require("jsonwebtoken")

const jwtModel=require("../models/jwtModel")

const jwtToken=(async(req,res)=>{
    
    // var token= jwt.sign({
    //     // data:"foobar"
    // },'secret',{expiresIn:'1h'})
    // console.log(token);

    const {name,password}=req.body

    var token= jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: name
      }, 'secret');
      // console.log("token",token);

      res.cookie('token', token, { httpOnly: true, maxAge: 60 * 60 * 1000 }); // maxAge is in milliseconds


      const data= await jwtModel.create({
        name,password
      })

      await data.save()

      const decodedToken = jwt.verify(token, 'secret');
        const dataValue = decodedToken.data;
        // console.log("dataValue",dataValue);

      res.status(201).send({
        token:token,
        data:data
      })

})

module.exports=jwtToken