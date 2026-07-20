# 09 - Error Handling

## Overview

Errors are a normal part of programming. This topic covers how to catch errors gracefully with `try...catch`, throw your own custom errors, and recognize common built-in error types.

## Topics Covered

### 1. Basic try...catch

Code inside `try` runs normally; if it throws an error, execution jumps to the `catch` block instead of crashing the program.

### 2. Program Continues After a Caught Error

Once an error is caught, the rest of the program keeps running normally — this is the main benefit of error handling.

### 3. try...catch...finally

The `finally` block always runs, whether an error occurred or not — useful for cleanup code.

### 4. Throwing Custom Errors

`throw new Error("message")` lets you manually trigger an error with your own message, which can then be caught with `try...catch`.

### 5. Common Built-in Error Types

- `TypeError` — occurs when a value is not of the expected type (e.g., calling a property on `null`).
- `SyntaxError` — occurs when code (or parsed data, like invalid JSON) is not structured correctly.

### 6. Practical Example

Using `try...catch` around a function that throws a custom error (like preventing division by zero) to handle it gracefully instead of crashing.

## Files

- `index.html` — minimal HTML file that loads `script.js`
- `script.js` — demonstrates try/catch/finally, custom errors, and common built-in error types

## How to Run

Open `index.html` in a browser and check the DevTools Console (F12) to see the output.

## Key Takeaways

- Always wrap code that might fail (like parsing data or accessing unpredictable values) in `try...catch`.
- `error.message` gives a readable description of what went wrong; `error.name` gives the error type.
- `throw new Error("...")` is the standard way to create and raise your own errors.
