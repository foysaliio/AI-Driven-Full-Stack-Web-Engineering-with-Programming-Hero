# 08 - Scope and Closures

## Overview

Scope determines where a variable can be accessed in your code. This topic covers global, function, and block scope, then builds up to closures — a core JavaScript concept used constantly in real code.

## Topics Covered

### 1. Global Scope

Variables declared outside any function or block are accessible everywhere in the file, including inside functions.

### 2. Function Scope

Variables declared inside a function only exist inside that function — they cannot be accessed from outside it.

### 3. Block Scope

Variables declared with `let`/`const` inside a block (`{}`, such as an `if` statement) only exist inside that block.

### 4. Nested Scope

A function defined inside another function can access the outer function's variables — this is called lexical scoping.

### 5. What is a Closure?

A closure happens when an inner function "remembers" the variables from its outer function, even after the outer function has already finished running. This is what allows a returned function to keep private, persistent data.

### 6. Independent Closures

Each time a function that creates a closure is called, a completely separate, independent set of variables is created — they do not share memory with each other.

### 7. Practical Closure Example

A function that returns another function, where the returned function still remembers a value (like a name) passed to the outer function.

## Files

- `index.html` — minimal HTML file that loads `script.js`
- `script.js` — demonstrates global/function/block scope and closures with a counter example

## How to Run

Open `index.html` in a browser and check the DevTools Console (F12) to see the output.

## Key Takeaways

- Variables declared with `let`/`const` are limited to the block they're declared in.
- A closure lets a function "remember" values from where it was created, not from where it is called.
- Closures are the reason a counter function can keep its own private, growing value across multiple calls.
