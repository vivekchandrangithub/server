const mongoose = require('mongoose')


const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("database connected");
    }catch(error){
        console.log(error);
        resizeBy.status(500).json(error)
    }
}

module.exports = {connectDB}; 