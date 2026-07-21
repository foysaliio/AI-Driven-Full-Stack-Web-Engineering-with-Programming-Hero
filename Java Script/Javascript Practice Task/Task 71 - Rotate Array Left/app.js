const randomNumber = [1, 2, 3, 4, 5];
console.log(randomNumber);

const firstNumber = randomNumber.shift();

randomNumber.push(firstNumber);

console.log(randomNumber);