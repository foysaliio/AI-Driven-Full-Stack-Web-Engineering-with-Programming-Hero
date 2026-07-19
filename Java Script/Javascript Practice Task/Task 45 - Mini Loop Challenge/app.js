for (let i = 1; i <= 100; i++) {
  if (i > 40) {
    break;
  }

  if (i % 5 === 0) {
    continue;
  }
  console.log(i);
}
