//************************* */ a group of key-value pair grouped in one box

let user = {
  name: "John",
  age: 30
};

let key = prompt("What do you want to know about the user?", "name");

// access by variable
alert(user[key]); // John (if enter "name")

let obj = {
  name: "Boutros",
  age: 30,
  "$#": 35
};

let obj = {
  "&nbrn": "@",
  "&hte;": "&"
};

console.log(obj.name);
console.log(obj["age"]);
console.log(obj["$#"]); //35

obj["name"] = "Tony";
console.log(obj);

// I can change value with obj.name = "Tony"

// the name of properties inside an object should follow the variable nameing guide lines so i can use a string to use any name or special character

// VIP VIP VIP If there is no property it will print undefined, it assumes that you will add it later
console.log(obj.city); // undefined

obj["city"] = "Cairo";
console.log(obj);

let obj1 = {
  person: {
    name: "Michael"
  }
};
console.log(obj1.person.city);

let obj2 = {
  person: "hello"
};

console.log(obj2.person.name);
console.log(obj2.city.name);

let obj3 = {
  person: {
    name: "Michael"
  }
};
console.log(obj3.person.city);
console.log(obj3.city.city);

let user = {
  name: "John",
  age: 30
};
let key = "name";
user.key; // undefined VIP VIP VIP VIP

let fruit = "apple";
let bag = {
  [fruit + "Computers"]: 5 // bag.appleComputers = 5
};

let obj = {
  test: undefined
};
alert(obj.test); // it's undefined, so - no such property?
alert("test" in obj); // true, the property does exist!

let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};
// take property name from the fruit variable
bag[fruit] = 5;

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert(this.name);
}
// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;
// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin["f"](); // Admin VIP VIP (dot or square brackets access the method – doesn't matter)

//************************* */// use delete to remove
delete obj.name;

//************************* */// methods in an object

let obj = {
  walk: function() {
    console.log("Walked");
  }
};

//#####
let obj = {
  walk() {
    console.log("walked");
  }
};
console.log(obj.walk());

//#####
let obj = {
  name: "Boutros",
  walk: () => {
    console.log(this.name);
  }
};
console.log(obj.walk());

//#####
let obj = {
  name: "Boutros",
  walk: function() {
    setTimeout(function() {
      console.log(this.name);
    }, 0);
  }
};
console.log(obj.walk());

//#####
let obj = {
  name: "Boutros",
  walk() {
    let that = this;
    setTimeout(function() {
      let name = "Michael";
      console.log(name);
      console.log(that.name);
    }, 0);
  }
};
console.log(obj.walk());

///########
let obj = {
  name: "Boutros",
  getInfo() {
    let printInfo = () => {
      console.log(this.name);
    };
    printInfo();
  }
};
console.log(obj.getInfo());

// ******************************************************************
// interview quetion about which prints first, not found
function Person(name) {
  this.name = name;
  // this.getName = function(){
  //   console.log(this.name)
  // }
}

// Person.prototype.getName = function(){
//   console.log("Michael")
// }

let me = new Person("Boutros");

me.getName();
// **************************************************************************

//************************* */Looping in object
let obj = {
  name: "Boutros",
  age: 30
};

for (let i in obj) console.log(`${i} ${obj[i]}`);

this.setState({
  [e.target.name]: e.target.value
});

console.log("name" in obj); // true

//************************* */factory and constructor
function Person(name, age) {
  return {
    name,
    age
  };
}
let me = Person("Boutros", 30);
console.log(me);

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let me = new Person("Boutros", 40);

// **************************** by value by reference

let x = 5;
let y = x;

let x = {
  name: "boutros"
};
let y = x;
y.name = "Michael";
console.log(x);
// primitive types: uses by value
Number - String - Boolean;
// Object uses by reference
Object;

// *******************************OOP CHAIN

// when i create an object using the curly braces the JS by default add the property called (__proto__) to it which is equal to an object that contains a bunch of methods like hasOwnProperty

let obj = {
  name: "Boutros"
};
obj.toString(); // [object object] returned by object to string
// is not in the object itself but in the __proto__

let obj = {
  name: "Boutros",
  toString() {
    console.log("Boutros");
  }
};
// so it will look inside my object if find the method so it won't go to prototype

// every constructon function has a property called prototype which become equal to the __proto__ of the objects created by this constructor functions

function Person(name) {
  this.name = name;
}
let me = new Person("Boutros");
Person.prototype === me.__proto__; // true

// ********************prototype chaining
let parent = {
  name: "Parent",
  age: 30
};
let child = {
  name: "child"
};
child.__proto__ = parent;
console.log(child.age);

// **************************** functional and OOP
// imperative
// how to get the result (OOP)
// where i put all my data and function in one place called Object, data is property and function is a method

// javascript is prototype-based OOP

// so we have two types of OOP: prototype-base and class based

//declaritve
// what is the result (FUNCTIONL)

// lesson #34 min:9
// why using this

// The prototype is a little bit “magical”. When we want to read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, such thing is called “prototypal inheritance”. Many cool language features and programming techniques are based on it.

//
let animal = {
  eats: true
};
let rabbit = {
  jumps: true,
  __proto__: animal
};
// Object.keys only return own keys
alert(Object.keys(rabbit)); // jumps
// for..in loops over both own and inherited keys
for (let prop in rabbit) alert(prop); // jumps, then eats

let animal = {
  eats: true
};
let rabbit = {
  jumps: true,
  __proto__: animal
};
for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);
  if (isOwn) {
    alert(`Our: ${prop}`); // Our: jumps
  } else {
    alert(`Inherited: ${prop}`); // Inherited: eats
  }
}

let arr = [1, 2, 3];
// it inherits from Array.prototype?
alert(arr.__proto__ === Array.prototype); // true
// then from Object.prototype?
alert(arr.__proto__.__proto__ === Object.prototype); // true
// and null on the top.
alert(arr.__proto__.__proto__.__proto__); // null

// ******************************SUMMARRY****************************************
// 1
// In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. That object is called “a prototype”:

let obj = {
  name: "b"
};

{
  name: "b";
}
name: "b";
__proto__: Object;

// 2
// when using new Constructor the [[prototype]] of the created object is set to the
// prototype of the constructor function
function Person(name) {
  this.name = name;
}
let me = new Person("Boutros");
Person.prototype = me.__proto__;

// 3 chaining
let animal = {
  eats: true
};
let rabbit = {
  jumps: true,
  __proto__: animal
};
rabbit.eats; // true

// 4 this context
animal.isSleeping = function() {
  this.asleep = true;
};
rabbit.isSleeping();
rabbit.asleep; // true
animal.asleep; // undefined

// 4 constructor function and extension
function Person(name) {
  this.name = name;
  this.getInfo = function() {
    return this.name;
  };
}
let me = new Person("Boutros");

function Student(name, age) {
  Person.call(this, name);
  this.age = age;
}
// get what on the prototype
Student.prototype = Object.create(Person.prototype);

// 5 classes
class Person {
  constructor(name) {
    this.name = name;
  }
  getInfo() {
    return this.name;
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  getAge() {
    return this.age;
  }
}
