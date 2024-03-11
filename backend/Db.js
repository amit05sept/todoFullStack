require("dotenv").config({path:"../.env"});
const mongoose = require("mongoose");


const connectDb = async function(){
    try{
        // console.log(process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to db...");
    }catch(err){
        console.log(err);
    }   
};

module.exports = connectDb;