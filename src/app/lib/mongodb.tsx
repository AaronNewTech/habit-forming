import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URL = process.env.MONGO_URL;


if (!MONGODB_URL) {
    console.log("MONGODB_URL", MONGODB_URL);
  throw new Error("Invalid env variable: MONGODB_URL");
}

export const connectToMongoDB = async () => {
  if (mongoose.connection.readyState !== 0) {
    return;
  }
  try {
    const { connection } = await mongoose.connect(MONGODB_URL);
    if (connection.readyState === 1) {
      return Promise.resolve(true);
    }
  } catch (error) {
    Promise.reject(error);
  }
};
