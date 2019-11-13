// 1-It’s just a shorter way to write:

// let [firstName, surname] = arr;
let firstName = arr[0];
let surname = arr[1];

// 2 - Unwanted elements of the array can also be thrown away via an extra comma:
// second element is not needed
let [firstName, , title] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic"
];

alert(title); // Consul

// 3 - Works with any iterable on the right-side
// …Actually, we can use it with any iterable, not only arrays:

let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);

// 4 - Assign to anything at the left-side
// We can use any “assignables” at the left side.
// For instance, an object property:

[user.name, user.surname] = "Ilya Kantor".split(" ");
alert(user.name); // Ilya

// 5 -
let user = {
  name: "John",
  age: 30
};
// loop over keys-and-values
for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`); // name:John, then age:30
}

// 6 - the rest ...
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
alert(name1); // Julius
alert(name2); // Caesar
// Note that type of `rest` is Array.
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2
// The value of rest is the array of the remaining array elements. We can use any other variable name in place of rest, just make sure it has three dots before it and goes last in the destructuring assignment.

// 7 - Default values
let [firstName, surname] = [];
alert(firstName); // undefined
alert(surname); // undefined

let [name = "Guest", surname = "Anonymous"] = ["Julius"];
alert(name);    // Julius (from array)
alert(surname); // Anonymous (default used)

// default can be functons
let [name = prompt('name?'), surname = prompt('surname?')] = ["Julius"];
alert(name);    // Julius (from array)
alert(surname); // whatever prompt gets

// 8 - Objects destructing
let options = {
  title: "Menu"
};
let {width: w = 100, height: h = 200, title} = options;
alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200

let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// destructuring assignment split in multiple lines for clarity
let {
  size: { // put size here
    width,
    height
  },
  items: [item1, item2], // assign items here
  title = "Menu" // not present in the object (default value is used)
} = options;
alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
alert(item1);  // Cake
alert(item2);  // Donut

const {
  match:{
    params:{
      id
    }
  }
} = props

// example - 1
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};

function high(obj) {
  let highest = 0;
  let person = null;
  for (let [name, salary] of Object.entries(obj)) {
    if (salary > highest) {
      highest = salary;
      person = name;
    }
  }
//   for(let i in salaries){
//     if(salaries[i] > maxSal){
//         maxSal = salaries[i]
//         person = i
//     }
// }
  return person;
}

// example - 2
let prices = {
  banana: 1,
  orange: 2,
  meat: 4
};
let doublePrices = Object.fromEntries(
  // convert to array, map, and then fromEntries gives back the object
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);
