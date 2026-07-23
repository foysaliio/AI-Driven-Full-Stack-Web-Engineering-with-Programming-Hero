const firstNumbers = [23, 45, 43, 13, 5, 83, 59];
const secondNumbers = [9, 29, 33, 98, 3, 23, 5];
const thirdNumbers = [32, 48, 94, 184, 73, 82, 14];

function findLargest(array) {
  let largestNumber = array[0];

  for (const number of array) {
    if (largestNumber < number) {
      largestNumber = number;
    }
  }
  return largestNumber;
}

const result1 = findLargest(firstNumbers);
const result2 = findLargest(secondNumbers);
const result3 = findLargest(thirdNumbers);

console.log(result1);
console.log(result2);
console.log(result3);
