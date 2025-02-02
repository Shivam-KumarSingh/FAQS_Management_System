const { expect } = require("chai");
const { FAQ } = require("../models/FAQ"); // Assuming you have a FAQ model

describe("FAQ Model", () => {
  it("should create a new FAQ", async () => {
    const faq = await FAQ.create({ question: "What is Jest?", answer: "A testing framework" });
    expect(faq).to.have.property("question");
    expect(faq).to.have.property("answer");
  });

  it("should find FAQ by ID", async () => {
    const faq = await FAQ.create({ question: "What is Node?", answer: "A JavaScript runtime" });
    const foundFaq = await FAQ.findById(faq.id);
    expect(foundFaq).to.not.be.null;
  });
});
