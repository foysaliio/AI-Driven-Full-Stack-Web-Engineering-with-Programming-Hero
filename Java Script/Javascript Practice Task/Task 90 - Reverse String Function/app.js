function reverseString(string) {
  let reverseStr = "";
  for (const char of string) {
    reverseStr = char + reverseStr;
  }
  return reverseStr;
}

const result1 = reverseString("JavaScript");
const result2 = reverseString("Foysal");
const result3 = reverseString("Parul");
const result4 = reverseString("Anamarzia");

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
