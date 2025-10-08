import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import contactRoutes from "./routes/contact.js";
import connectDB from "./config/mongodb.js";

const app = express();

// Parse JSON bodies
app.use(express.json());

// Enable CORS
app.use(cors());

// MongoDB connection for serverless
let isConnected = false;

async function ensureDBConnection() {
  if (isConnected && mongoose.connection.readyState === 1) {
    return;
  }

  try {
    await connectDB();
    isConnected = true;
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    throw err;
  }
}

// Middleware to ensure DB connection before each request
app.use(async (req, res, next) => {
  try {
    await ensureDBConnection();
    next();
  } catch (err) {
    res.status(500).json({ error: "Database connection failed" });
  }
});

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Portfolio backend is running ✅" });
});

// Contact routes
app.use("/api/contact", contactRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({ error: err.message || "Internal server error" });
});

// Export app for Vercel serverless
export default app;
