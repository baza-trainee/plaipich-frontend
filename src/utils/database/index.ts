import mongoose from "mongoose";

let isConnected = false;
const mongoUri = process.env.MONGODB_URI || "";

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("DB connected!");
    return;
  }
  try {
    await mongoose.connect(mongoUri);
    isConnected = true;
    console.log("DB connected!");
  } catch (error) {
    console.log(error);
  }
};