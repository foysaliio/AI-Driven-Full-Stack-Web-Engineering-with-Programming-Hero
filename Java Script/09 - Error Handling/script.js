"use strict";

// ----- basic try...catch -----
try {
  console.log(undefinedVariable); // this will throw an error
} catch (error) {
  console.log("Something went wrong:", error.message);
}

// ----- code after a caught error still runs -----
console.log("Program continues normally");

// ----- try...catch...finally -----
try {
  console.log("Trying something risky");
  throw new Error("Custom failure"); // manually throwing an error
} catch (error) {
  console.log("Caught:", error.message);
} finally {
  console.log("This always runs, whether there was an error or not");
}

// ----- throwing your own errors -----
function checkAge(age) {
  if (age < 18) {
    throw new Error("Age must be 18 or older");
  }
  return "Access granted";
}

try {
  console.log(checkAge(15));
} catch (error) {
  console.log("Error:", error.message);
}

// ----- common built-in error types -----
try {
  null.someProperty; // TypeError
} catch (error) {
  console.log(error.name, "-", error.message);
}

try {
  JSON.parse("not valid json"); // SyntaxError
} catch (error) {
  console.log(error.name, "-", error.message);
}

// ----- using error handling in a practical function -----
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 2)); // 5
  console.log(divide(10, 0)); // throws
} catch (error) {
  console.log("Division error:", error.message);
}
