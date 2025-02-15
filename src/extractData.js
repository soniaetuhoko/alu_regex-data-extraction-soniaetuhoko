const regexPatterns = require("./regexPatterns");

function extractData(text) {
  const emails = text.match(regexPatterns.email);
  const phones = text.match(regexPatterns.phone);
  const urls = text.match(regexPatterns.url) || [];
  const creditCards = text.match(regexPatterns.creditCard) || [];

  return {
    emails: emails || [],
    phones: phones || [],
    urls,
    creditCards
  };
}

module.exports = extractData;