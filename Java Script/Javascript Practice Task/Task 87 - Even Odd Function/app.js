function isEven(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

const result1 = isEven(33);
const result2 = isEven(38);
const result3 = isEven(56);
const result4 = isEven(77);
const result5 = isEven(18);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
