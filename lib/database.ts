import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectionToDb = async (): Promise<void> => {
  const connectionString = process.env.MONGODB_URI;
  if (!connectionString) {
    throw new Error("MONGODB_URI is not defined");
  }
  await mongoose.connect(connectionString);
};

export default connectionToDb;
