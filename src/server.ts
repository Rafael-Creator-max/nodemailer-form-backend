import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sendEmail } from "../src/utils/mail"; 
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("✅ Server is running!");
});

// Email Route
app.post("/mail", async (req, res) => {
  try {
    await sendEmail(req.body); 
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email", error });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
