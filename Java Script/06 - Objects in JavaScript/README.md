# 06 - Objects in JavaScript

## Overview

Objects are JavaScript's core structure for representing real-world entities with key-value pairs. This topic covers creating, accessing, and manipulating objects, along with basic destructuring and the spread operator.

## Topics Covered

### 1. Creating an Object

Object literal syntax `{ key: value }`, including method shorthand (`greet() {}` instead of `greet: function() {}`).

### 2. Accessing Properties

- Dot notation (`person.firstName`) — used when the key is known.
- Bracket notation (`person["lastName"]`) — an alternative way to access the same property.

### 3. Adding, Updating, Deleting

Properties can be added or updated by simple assignment; `delete person.key` removes a property entirely.

### 4. Calling a Method

Inside a regular method, `this` refers to the object the method was called on.

### 5. Checking Property Existence

- `"key" in object` — checks if a property exists.
- `object.hasOwnProperty("key")` — checks only the object's own properties.

### 6. Object.keys / values / entries

Convert an object into an array of its keys, values, or `[key, value]` pairs.

### 7. Looping Through an Object

`for...in` loops through all enumerable keys of an object.

### 8. Object Destructuring

Extract properties into variables in one line: `const { firstName, lastName } = person`.

### 9. Nested Objects

Objects can contain other objects, accessed with chained dot notation (`company.address.city`).

### 10. Spread Operator with Objects

`{ ...baseObject, override: value }` creates a copy of an object with selected properties overridden.

## Files

- `index.html` — minimal HTML file that loads `script.js`
- `script.js` — demonstrates object creation, property access, destructuring, and spread

## How to Run

Open `index.html` in a browser and check the DevTools Console (F12) to see the output.

## Key Takeaways

- Dot and bracket notation both access properties — bracket notation is needed when the key is stored in a variable.
- `for...in` is the standard way to loop through an object's properties.
- The spread operator (`{ ...obj }`) is a simple way to copy an object with one or more values changed.
