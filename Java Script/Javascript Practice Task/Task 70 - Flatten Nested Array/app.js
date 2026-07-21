const nestedNumber = [1, [2, 3], [4, [5, 6]]];

const newNumberArr = [];

for (const nestedNum of nestedNumber) {
  if (Array.isArray(nestedNum)) {
    for (const nestedN of nestedNum) {
      if (Array.isArray(nestedN)) {
        for (const nesNum of nestedN) {
          newNumberArr.push(nesNum);
        }
      } else {
        newNumberArr.push(nestedN);
      }
    }
  } else {
    newNumberArr.push(nestedNum);
  }
}

console.log(newNumberArr);
