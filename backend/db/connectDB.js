import mongoose from "mongoose";
const connectDB = async () => {
    try {
      await mongoose.connect("mongodb://127.0.0.1:27017/login");
      console.log("Connected to DB...");
    } catch (error) {
      console.error(`Error ${error}`);
    }
};
export {connectDB};