const readline = require('readline');
const extractData = require('./src/extractData');

// Sample text for testing
const text = `
  Contact me at test@mail.com, john.doe@example.co.uk, jane.doe@company.org, and user123@domain.net. 
  Visit us at https://site.com, http://example.org, https://sub.domain.com/page, and https://another-site.net. 
  Call (123) 456-7890, 123-456-7890, 123.456.7890, +1-800-555-1212, and +44 20 7946 0958. 
  My credit card numbers are 1234 5678 9012 3456, 1234-5678-9012-3456, 4321-8765-2109-6543, and 9876 5432 1098 7654.
  Check out <div>HTML content</div>, <span>more HTML</span>, <a href="#">link</a>, and #hashtags, #moreTags, #evenMore.
`;

const extractedData = extractData(text);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Press 'a' to display all emails.");
console.log("Press 'b' to display all URLs.");
console.log("Press 'c' to display all phone numbers.");
console.log("Press 'd' to display all credit card numbers.");
console.log("Press 'e' to display all HTML tags.");
console.log("Press 'f' to display all hashtags.");
console.log("Press 'q' to quit.");

rl.on('line', (input) => {
  switch (input.trim()) {
    case 'a':
      console.log("Emails:", extractedData.emails);
      break;
    case 'b':
      console.log("URLs:", extractedData.urls);
      break;
    case 'c':
      console.log("Phone Numbers:", extractedData.phones);
      break;
    case 'd':
      console.log("Credit Card Numbers:", extractedData.creditCards);
      break;
    case 'e':
      console.log("HTML Tags:", extractedData.htmlTags);
      break;
    case 'f':
      console.log("Hashtags:", extractedData.hashtags);
      break;
    case 'q':
      rl.close();
      break;
    default:
      console.log("Not found. Try again.");
      break;
  }
  rl.prompt();
});

rl.prompt();