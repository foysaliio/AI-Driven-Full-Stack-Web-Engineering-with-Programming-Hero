"use strict";

// ----- selecting elements -----
const title = document.getElementById("title");
const description = document.querySelector(".description");
const listItems = document.querySelectorAll("li");

console.log(title);
console.log(description);
console.log(listItems);

// ----- reading and changing text -----
console.log(title.textContent);
title.textContent = "Hello, DOM Manipulation!";

// ----- changing HTML content -----
description.innerHTML = "This paragraph was <strong>changed</strong>.";

// ----- changing styles -----
title.style.color = "blue";
title.style.fontSize = "28px";

// ----- adding and removing classes -----
description.classList.add("highlight");
description.classList.remove("description");
console.log(description.classList.contains("highlight")); // true

// ----- looping through selected elements -----
listItems.forEach((item) => {
  console.log(item.textContent);
});

// ----- creating a new element -----
const newItem = document.createElement("li");
newItem.textContent = "Item 3";
const list = document.getElementById("list");
list.appendChild(newItem);

// ----- removing an element -----
const firstItem = list.querySelector("li");
// firstItem.remove(); // uncomment to remove the first list item

// ----- handling a click event -----
const button = document.getElementById("changeBtn");
button.addEventListener("click", function () {
  title.textContent = "Button was clicked!";
});
