import mongoose from "mongoose";
const connectionString = process.env.MONGO_URL || "";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(connectionString);
    console.log(`Database connected with ${conn.connection.host}`);
  } catch (e: any) {
    console.error(e?.message);
  }
};

export default connectDB;
