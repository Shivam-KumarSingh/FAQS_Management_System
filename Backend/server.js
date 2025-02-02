import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./db.js"; // Ensure the file has a `.js` extension when importing
import faqRoutes from "./routes/faqRoutes.js"; // Add `.js` extension

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test database connection before starting the server
db.connect()
  .then((obj) => {
    obj.done(); // Release the connection
    console.log("✅ Connected to PostgreSQL Database");

    // Start Server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Failed to connect to PostgreSQL:", error);
    process.exit(1); // Exit if DB connection fails
  });

// Routes
app.use("/api/faqs", faqRoutes);
