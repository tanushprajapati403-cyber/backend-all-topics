import mongoose  from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://0.0.0.0/employe-fs35");
    console.log("mongodb are connected");
  } catch (error) {
    console.log("error in mongodb", error);
  }
};
