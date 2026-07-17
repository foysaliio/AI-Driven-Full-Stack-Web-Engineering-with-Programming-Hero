# 06 - Objects in JavaScript

## Overview

Objects are JavaScript's core structure for representing real-world entities with key-value pairs. This topic covers creating, accessing, and manipulating objects, along with `this` binding, destructuring, and the spread operator.

## Topics Covered

### 1. Creating Objects

Object literal syntax `{ key: value }`, including method shorthand (`greet() {}` instead of `greet: function() {}`).

### 2. Accessing Properties

- Dot notation (`person.firstName`) — used when the key is known and static.
- Bracket notation (`person["lastName"]`) — required when the key is dynamic (stored in a variable) or not a valid identifier.

### 3. Adding, Updating, Deleting

Properties can be added or updated by simple assignment; `delete person.key` removes a property entirely.

### 4. Methods and `this`

Inside a regular method, `this` refers to the object the method was called on. **Arrow functions do not have their own `this`** — they inherit it from the enclosing scope, which is why arrow functions should be avoided as direct object methods.

### 5. Checking Property Existence

- `"key" in object` — checks own and inherited properties.
- `object.hasOwnProperty("key")` — checks only the object's own properties.
- Comparing to `undefined` — simplest but can't distinguish "missing" from "explicitly set to undefined".

### 6. Object.keys / values / entries

Convert an object into an array of its keys, values, or `[key, value]` pairs — enabling iteration with `for...of` or array methods.

### 7. Object Destructuring

Extract properties into variables in one line, with support for renaming (`age: userAge`) and default values (`country = "Bangladesh"`).

### 8. Nested Objects and Nested Destructuring

Objects can contain other objects; destructuring can reach into nested structures directly.

### 9. Spread Operator with Objects

`{ ...baseObject, override: value }` creates a shallow copy with selected properties overridden — the standard pattern for immutable updates (heavily used in React state).

### 10. Object.freeze and Object.assign

- `Object.freeze()` prevents any modification to an object (shallow freeze only).
- `Object.assign(target, ...sources)` merges multiple objects into the target.

### 11. Shorthand and Computed Property Names

- `{ price, quantity }` is shorthand for `{ price: price, quantity: quantity }`.
- `{ [dynamicKey]: value }` lets a variable's value become the property name.

## Files

- `index.html` — minimal HTML file that loads `script.js`
- `script.js` — demonstrates object creation, `this` binding, destructuring, spread, and freezing

## How to Run

Open `index.html` in a browser and check the DevTools Console (F12) to see the output.

## Key Takeaways

- Never use arrow functions for object methods that need `this` to refer to the object.
- The spread operator (`{ ...obj }`) is the standard way to create shallow, immutable-style copies — critical for React state updates later.
- `Object.freeze()` only performs a shallow freeze — nested objects inside a frozen object remain mutable.
