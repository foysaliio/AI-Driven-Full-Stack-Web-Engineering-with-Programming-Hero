"use strict";

// ----- creating an object -----
const person = {
  firstName: "Ahnaf",
  lastName: "Rahman",
  age: 22,
  isStudent: true,
  greet() {
    return `Hi, I am ${this.firstName}`;
  },
};
console.log(person);

// ----- accessing properties -----
console.log(person.firstName);       // dot notation
console.log(person["lastName"]);     // bracket notation

// ----- adding, updating, deleting properties -----
person.email = "ahnaf@example.com"; // add a new property
person.age = 23;                     // update existing property
delete person.isStudent;             // remove a property
console.log(person);

// ----- calling a method -----
console.log(person.greet()); // "this" refers to the object calling the method

// ----- checking if a property exists -----
console.log("firstName" in person);          // true
console.log(person.hasOwnProperty("email")); // true

// ----- Object.keys / values / entries -----
console.log(Object.keys(person));    // array of all keys
console.log(Object.values(person));  // array of all values
console.log(Object.entries(person)); // array of [key, value] pairs

// ----- looping through an object -----
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// ----- object destructuring -----
const { firstName, lastName } = person;
console.log(firstName, lastName);

// ----- nested object -----
const company = {
  name: "TechCorp",
  address: {
    city: "Dhaka",
  },
};
console.log(company.address.city);

// ----- spread operator with objects -----
const baseConfig = { theme: "dark", fontSize: 14 };
const userConfig = { ...baseConfig, fontSize: 16 }; // copy with one value changed
console.log(userConfig);
