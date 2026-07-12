# 01 - Introduction to JavaScript

## Overview

This topic covers the foundational concepts every JavaScript developer must understand before writing real code: how JavaScript runs, how variables behave, and how the type system works under the hood.

## Topics Covered

### 1. What is JavaScript?

JavaScript is a high-level, interpreted (JIT-compiled) programming language that runs primarily inside a JavaScript engine (e.g., V8 in Chrome/Node.js, SpiderMonkey in Firefox). It is single-threaded, event-driven, and dynamically typed.

### 2. Script Loading

The `<script src="script.js" defer></script>` tag is placed with the `defer` attribute so the script downloads in parallel with HTML parsing but executes only after the DOM is fully parsed — the professional standard over placing scripts at the bottom of `<body>`.

### 3. Strict Mode

`"use strict";` at the top of the file enables strict mode, which eliminates silent errors (e.g., assigning to undeclared variables), disallows some unsafe syntax, and makes debugging more predictable.

### 4. Variable Declarations: `var` vs `let` vs `const`

- `var` — function-scoped, hoisted and initialized as `undefined`, can be redeclared. Considered legacy.
- `let` — block-scoped, hoisted but NOT initialized (Temporal Dead Zone), can be reassigned but not redeclared in the same scope.
- `const` — block-scoped, must be initialized at declaration, cannot be reassigned (note: object/array contents are still mutable).

**Rule of thumb:** default to `const`, use `let` only when reassignment is needed, avoid `var` entirely in modern code.

### 5. Hoisting

JavaScript moves declarations to the top of their scope during compilation.

- `var` declarations are hoisted and initialized as `undefined`.
- `let`/`const` declarations are hoisted but remain in the **Temporal Dead Zone (TDZ)** until the line they're declared on executes — accessing them earlier throws a `ReferenceError`.

### 6. Primitive Data Types

JavaScript has 7 primitive types: `string`, `number`, `bigint`, `boolean`, `undefined`, `null`, `symbol`.

### 7. The `typeof` Operator

Used to inspect a value's type at runtime. Notable quirk: `typeof null` returns `"object"` — a bug preserved for backward compatibility since JavaScript's first release.

### 8. Reference Types

Objects and arrays are both of type `"object"`. Unlike primitives, they are stored and passed by reference, not by value.

### 9. Naming Conventions

- Variables and functions: `camelCase`
- Constants (fixed, unchanging values): `UPPER_SNAKE_CASE`
- Classes/Constructors: `PascalCase` (covered in later OOP topics)

## Files

- `index.html` — minimal HTML file that loads `script.js`
- `script.js` — demonstrates variable declarations, hoisting, data types, and the `typeof` operator

## How to Run

Open `index.html` in a browser and check the DevTools Console (F12) to see the output.

## Key Takeaways

- Always prefer `const` and `let` over `var`.
- Understand the Temporal Dead Zone to avoid confusing `ReferenceError`s.
- Know all 7 primitive types and how `typeof` behaves for each, including the `null` quirk.
