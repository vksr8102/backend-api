const mongoose = require("mongoose")
mongoose.set('strictQuery', false);
const connectDB = async()=>{
    try {
      const connect = await mongoose.connect(process.env.DB_URL);
      console.log(`MongoDB Connected: ${connect}`);
    } catch (error) {
        console.log(error)
        process.exit(1)
      
        
    }
}
module.exports = connectDB;