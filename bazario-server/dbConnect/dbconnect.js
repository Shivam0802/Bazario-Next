import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://admin:admin@bazario.ouwxy.mongodb.net/?retryWrites=true&w=majority&appName=Bazario");
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};


export default dbConnect;