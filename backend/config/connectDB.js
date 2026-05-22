import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://divyanshuk:Tripassist123@tripassist.xl7qcdg.mongodb.net/?appName=TripAssist');
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("error to connect DB", error);
    process.exit(1);
  }
};
