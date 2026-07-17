"use strict";

// ----- creating objects -----
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
console.log(person["lastName"]);     // bracket notation, required for dynamic keys
const key = "age";
console.log(person[key]);            // dynamic key access

// ----- adding, updating, deleting properties -----
person.email = "ahnaf@example.com"; // add
person.age = 23;                     // update
delete person.isStudent;             // delete
console.log(person);

// ----- methods and `this` -----
console.log(person.greet()); // "this" refers to the object calling the method

// arrow functions do NOT bind their own `this` - avoid them as object methods
const brokenExample = {
  name: "Test",
  greetArrow: () => `Hi, I am ${this.name}`, // `this` here is NOT brokenExample
};
console.log(brokenExample.greetArrow()); // "Hi, I am undefined"

// ----- checking property existence -----
console.log("firstName" in person);         // true
console.log(person.hasOwnProperty("age"));  // true
console.log(person.nonExistent === undefined); // true

// ----- Object.keys / values / entries -----
console.log(Object.keys(person));    // array of keys
console.log(Object.values(person));  // array of values
console.log(Object.entries(person)); // array of [key, value] pairs

for (const [propKey, propValue] of Object.entries(person)) {
  console.log(`${propKey} -> ${propValue}`);
}

// ----- object destructuring -----
const { firstName, lastName, age: userAge } = person; // renaming with alias
console.log(firstName, lastName, userAge);

const { country = "Bangladesh" } = person; // default value for missing property
console.log(country);

// ----- nested objects -----
const company = {
  name: "TechCorp",
  address: {
    city: "Dhaka",
    zip: "1230",
  },
};
console.log(company.address.city);
const { address: { city } } = company; // nested destructuring
console.log(city);

// ----- spread operator with objects -----
const baseConfig = { theme: "dark", fontSize: 14 };
const userConfig = { ...baseConfig, fontSize: 16 }; // shallow copy with override
console.log(userConfig);

// ----- Object.freeze / Object.assign -----
const frozenObj = Object.freeze({ locked: true });
frozenObj.locked = false; // silently fails in non-strict, throws in strict mode
console.log(frozenObj.locked); // still true

const merged = Object.assign({}, baseConfig, { fontSize: 18 });
console.log(merged);

// ----- shorthand property names -----
const price = 100;
const quantity = 3;
const order = { price, quantity }; // same as { price: price, quantity: quantity }
console.log(order);

// ----- computed property names -----
const propName = "score";
const dynamicObj = { [propName]: 95 };
console.log(dynamicObj);
