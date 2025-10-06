import mongoose from "mongoose"

export const connectDB = async()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Connected to mongodb ${connect.connection.host}`);
    } catch (error) {
        console.log("Failed to connect to mongodb", error);
        process.exit(1) //1=fail, 0=success
    }
}