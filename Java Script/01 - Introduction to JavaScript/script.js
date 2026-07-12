"use strict";

// ----- console methods -----
console.log("Hello, JavaScript!");
console.info("This is an info message");
console.warn("This is a warning message");
console.error("This is an error message");

// ----- variable declarations -----
var oldStyleVar = "declared with var";
let mutableValue = "declared with let";
const CONSTANT_VALUE = "declared with const";

mutableValue = "let can be reassigned";
// CONSTANT_VALUE = "this line would throw a TypeError";

console.log(oldStyleVar, mutableValue, CONSTANT_VALUE);

// ----- hoisting demonstration -----
console.log(hoistedVar); // undefined, not an error, because var is hoisted
var hoistedVar = "I am hoisted";

try {
  console.log(hoistedLet); // ReferenceError: temporal dead zone
} catch (error) {
  console.error(error.message);
}

let hoistedLet = "I am also hoisted, but not accessible before declaration";

// ----- primitive data types -----
let stringType = "text value";
let numberType = 42;
let bigIntType = 9007199254740993n;
let booleanType = true;
let undefinedType;
let nullType = null;
let symbolType = Symbol("unique");

console.log(typeof stringType); // "string"
console.log(typeof numberType); // "number"
console.log(typeof bigIntType); // "bigint"
console.log(typeof booleanType); // "boolean"
console.log(typeof undefinedType); // "undefined"
console.log(typeof nullType); // "object" (a long-standing JS quirk)
console.log(typeof symbolType); // "symbol"

// ----- reference data type -----
let objectType = { role: "engineer" };
let arrayType = [1, 2, 3];

console.log(typeof objectType); // "object"
console.log(typeof arrayType); // "object" (arrays are objects too)

// ----- naming convention example -----
let userFirstName = "Ahnaf"; // camelCase is the standard for variables and functions
