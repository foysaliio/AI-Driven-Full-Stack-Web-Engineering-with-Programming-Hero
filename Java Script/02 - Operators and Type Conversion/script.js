"use strict";

// ----- arithmetic operators -----
console.log(10 + 5);  // 15
console.log(10 - 5);  // 5
console.log(10 * 5);  // 50
console.log(10 / 3);  // 3.3333333333333335
console.log(10 % 3);  // 1  (remainder)
console.log(2 ** 10); // 1024 (exponentiation)

// ----- assignment operators -----
let score = 10;
score += 5;  // score = score + 5
console.log(score);
score -= 2;  // score = score - 2
console.log(score);
score *= 3;  // score = score * 3
console.log(score);
score /= 2;  // score = score / 2
console.log(score);

// ----- comparison operators: == vs === -----
console.log(5 == "5");   // true  -> loose equality, converts types first
console.log(5 === "5");  // false -> strict equality, no type conversion
console.log(null == undefined);  // true
console.log(null === undefined); // false

// Always prefer === and !== in professional code to avoid coercion bugs.

// ----- logical operators -----
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false

// short-circuit evaluation
let username = "";
let displayName = username || "Guest"; // falls back when left side is falsy
console.log(displayName); // "Guest"

let user = { name: "Ahnaf" };
let name = user && user.name; // only accesses user.name if user is truthy
console.log(name); // "Ahnaf"

// ----- ternary operator -----
let age = 10;
let category = age >= 18 ? "adult" : "minor";
console.log(category);

// ----- implicit type conversion (coercion) -----
console.log("5" + 3);   // "53"  -> number converted to string
console.log("5" - 3);   // 2     -> string converted to number
console.log("5" * "2"); // 10    -> both converted to number
console.log(1 + true);  // 2     -> true becomes 1
console.log("5" + null);// "5null"
console.log(1 + undefined); // NaN

// ----- explicit type conversion -----
console.log(Number("42"));     // 42
console.log(Number("42px"));   // NaN -> invalid conversion
console.log(String(42));       // "42"
console.log(Boolean(0));       // false
console.log(Boolean(""));      // false
console.log(Boolean("0"));     // true -> non-empty string is truthy

// ----- falsy values (only these 6 are falsy in JavaScript) -----
// false, 0, "", null, undefined, NaN
console.log(Boolean(NaN)); // false

// ----- operator precedence -----
console.log(2 + 3 * 4);   // 14, multiplication before addition
console.log((2 + 3) * 4); // 20, parentheses override precedence
