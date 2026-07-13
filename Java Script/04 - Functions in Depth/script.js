"use strict";

// ----- function declaration (hoisted entirely, callable before definition) -----
console.log(add(2, 3)); // works due to hoisting
function add(a, b) {
  return a + b;
}

// ----- function expression (not hoisted like declarations) -----
const subtract = function (a, b) {
  return a - b;
};
console.log(subtract(5, 2));

// ----- arrow function -----
const multiply = (a, b) => a * b; // implicit return for single expression
console.log(multiply(4, 5));

const square = (x) => {
  const result = x * x; // block body requires explicit return
  return result;
};
console.log(square(6));

// arrow functions do not have their own "this" or "arguments" -
// they inherit both from the enclosing scope (covered further in the OOP topic)

// ----- default parameters -----
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log(greet());       // "Hello, Guest!"
console.log(greet("Ahnaf")); // "Hello, Ahnaf!"

// ----- rest parameters -----
function sumAll(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

// ----- arguments object (only in regular functions, not arrow functions) -----
function showArguments() {
  console.log(arguments.length);
  console.log(Array.from(arguments));
}
showArguments(1, "two", true);

// ----- function scope vs block scope -----
function scopeDemo() {
  if (true) {
    var functionScoped = "visible outside the if block";
    let blockScoped = "only visible inside the if block";
    console.log(blockScoped);
  }
  console.log(functionScoped); // accessible - var ignores block scope
}
scopeDemo();

// ----- functions are first-class citizens -----
function sayHi() {
  return "Hi!";
}
const fnRef = sayHi; // assigned to a variable, like any other value
console.log(fnRef());

// ----- higher-order functions: take or return a function -----
function withLogging(fn) {
  return function (...args) {
    console.log(`Calling function with args: ${args}`);
    return fn(...args);
  };
}
const loggedAdd = withLogging(add);
console.log(loggedAdd(3, 4));

// ----- callbacks -----
function processArray(arr, callback) {
  const result = [];
  for (const item of arr) {
    result.push(callback(item));
  }
  return result;
}
console.log(processArray([1, 2, 3], (n) => n * 2)); // [2, 4, 6]

// ----- Immediately Invoked Function Expression (IIFE) -----
(function () {
  const privateValue = "not accessible outside this function";
  console.log(privateValue);
})();

// ----- named function expression for recursion and stack traces -----
const factorial = function calculateFactorial(n) {
  if (n <= 1) return 1;
  return n * calculateFactorial(n - 1);
};
console.log(factorial(5)); // 120
