
// 1-// Reserved words are allowed as property names except "__proto__"
let obj = {
  for: 1,
  let: 2,
  return: 3
};

// We can also use multiword property names, but then they must be quoted:
let user = {
  name: "John",
  age: 30,
  "likes birds": true  // multiword property name must be quoted
};

alert( obj.for + obj.let + obj.return );  // 6

// 2-// bracket notation are used to access the values and also as a computed value inside a reqular object
let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};

let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};
// take property name from the fruit variable
bag[fruit] = 5;

// 3- // shorthand
function makeUser(name, age) {
  return {
    name, // same as name: name
    age   // same as age: age
    // ...
  };
}

// 4- interview
function greet (person) {
  if (person == { name: 'amy' }) {
    return 'hey amy'
  } else {
    return 'hey arnold'
  }
}
greet({ name: 'amy' })

// 5-
// these objects do the same

user = {
  sayHi: function() {
    alert("Hello");
  }
};

// method shorthand looks better, right?
user = {
  sayHi() { // same as "sayHi: function()"
    alert("Hello");
  }
};
