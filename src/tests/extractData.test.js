const extractData = require("../src/extractData");

describe("Regex Data Extraction", () => {
  test("should extract emails from text", () => {
    const result = extractData("Contact me at test@mail.com, john.doe@example.co.uk, jane.doe@company.org, and user123@domain.net");
    expect(result.emails).toContain("test@mail.com");
    expect(result.emails).toContain("john.doe@example.co.uk");
    expect(result.emails).toContain("jane.doe@company.org");
    expect(result.emails).toContain("user123@domain.net");
  });

  test("should extract URLs from text", () => {
    const result = extractData("Visit us at https://site.com, http://example.org, https://sub.domain.com/page, and https://another-site.net");
    expect(result.urls).toContain("https://site.com");
    expect(result.urls).toContain("http://example.org");
    expect(result.urls).toContain("https://sub.domain.com/page");
    expect(result.urls).toContain("https://another-site.net");
  });

  test("should extract phone numbers from text", () => {
    const result = extractData("Call (123) 456-7890, 123-456-7890, 123.456.7890, +1-800-555-1212, and +44 20 7946 0958");
    expect(result.phones).toContain("(123) 456-7890");
    expect(result.phones).toContain("123-456-7890");
    expect(result.phones).toContain("123.456.7890");
    expect(result.phones).toContain("+1-800-555-1212");
    expect(result.phones).toContain("+44 20 7946 0958");
  });

  test("should extract credit card numbers from text", () => {
    const result = extractData("My credit card numbers are 1234 5678 9012 3456, 1234-5678-9012-3456, 4321-8765-2109-6543, and 9876 5432 1098 7654");
    expect(result.creditCards).toContain("1234 5678 9012 3456");
    expect(result.creditCards).toContain("1234-5678-9012-3456");
    expect(result.creditCards).toContain("4321-8765-2109-6543");
    expect(result.creditCards).toContain("9876 5432 1098 7654");
  });

  test("should extract HTML tags from text", () => {
    const result = extractData("Check out <div>HTML content</div>, <span>more HTML</span>, <a href=\"#\">link</a>");
    expect(result.htmlTags).toContain("<div>HTML content</div>");
    expect(result.htmlTags).toContain("<span>more HTML</span>");
    expect(result.htmlTags).toContain("<a href=\"#\">link</a>");
  });

  test("should extract hashtags from text", () => {
    const result = extractData("Check out #hashtags, #moreTags, #evenMore");
    expect(result.hashtags).toContain("#hashtags");
    expect(result.hashtags).toContain("#moreTags");
    expect(result.hashtags).toContain("#evenMore");
  });

  test("should handle empty input", () => {
    const result = extractData("");
    expect(result.emails).toEqual([]);
    expect(result.phones).toEqual([]);
    expect(result.urls).toEqual([]);
    expect(result.creditCards).toEqual([]);
    expect(result.htmlTags).toEqual([]);
    expect(result.hashtags).toEqual([]);
  });

  test("should handle text with no matches", () => {
    const result = extractData("There is no valid data here.");
    expect(result.emails).toEqual([]);
    expect(result.phones).toEqual([]);
    expect(result.urls).toEqual([]);
    expect(result.creditCards).toEqual([]);
    expect(result.htmlTags).toEqual([]);
    expect(result.hashtags).toEqual([]);
  });
});