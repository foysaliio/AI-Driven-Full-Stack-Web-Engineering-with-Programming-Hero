let str = "hello";
let arr = ["h", "e", "l", "l", "o"];

// Length
console.log(str.length);
console.log(arr.length);

// Index Access
console.log(str[0]);
console.log(arr[0]);

// Array is mutable
arr.push("!");
console.log(arr);

// String is immutable
// str.push("!"); // ❌ Error: str.push is not a function
