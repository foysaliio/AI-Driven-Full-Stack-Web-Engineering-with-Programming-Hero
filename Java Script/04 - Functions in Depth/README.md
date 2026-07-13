# 04 - Functions in Depth

## Overview

Functions are the core building blocks of JavaScript. This topic covers every major way to define and use them, along with the scoping and design patterns that separate beginner code from professional code.

## Topics Covered

### 1. Function Declaration

Defined with the `function` keyword and a name. Fully hoisted — callable before its definition in the code.

### 2. Function Expression

A function assigned to a variable. Not hoisted the same way as declarations — the variable exists (if `let`/`const`, in the TDZ) but the function itself isn't callable until the line executes.

### 3. Arrow Functions

A concise syntax (`(a, b) => a + b`) with implicit return for single expressions. Arrow functions do **not** have their own `this` or `arguments` — they inherit both from the enclosing scope, which matters heavily in object methods and callbacks (explored further in the OOP topic).

### 4. Default Parameters

`function greet(name = "Guest")` — supplies a fallback value when an argument is omitted or `undefined`.

### 5. Rest Parameters

`...numbers` collects any number of arguments into a real array, replacing the older `arguments` object for most use cases.

### 6. The `arguments` Object

An array-like object available inside regular functions (not arrow functions) containing all passed arguments.

### 7. Function Scope vs Block Scope

`var` is function-scoped (ignores `if`/`for` block boundaries), while `let`/`const` are block-scoped. This is one of the most common sources of bugs for developers coming from other languages.

### 8. Functions as First-Class Citizens

Functions can be assigned to variables, passed as arguments, and returned from other functions — this is what enables higher-order functions and callbacks.

### 9. Higher-Order Functions

Functions that take another function as an argument or return a function (e.g., a logging wrapper around another function).

### 10. Callback Functions

Passing a function into another function to be invoked later — the foundation for array methods (`map`, `filter`) and asynchronous JavaScript (covered later).

### 11. IIFE (Immediately Invoked Function Expression)

`(function () { ... })()` — a function that runs immediately upon definition, historically used to create private scope before `let`/`const`/modules existed.

### 12. Named Function Expressions for Recursion

Giving a function expression an internal name allows it to call itself recursively and produces clearer stack traces during debugging.

## Files

- `index.html` — minimal HTML file that loads `script.js`
- `script.js` — demonstrates all function types, parameters, scope, and higher-order function patterns

## How to Run

Open `index.html` in a browser and check the DevTools Console (F12) to see the output.

## Key Takeaways

- Prefer `const` + arrow functions for callbacks, and named `function` declarations for reusable, hoisting-dependent logic.
- Understand that arrow functions inherit `this` — this becomes critical once objects and classes are introduced.
- Rest parameters are the modern replacement for the `arguments` object.
