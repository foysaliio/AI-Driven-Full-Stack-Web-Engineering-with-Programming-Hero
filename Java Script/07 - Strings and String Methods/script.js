"use strict";

// ----- creating strings -----
const singleQuote = 'Hello';
const doubleQuote = "World";
const templateLiteral = `${singleQuote} ${doubleQuote}`; // template literal with interpolation
console.log(templateLiteral);

// ----- multi-line template literals -----
const multiLine = `Line one
Line two`;
console.log(multiLine);

// ----- string length -----
const message = "JavaScript is fun";
console.log(message.length);

// ----- accessing characters -----
console.log(message[0]);       // "J"
console.log(message.charAt(1)); // "a"

// ----- changing case -----
console.log(message.toUpperCase());
console.log(message.toLowerCase());

// ----- trimming whitespace -----
const padded = "   extra spaces   ";
console.log(padded.trim());

// ----- searching inside a string -----
console.log(message.includes("fun"));   // true
console.log(message.indexOf("is"));     // index where "is" starts
console.log(message.startsWith("Java")); // true
console.log(message.endsWith("fun"));    // true

// ----- extracting parts of a string -----
console.log(message.slice(0, 10));  // "JavaScript"
console.log(message.substring(11)); // "is fun"

// ----- replacing text -----
console.log(message.replace("fun", "awesome"));

// ----- splitting a string into an array -----
const words = message.split(" ");
console.log(words);

// ----- joining an array into a string -----
console.log(words.join("-"));

// ----- repeating a string -----
console.log("ha".repeat(3));

// ----- concatenation -----
console.log(singleQuote.concat(" ", doubleQuote));
