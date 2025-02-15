
# Extraction Of Regex Information

## summary
Developed with Node.js, the **Regex Data Extraction CLI is a command-line tool that uses regular expressions to extract particular kinds of data from a given text input. Credit card numbers, phone numbers, emails, and URLs can be found and extracted using the tool. Users can query the retrieved data through an interactive interface.

## Features: 
Email addresses (such as test@mail.com) are extracted and displayed. - URLs For instance, consider https://example.com. ~(123) 456-7890` Contact numbers, for example
These are the credit card numbers. The number 1234-5678-9012-3456 is one example.
A command-line interface that is interactive
Code structure that is modular for easier maintenance
Using Jest for extensive unit testing

## Technologies Used: 
- Node.js - JavaScript runtime environment 
- Jest A unit testing framework called the Readline Module. creates features for interactive CLI feasible.

### Configuration 
### Necessities

Ensure that you have Node.js installed. Installing it can be done through [the official Node.js website](https://nodejs.org/).

The steps are as follows: 
``sh git clone https://github.com/soniaetuhoko/alu_regex-data-extraction-soniaetuhoko.git

 cd alu_regex-data-extraction-soniaetuhoko 

1. Use npm install sh ~`` to clone the repository and install dependencies.

## Use
Enter the following command to start the CLI: sh node app.js 

### Interactive Guides
Once the script has completed executing, use the following commands:
- Press 'a' to see all the emails.
- Press 'b' to see alll the urls.
- Press 'c' to see all retrieved phone numbers.
- Press 'd' The credit card numbers that have been retrieved are all shown.
- Press 'e' to see all retrieved Html Tags.
- Press 'f' The hashtags that have been retrieved are all shown.
- Press 'q' Close the CLI

Press 'q' Close the CLI

## Project Structure 
``` 

├── src/ 
│ 
├── extractData.js # uses regex to extract data 
├── regexPatterns.js # contain the regex patterns
├── tests/ 
│ 
├── extractData.test.ts # defines regex patterns The test cases for Jest are 
├── app.js. The main package.json file in the CLI application 
├── package.json # Dependencies for the project 
└── README.md # Documents 

```

## Analysing

To run unit tests, use sh npm test .
This ensures that the regex patterns work correctly in a range of test situations.

This was written by Sonia Etuhoko.

Let's celebrate coding! 🚀