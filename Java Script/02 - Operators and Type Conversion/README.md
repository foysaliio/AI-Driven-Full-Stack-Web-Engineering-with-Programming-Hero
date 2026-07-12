# 02 - Operators and Type Conversion

## Overview

This topic covers JavaScript's operators and the two forms of type conversion — implicit (coercion) and explicit — which are essential to avoid subtle bugs in real-world code.

## Topics Covered

### 1. Arithmetic Operators

`+`, `-`, `*`, `/`, `%` (remainder), `**` (exponentiation).

### 2. Assignment Operators

Shorthand operators like `+=`, `-=`, `*=`, `/=` that combine an operation with assignment.

### 3. Comparison: `==` vs `===`

- `==` (loose equality) converts operand types before comparing, which can produce surprising results (`5 == "5"` is `true`).
- `===` (strict equality) compares both value and type with no conversion.
- **Professional standard:** always use `===` and `!==` unless there is a deliberate, documented reason to use loose equality.

### 4. Logical Operators

- `&&` (AND), `||` (OR), `!` (NOT).
- **Short-circuit evaluation:** `||` returns the first truthy value (useful for default values), `&&` returns the first falsy value or the last value (useful for safe property access).

### 5. Ternary Operator

`condition ? valueIfTrue : valueIfFalse` — a concise alternative to simple if/else for expressions.

### 6. Implicit Type Conversion (Coercion)

JavaScript automatically converts types in certain operations (e.g., `+` with a string triggers string concatenation, `-` with a string triggers numeric conversion). Understanding these rules is critical to predicting output correctly.

### 7. Explicit Type Conversion

Using `Number()`, `String()`, and `Boolean()` to intentionally convert types instead of relying on implicit rules.

### 8. Falsy Values

Only 6 values are falsy in JavaScript: `false`, `0`, `""`, `null`, `undefined`, `NaN`. Everything else — including `"0"` and `[]` — is truthy.

### 9. Operator Precedence

The order in which operators are evaluated (e.g., multiplication before addition); parentheses can override the default order.

## Files

- `index.html` — minimal HTML file that loads `script.js`
- `script.js` — demonstrates operators, coercion, comparison, and precedence with runnable examples

## How to Run

Open `index.html` in a browser and check the DevTools Console (F12) to see the output.

## Key Takeaways

- Always use `===`/`!==` instead of `==`/`!=` in production code.
- Memorize the 6 falsy values — this prevents most conditional-logic bugs.
- Understand short-circuit evaluation (`||` and `&&`) — it is used constantly in real codebases for default values and safe access.
