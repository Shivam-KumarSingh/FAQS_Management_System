import express from "express";
import db from "../db.js";  // Ensure the file extension is included
import NodeCache from "node-cache";
import { translate } from '@vitalets/google-translate-api'; // Destructure the translate function

const router = express.Router();

// Cache setup
const cache = new NodeCache({ stdTTL: 300 });

// Get FAQs with language translation
router.get("/", async (req, res) => {
  try {
    const lang = req.query.lang || "en";

    // Check if data exists in cache
    if (cache.has(`faqs_${lang}`)) {
      return res.json(cache.get(`faqs_${lang}`));
    }

    let faqs = await db.any("SELECT * FROM faqs");

    // Translate FAQs dynamically
    if (lang !== "en") {
      for (let faq of faqs) {
        faq.question = faq[`question_${lang}`] || (await translate(faq.question, { to: lang })).text;
        faq.answer = faq[`answer_${lang}`] || (await translate(faq.answer, { to: lang })).text;
      }
    }

    // Store in cache
    cache.set(`faqs_${lang}`, faqs);

    res.json(faqs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Create new FAQ
router.post("/", async (req, res) => {
  try {
    const { question, answer } = req.body;
    if (!question || !answer) return res.status(400).json({ error: "Question and Answer are required" });

    // Translate to other languages
    const question_hi = (await translate(question, { to: "hi" })).text;
    const answer_hi = (await translate(answer, { to: "hi" })).text;
    const question_bn = (await translate(question, { to: "bn" })).text;
    const answer_bn = (await translate(answer, { to: "bn" })).text;

    const newFaq = await db.one(
      "INSERT INTO faqs (question, answer, question_hi, answer_hi, question_bn, answer_bn) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [question, answer, question_hi, answer_hi, question_bn, answer_bn]
    );

    res.json(newFaq);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Delete FAQ
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.none("DELETE FROM faqs WHERE id = $1", [id]);
    res.json({ message: "FAQ deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router; // Exporting using ES module syntax