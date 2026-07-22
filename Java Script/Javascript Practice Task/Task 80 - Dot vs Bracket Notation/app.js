const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
};

console.log(car);

console.log(car.brand);
console.log(car["model"]);

car["color"] = "blue";

console.log(car);

car.year = 2023;

console.log(car);
