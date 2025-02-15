# Extracting Regex Information 

## Synopsis
The **Regex Data Extraction CLI** is a command-line tool created with **Node.js** that extracts specific types of data from a given text input by using **regular expressions**. The tool can locate and extract **credit card numbers, phone numbers, emails, and URLs**. An interactive interface allows users to query the data that has been retrieved.



## Features: Extracts and displays
  **Email addresses** (for instance, test@mail.com)
  - **URLs** Take `https://example.com`, for example.
  As an illustration, `(123) 456-7890` **Contact numbers**
  The credit card numbers are as follows. One example is `1234-5678-9012-3456`.
An interactive command-line interface
Modular code structure for simpler upkeep
Extensive **unit testing** using Jest

## Technologies Used: 
- **Node.js** - JavaScript runtime environment - **Jest** The **Readline Module** is a framework for unit testing. makes interactive CLI features possible.

## Configuration
### Requirements
Make sure **Node.js** is installed. It is available for download and installation via [the official Node.js website](https://nodejs.org/).

### Procedures
``sh git clone https://github.com/soniaetuhoko/alu_regex-data-extraction-soniaetuhoko.git cd alu_regex-data-extraction-soniaetuhoko ``` 1. Clone the repository
Install dependencies by running npm install ```sh ~``

## Application
To launch the CLI, type the following command: ```sh node app.js ```

### Interactive Instructions
Use the following commands after the script has finished running:
To view all extracted **emails**, press **'a'**.
To see all of the retrieved **URLs**, press **'b'**.
To view all retrieved **phone numbers**, press **'c'**.
Press **'d'** All retrieved **credit card numbers** are displayed.
Press **'q'** End the CLI

## Project Organization  
```
  ├── src/
  │   ├── extractData.js   # Extracts data using regex
  │   ├── regexPatterns.js # Defines regex patterns
  ├── tests/
  │   ├── extractData.test.ts  # Jest test cases
  ├── app.js              # Main CLI application
  ├── package.json        # Project dependencies
  └── README.md           # Documentation
```

## Examining
Use ```sh npm test ``` to execute unit tests.
This guarantees that the regex patterns function properly across various test scenarios.


## Author: **Sonia Etuhoko** created this.


Cheers to coding! 🚀




