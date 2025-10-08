import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.js";
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// ✅ Enable CORS for all routes
app.use(cors());
// ✅ Parse JSON bodies
app.use(express.json());

// ✅ Connect to MongoDB (removed deprecated options)
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

// ✅ Test route to verify server is working
app.get("/", (req, res) => {
  res.send("Protfolio backend is running");
});

// ✅ Import and use contact routes
app.use("/api/contact", contactRoutes);

// ✅ Start server
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
