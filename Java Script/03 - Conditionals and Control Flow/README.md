# 03 - Conditionals and Control Flow

## Overview

This topic covers how JavaScript makes decisions and repeats actions — the backbone of all program logic. It includes conditional branching, loops, and the professional patterns used to keep control flow readable.

## Topics Covered

### 1. if / else if / else

Standard branching logic evaluated top to bottom; the first truthy condition's block executes.

### 2. Guard Clauses

Returning early for invalid or edge-case conditions instead of nesting the "happy path" inside multiple `if` blocks. This is the preferred professional pattern for readability.

### 3. switch Statement

An alternative to long `if/else if` chains when comparing one value against multiple fixed cases. Uses strict comparison (`===`) internally. Cases without a `break` or `return` fall through to the next case — sometimes intentional (grouping cases), sometimes a bug source.

### 4. for Loop

The classic counter-based loop: `for (initialization; condition; increment)`. Best when the number of iterations is known or index-based access is needed.

### 5. while Loop

Repeats as long as a condition is true. Best when the number of iterations is unknown in advance.

### 6. do...while Loop

Same as `while`, but the body always executes at least once before the condition is checked.

### 7. for...of

Iterates over the **values** of an iterable (arrays, strings, Maps, Sets). The standard choice for looping through array elements.

### 8. for...in

Iterates over the **enumerable keys** of an object. Not recommended for arrays (use `for...of` or array methods instead).

### 9. break and continue

- `break` exits a loop entirely.
- `continue` skips the current iteration and moves to the next.

### 10. Labeled Statements

A rarely-used feature that lets `break`/`continue` target a specific outer loop when working with nested loops.

## Files

- `index.html` — minimal HTML file that loads `script.js`
- `script.js` — demonstrates conditionals, switch, all loop types, and break/continue/labels

## How to Run

Open `index.html` in a browser and check the DevTools Console (F12) to see the output.

## Key Takeaways

- Prefer guard clauses over deeply nested `if` blocks — this is a hallmark of professional code.
- Use `for...of` for arrays and `for...in` for objects — mixing them up is a common beginner mistake.
- Remember `switch` fall-through behavior; always include `break` or `return` unless fall-through is intentional.
