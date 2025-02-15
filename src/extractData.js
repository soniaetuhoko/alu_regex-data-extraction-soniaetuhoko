const regexPatterns = require("./regexPatterns");

function extractData(text) {
  const emails = text.match(regexPatterns.email);
  const phones = text.match(regexPatterns.phone);
  const urls = text.match(regexPatterns.url) || [];
  const creditCards = text.match(regexPatterns.creditCard) || [];
  const htmlTags = text.match(regexPatterns.htmlTag) || [];
  const hashtags = text.match(regexPatterns.hashtag) || [];

  return {
    emails: emails || [],
    phones: phones || [],
    urls,
    creditCards,
    htmlTags,
    hashtags
  };
}

module.exports = extractData;