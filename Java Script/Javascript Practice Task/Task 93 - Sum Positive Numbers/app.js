const number = [-5, 10, 3, 0, -2, 0, 7];
const number2 = [-38, -8, -33, 73, 45, 0, -29];
const number3 = [-23, 0, 25, 83, 83, -92, 78];

function sumPositiveNumbers(array) {
  let sum = 0;
  for (const number of array) {
    if (number > 0) {
      sum += number;
    }
  }
  return sum;
}

const result = sumPositiveNumbers(number);
const result2 = sumPositiveNumbers(number2);
const result3 = sumPositiveNumbers(number3);

console.log(result);
console.log(result2);
console.log(result3);
