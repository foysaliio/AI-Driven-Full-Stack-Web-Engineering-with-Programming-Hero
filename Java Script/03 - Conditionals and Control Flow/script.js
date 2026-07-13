"use strict";

// ----- if / else if / else -----
function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else {
    return "F";
  }
}
console.log(getGrade(85)); // "B"

// ----- guard clause pattern (preferred over deep nesting) -----
function processOrder(order) {
  if (!order) return "No order provided";
  if (!order.isPaid) return "Order not paid";
  return "Processing order";
}
console.log(processOrder());
console.log(processOrder({}));
console.log(processOrder({ isPaid: false }));
console.log(processOrder({ isPaid: true }));

// ----- switch statement -----
function getDayName(day) {
  switch (day) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    default:
      return "Unknown day";
  }
}
console.log(getDayName(3)); // "Wednesday"

// switch uses strict comparison and falls through without break
function checkType(value) {
  switch (typeof value) {
    case "string":
    case "number":
      return "primitive scalar";
    case "object":
      return "object or null";
    default:
      return "other";
  }
}
console.log(checkType(42)); // "primitive scalar"

// ----- for loop -----
for (let i = 0; i < 5; i++) {
  console.log(`for loop iteration: ${i}`);
}

// ----- while loop -----
let count = 0;
while (count < 3) {
  console.log(`while loop count: ${count}`);
  count++;
}

// ----- do...while loop (runs body at least once) -----
let attempts = 0;
do {
  console.log(`do-while attempt: ${attempts}`);
  attempts++;
} while (attempts < 2);

// ----- for...of (iterates over values, used with arrays/strings/iterables) -----
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}

// ----- for...in (iterates over enumerable keys, used with objects) -----
const person = { name: "Ahnaf", role: "developer" };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// ----- break and continue -----
for (let i = 0; i < 10; i++) {
  if (i === 3) continue; // skip this iteration
  if (i === 6) break; // exit the loop entirely
  console.log(`loop value: ${i}`);
}