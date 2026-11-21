const mongoose = require("mongoose");

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected To DB");
    }catch(err){
        console.log("Database Connection Is Failed: ",err);
    }
}

module.exports = connectDB;