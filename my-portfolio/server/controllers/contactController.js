import Contact from "../models/Contact.js";

export const saveContact = async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Basic validation check
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Please fill all fields" });
  }

  try {
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    res.status(201).json({ message: "Contact saved successfully" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ error: "Server error" });
  }
};
