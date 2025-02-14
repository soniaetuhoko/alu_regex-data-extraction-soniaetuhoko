const regexPatterns = {
    email: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g,
    url: /https?:\/\/[^\s/$.?#].[^\s]*/g,
    phone: /(\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})/g,
    creditCard: /\b(?:\d{4}[ -]?){3}\d{4}\b/g
  };
  
  module.exports = regexPatterns;
  