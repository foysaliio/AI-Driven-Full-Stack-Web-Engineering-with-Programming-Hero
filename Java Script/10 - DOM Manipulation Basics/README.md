# 10 - DOM Manipulation Basics

## Overview

The DOM (Document Object Model) is how JavaScript interacts with HTML on a webpage. This topic covers selecting elements, changing their content and styles, handling events, and creating/removing elements.

## Topics Covered

### 1. Selecting Elements

- `document.getElementById("id")` — selects a single element by its ID.
- `document.querySelector(".class")` — selects the first matching element using a CSS selector.
- `document.querySelectorAll("tag")` — selects all matching elements as a NodeList.

### 2. Reading and Changing Text

`.textContent` reads or sets the plain text inside an element.

### 3. Changing HTML Content

`.innerHTML` reads or sets the HTML markup inside an element (allows inserting tags, unlike `textContent`).

### 4. Changing Styles

`.style.propertyName` sets inline CSS directly on an element (e.g., `.style.color = "blue"`).

### 5. Adding and Removing Classes

`.classList.add()`, `.classList.remove()`, and `.classList.contains()` manage an element's CSS classes without overwriting existing ones.

### 6. Looping Through Selected Elements

A `NodeList` (from `querySelectorAll`) supports `.forEach()` to run code on each matched element.

### 7. Creating a New Element

`document.createElement("tag")` creates a new element in memory, which is then added to the page with `.appendChild()`.

### 8. Removing an Element

`.remove()` removes an element from the page entirely.

### 9. Handling a Click Event

`.addEventListener("click", function)` runs a function whenever the element is clicked.

## Files

- `index.html` — contains a heading, paragraph, button, and list to practice on
- `script.js` — demonstrates selecting, modifying, creating, and removing DOM elements, plus a click event

## How to Run

Open `index.html` directly in a browser (not just the console) to see the actual page changes, and click the button to see the event handler in action.

## Key Takeaways

- Use `textContent` for plain text and `innerHTML` only when you intentionally need to insert HTML tags.
- `querySelectorAll` returns a NodeList, which supports `.forEach()` just like an array.
- `addEventListener` is the standard way to respond to user interaction like clicks.
