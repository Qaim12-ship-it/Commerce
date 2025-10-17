 import mongoose from "mongoose";
 const connectDB = async()=>{
     try {
     mongoose.connection.on('connected',()=>{
     console.log('mongodb connected');
   })
    await mongoose.connect(`${process.env.MONGODB_URI}/commerce`)
} catch (error) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1); // stop app if DB not available
  }

  };
 export default connectDB;


    
