import pgPromise from "pg-promise";
import dotenv from "dotenv";

dotenv.config();

const pgp = pgPromise();

const db = pgp({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || "faq_db",
  user: process.env.DB_USER || "shivam",
  password: process.env.DB_PASSWORD || "12345678",
});

export default db;
