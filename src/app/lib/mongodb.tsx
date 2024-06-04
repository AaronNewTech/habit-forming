import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { MONGODB_URI } = process.env;


if (!MONGODB_URI) {
    console.log("MONGODB_URI", MONGODB_URI);
  throw new Error("Invalid env variable: MONGODB_URI");
}

export const connectToMongoDB = async () => {
  if (mongoose.connection.readyState !== 0) {
    return;
  }
  try {
    const { connection } = await mongoose.connect(MONGODB_URI);
    if (connection.readyState === 1) {
      return Promise.resolve(true);
    }
  } catch (error) {
    Promise.reject(error);
  }
};
