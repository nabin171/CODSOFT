import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import contactRoutes from "./routes/contact.js";

const app = express();

// Parse JSON bodies
app.use(express.json());

// Enable CORS
app.use(cors());

// Connect to MongoDB
let isConnected = false; // Prevent multiple connections in serverless
async function connectDB() {
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}

// Call DB connection on every function invocation
connectDB();

// Test route
app.get("/", (req, res) => {
  res.send("Portfolio backend is running");
});

// Contact routes
app.use("/api/contact", contactRoutes);

// Export app for Vercel serverless
export default app;
