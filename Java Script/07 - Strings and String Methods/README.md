# 07 - Strings and String Methods

## Overview

Strings are used everywhere in JavaScript. This topic covers creating strings, template literals, and the most commonly used built-in string methods.

## Topics Covered

### 1. Creating Strings

Single quotes, double quotes, and template literals (backticks) — template literals allow variable interpolation with `${}`.

### 2. Multi-line Template Literals

Backtick strings can span multiple lines directly, without needing `\n`.

### 3. String Length

`.length` gives the number of characters in a string.

### 4. Accessing Characters

By index (`message[0]`) or with `.charAt(index)`.

### 5. Changing Case

`.toUpperCase()` and `.toLowerCase()`.

### 6. Trimming Whitespace

`.trim()` removes whitespace from both ends of a string.

### 7. Searching Inside a String

`.includes()`, `.indexOf()`, `.startsWith()`, `.endsWith()`.

### 8. Extracting Parts of a String

`.slice(start, end)` and `.substring(start, end)` both extract a portion of a string without modifying the original.

### 9. Replacing Text

`.replace(searchValue, newValue)` replaces the first match.

### 10. Splitting and Joining

`.split(separator)` turns a string into an array; `.join(separator)` turns an array back into a string.

### 11. Repeating and Concatenating

`.repeat(count)` repeats a string; `.concat()` joins strings together (though `+` or template literals are more commonly used).

## Files

- `index.html` — minimal HTML file that loads `script.js`
- `script.js` — demonstrates string creation and the core string methods

## How to Run

Open `index.html` in a browser and check the DevTools Console (F12) to see the output.

## Key Takeaways

- Strings in JavaScript are immutable — all string methods return a **new** string rather than modifying the original.
- Template literals (backticks) are the modern standard for combining text and variables.
- `.split()` and `.join()` are commonly used together to convert between strings and arrays.
