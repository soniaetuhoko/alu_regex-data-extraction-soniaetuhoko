const request = require("supertest");
const express = require("express");
const extractRoutes = require("../src/routes/extractRoutes");

const app = express();
app.use(express.json());
app.use("/api", extractRoutes);

describe("Regex Extraction API", () => {
  it("should extract emails, URLs, and phone numbers", async () => {
    const response = await request(app)
      .post("/api/extract")
      .send({ text: "Contact me at test@mail.com or visit https://site.com. Call (123) 456-7890" });

    expect(response.status).toBe(200);
    expect(response.body.extractedData.emails).toContain("test@mail.com");
    expect(response.body.extractedData.urls).toContain("https://site.com");
    expect(response.body.extractedData.phones).toContain("(123) 456-7890");
  });
});
