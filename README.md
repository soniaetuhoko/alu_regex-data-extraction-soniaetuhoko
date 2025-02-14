# API for Regex Data Extraction

## Summary
The Regex Data Extraction API is a straightforward RESTful service built with Node.js and Express that uses regular expressions to extract particular data types (such as emails, URLs, phone numbers, and credit card numbers) from a given text input.

## Highlights: Extracts
  Phone numbers, email addresses, URLs, and credit card numbers
An Express.js-built RESTful API
For cross-origin requests, CORS is enabled.
Jest and Supertest are used for unit testing.

## Technology Employed
Express.js with Node.js
Jest (for testing purposes)
Supertest (for testing APIs)
- dotenv (for variables in the environment)
CORS (for requests from different origins)

## Setup
### 1. Clone the repository using the command sh git clone https://github.com/soniaetuhoko/alu_regex-data-extraction-soniaetuhoko.git 
cd regex-data-extraction-api


### 2. Use sh npm install to install dependencies


### 3. Make an environment file called shtouch.env.

Add the following (optional, since port 5000 is the default) inside.env:
envPORT=5000


### 4. Use sh npm start to launch the server

The IP address of the server will be http://localhost:5000.

## Endpoints for the API ### 1. Extract Data: /api/extract
The POST method
Emails, URLs, phone numbers, and credit card numbers are extracted from the given content.
- Body of Request: json
  {   "text": "Or visit https://example.com or send me an email at test@mail.com. Give (123) 456-7890 a call. The number on my card is 1234-5678-9012-3456.
  
- Reaction: JSON
  {   "extractedData": {     "emails": ["test@mail.com"],     "urls": ["https://example.com"],     "phones": ["(123) 456-7890"],     "creditCards": ["1234-5678-9012-3456"]   
  

## Executing Tests
To execute the suite of tests: sh npm test


## Project Structure

regex-data-extraction-api/
│-- src/
│   ├── controllers/
│   │   ├── extractController.js
│   ├── routes/
│   │   ├── extractRoutes.js
│   ├── utils/
│   │   ├── regexPatterns.js
│   ├── app.js
│-- tests/
│   ├── extractController.test.js
│-- .env
│-- package.json
│-- README.md