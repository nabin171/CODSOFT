import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Don't add /portfolio again since it's already in MONGODB_URI
    await mongoose.connect(process.env.MONGODB_URI);

    mongoose.connection.on("connected", () => {
      console.log("✅ DB connected");
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ DB connection error:", err);
    });
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    throw error;
  }
};

export default connectDB;
