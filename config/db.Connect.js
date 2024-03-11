const mongoose=require("mongoose")

async function getData(){
    try{
        await mongoose.connect("mongodb://localhost:27017/address")
        console.log("Database is connected");
    }
    catch(error){
        console.log(`Database connection is lost ${error}`);
    }
}

getData()