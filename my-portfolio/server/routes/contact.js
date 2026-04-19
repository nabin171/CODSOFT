import express from "express";
import Contact from "../models/contact.js";
import { sendEmail } from "../utils/sendEmail.js";

const router = express.Router();

// ✅ POST route to handle contact form submissions
router.post("/", async (req, res) => {
  try {
    console.log("📨 Received contact form data:", req.body);

    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        error: "All fields are required",
        received: req.body,
      });
    }

    // Create new contact entry
    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });

    // Save to database
    await newContact.save();

    // 👉 SEND EMAIL AFTER SAVING
    await sendEmail(name, email, subject, message);

    console.log("✅ Contact saved successfully");
    res.status(201).json({
      message: "Message received successfully!",
      contact: newContact,
    });
  } catch (error) {
    console.error("❌ Error saving contact:", error);
    res.status(500).json({
      error: "Failed to save message",
      details: error.message,
    });
  }
});

// ✅ GET route to retrieve all contacts (optional)
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error("❌ Error fetching contacts:", error);
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
});

export default router;
