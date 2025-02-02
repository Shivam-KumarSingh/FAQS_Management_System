import request from "supertest";
import app from "../server"; // Adjust the path if needed

describe("GET /api/faqs", () => {
  it("should return all FAQs", async () => {
    const response = await request(app).get("/api/faqs");
    expect(response.status).toBe(200);  // Jest uses `toBe` for exact value matching
    expect(response.body).toBeInstanceOf(Array);  // Use Jest's toBeInstanceOf
  });
});
