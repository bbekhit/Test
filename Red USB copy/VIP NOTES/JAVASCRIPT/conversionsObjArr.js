let obj = {
  name : 'boutros',
  age : 20,
}

Object.keys(obj) // ['name','age']
Object.values(obj) // ['boutros','20']
Object.entries(obj) // [['name','boutros],['age','20']]

// going back to object
Object.fromEnties(Object.entries(obj))

// changing an object and returning it
let prices = {
  banana: 1,
  orange: 2,
  meat: 4
};
let doublePrices = Object.fromEntries(
  // convert to array, map, and then fromEntries gives back the object
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

let salaries = {
  pete : 100,
  john : 200
}
for(let i in salaries){
  salaries[i] = salaries[i] * 2
}

// return array of names from array of objects
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names ); // John, Pete, Mary