import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import contactRoutes from "./routes/contact.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Allow requests from local dev and the deployed frontend
const allowedOrigins = [
  "http://localhost:5173",
  "https://nabinkarki10.com.np",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // allow non-browser requests (curl, Postman) that send no origin
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`Not allowed by CORS: ${origin}`));
      }
    },
    credentials: true,
  }),
);

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err.message));

// Routes
app.get("/", (req, res) => res.json({ message: "Server running ✅" }));
app.use("/api/contact", contactRoutes);

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
