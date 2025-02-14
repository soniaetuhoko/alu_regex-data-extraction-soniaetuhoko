const regexPatterns = require("../utils/regexPatterns");

exports.extractData = (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: "Text input is required" });
  }

  const extractedData = {
    emails: text.match(regexPatterns.email) || [],
    urls: text.match(regexPatterns.url) || [],
    phones: text.match(regexPatterns.phone) || [],
    creditCards: text.match(regexPatterns.creditCard) || [],
  };

  res.json({ extractedData });
};
