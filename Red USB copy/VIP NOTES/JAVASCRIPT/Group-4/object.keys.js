let prices = {
  banana: 1,
  orange: 2,
  meat: 4
};

let doublePrices = Object.fromEntries(
  // convert to array, map, and then fromEntries gives back the object
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

alert(doublePrices.meat); // 8

//
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};

function sumSalaries(obj) {
  let sum = 0;
  let arr = obj.values();
  for (let i of arr) {
    sum += i;
  }
  return sum;
}
alert(sumSalaries(salaries)); // 650

//
let user = {
  name: "John",
  age: 30
};

function count(obj) {
  return Object.keys(obj).length;
}
alert(count(user)); // 2
