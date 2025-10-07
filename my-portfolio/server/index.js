import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.js";
import cors from "cors";

dotenv.config();

const app = express();

// ✅ Enable CORS for all routes
app.use(cors());
// ✅ Parse JSON bodies
app.use(express.json());

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // Exit if DB connection fails
  });

mongoose.connection.once("open", () => {
  console.log("Connected to DB:", mongoose.connection.name);
});

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Portfolio backend is running");
});

// ✅ Contact routes
app.use("/api/contact", contactRoutes);

// ✅ Export the app (for Vercel)
export default app;
