// destruction and spread works only on iterables
// rest used in destruction and function arguments ...args 

import { Server } from "https";


// spread operator makes a copy of array that don't affect original array
let arr = [1,2,3]
let copyArr = [...arr]
copyArr.push(4)
console.log(arr); // [1,2,3]
console.log(copyArr); // [1,2,3,4]

function print(){
  var x = 1;
  if(true){
    var x = 2;
    console.log(x);  //2
  }
  console.log(x); //2 
}

let test = () => "Hello"
let test = _ => "Hello" // if no parameters i can remove the brackets

// error only lives inside scope of if block
let phrase = "Hello";
if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
  sayHi()
}
sayHi();

// SUMMARY 
// - new Set(iterable) ===> results in iterable doesn't have indexes 
// - ...args is an array of the function parameters or arguments 
// - arguments is an arrayLike we can use arguments.length, arguments[0] -- not in arrowFunc
// - Array.from(iterable, arrayLike) --- [...only iterable]
// - ...rest in end of function and destruction
// - ...spread [...arr], {...obj}
// - destruction on any iterable 
// - {...obj} same as Object.assign({}, obj)
// Object.assign shallow clone first level not changing but nested is changing, deep cloning is completly different objects
// {...} any nested object will be changed vip vip

// 1
// isNaN(value) converts its argument to a number and then tests it for being NaN:
alert(isNaN(NaN)); // true
alert(isNaN("str")); // true

alert(NaN === NaN); // false

Object.is(NaN, NaN);
// uses ===

// isFinite(value) converts its argument to a number and returns true if it’s a regular number, not NaN/Infinity/-Infinity:
alert(isFinite("15")); // true
alert(isFinite("str")); // false, because a special value: NaN
alert(isFinite(Infinity)); // false, because a special value: Infinity

// 1`
let num = 255;
num.toString(); // '255'
num.toString(16); // ff
(123456)
  .toString(36)(
    // if on number not variable
    123
  )
  .toString(); // another way

  // VIP VIP 
  null
  undefined
  // has no methods so toString doesn't work on it only String works for everything

// 2
let val = 35;
val.toFixed(); // return a string

// 3
// prompt returns a string'

// 4
alert(+"100px"); // NaN // fails
parseInt("100px"); // 100 // doesn't fail

//5
(123456).toString(36); //

// 6
str[1000]; // undefined
str.chartAt(1000); // "" empty string

// 7
// numbers stored in binary form which is sequence of 1 & 0 so the 0.3 is an endless binary fraction .333 and .1 is .11111 but it works with numbers bivided by 2 well
// that's why it losses precision
// to fix it
let ans = 0.1 + 0.2;
(0.1 * 10 + 0.2 * 10) / 10;
ans.toFixed(2);

// 7`
let arr = [1, 2];
let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};
alert(arr.concat(arrayLike)); // 1,2,something,else

// Call obj[Symbol.toPrimitive](hint) – the method with the symbolic key Symbol.toPrimitive (system symbol), if such method exists,
// Otherwise if hint is "string"
// try obj.toString() and obj.valueOf(), whatever exists.
// Otherwise if hint is "number" or "default"
// try obj.valueOf() and obj.toString(), whatever exists.

// VIP VIP VIP VIP
// Symbolic properties do not participate in for..in loop and Object.keys() ==> yes in Object.assign
let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123,
};
for (let key in user) alert(key); // name, age (no symbols)
// the direct access by the symbol works
alert("Direct: " + user[id]);
// but it works with Object.assign()

// Symbols have two main use cases:

// “Hidden” object properties. If we want to add a property into an object that “belongs” to another script or a library, we can create a symbol and use it as a property key. A symbolic property does not appear in for..in, so it won’t be accidentally processed together with other properties. Also it won’t be accessed directly, because another script does not have our symbol. So the property will be protected from accidental use or overwrite.

// So we can “covertly” hide something into objects that we need, but others should not see, using symbolic properties.

// There are many system symbols used by JavaScript which are accessible as Symbol.*. We can use them to alter some built-in behaviors. For instance, later in the tutorial we’ll use Symbol.iterator for iterables, Symbol.toPrimitive to setup object-to-primitive conversion and so on.

// Iterables are objects that implement the Symbol.iterator method, as described above.

//
let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  },
};
// conversions demo:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500

// Constructor function
function User(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}

// 8
let arr = new Array(2);
//will create  [empty × 2] so don't use

let arr = [1, 2, 3, 4, 5];
arr.join(); // "1,2,3,4,5"
arr.join(""); // "12345"
arr.join(" "); // "1 2 3 4 5"
arr.join("; "); //"1; 2; 3; 4; 5"

let arr = ["I", "go", "home"];
delete arr[1]; // remove "go"
// now arr = ["I",  , "home"];
alert(arr.length); // 3
alert(arr[1]); // undefined

// VIP VIP VIP
const arr = [NaN];
alert(arr.indexOf(NaN)); // -1 (should be 0, but === equality doesn't work for NaN)
alert(arr.includes(NaN)); // true (correct)

alert(Array.isArray({})); // false
alert(Array.isArray([])); // true

let arr = [1, 2];
let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};
alert(arr.concat(arrayLike)); // 1,2,something,else

// Iterables are objects that implement the Symbol.iterator method, as described above.
// Array-likes are objects that have indexes and length, so they look like arrays.

// 8`
let fruits = [];
fruits[123] = "Apple";
alert(fruits.length); // 124

// 9
// don't use for..in loop with arrays

// 10 VIP VIP VIP
const arr = [NaN];
alert(arr.indexOf(NaN)); // -1 (should be 0, but === equality doesn't work for NaN)
alert(arr.includes(NaN)); // true (correct)

switch (x) {
} // compares using === too

// 11
var arr = [1, , 3];
arr.forEach(function (element) {
  console.log(element);
});
//Expected output: 1 3
console.log(arr.map((element) => element));
//Expected output: [1, undefined, 3];

// 11` defult values
// 10 -  // VIP VIP VIP VIP using object in a funtion as Smigla helper functions inf styled
function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
  // ...
}
// undefined where default values are fine(using the default values so we enter undefined)
showMenu("My Menu", undefined, undefined, ["Item1", "Item2"]);

// we pass object to function
let options = {
  title: "My menu",
  items: ["Item1", "Item2"],
};
// ...and it immediately expands it to variables
function showMenu({
  title = "Untitled",
  width = 200,
  height = 100,
  items = [],
}) {
  // title, items – taken from options,
  // width, height – defaults used
  alert(`${title} ${width} ${height}`); // My Menu 200 100
  alert(items); // Item1, Item2
}
showMenu(options);

export const setTransition = ({ // here we destruct the object and set default values
  property = "all",
  time = "0.3s",
  timing = "ease-in-out",
} = {}) => {
  return `transition:${property} ${time} ${timing}`;
};
setTransition({ time: ".5s", timing:"5s" })

// 12
typeof NaN; // number
typeof null; // object short in language

// 13
let obj = {
  city: undefined,
};
//if using obj.city => undefined because it already undefined so we use
"city" in obj; // to check for the property in object

// 14 DATE & TIME
getDate()
// Get the day of month, from 1 to 31, the name of the method does look a little bit strange.

getDay()
// Get the day of week, from 0 (Sunday) to 6 (Saturday). The first day is always Sunday, in some countries that’s not so, but can’t be changed. 

getMonth()
// Get the month, from 0 to 11. 

Date.now() 
new Date().getTime() //same as  

// YYYY-MM-DDTHH:mm:ss.sssZ
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
alert(ms); // 1327611110417  (timestamp)

// 16
Customer.prototype = Object.create(Person.prototype);

// 18
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  alert(this.name);
};
let rabbit = new Rabbit("Rabbit");
rabbit.sayHi(); // Rabbit
Rabbit.prototype.sayHi(); // undefined
Object.getPrototypeOf(rabbit).sayHi(); // undefined
rabbit.__proto__.sayHi(); // undefined

// 19
let dictionary = Object.create(null, {
  toString: {
    // define toString property
    value() {
      // the value is a function
      return Object.keys(this).join();
    },
  },
});
dictionary.apple = "Apple";
dictionary.__proto__ = "test";
// apple and __proto__ is in the loop
for (let key in dictionary) {
  alert(key); // "apple", then "__proto__"
}
// comma-separated list of properties by toString
alert(dictionary); // "apple,__proto__"

// 20
// when using (grouping) the return is an array with the exact match in the first item like
// vip vip vip witout the g flag  but matchall works with g flag
let dateRegexp = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
let str = "2019-04-30";
let groups = str.match(dateRegexp);
// ["2019-04-30", "2019", "04", "30", index: 0, input: "2019-04-30", groups: undefined]

// 21
alert(Boolean("0")); // true
alert(Boolean(" ")); // spaces, also true (any non-empty string is true)
undefined; //is NaN as a number, not 0.

// 22 statements are separated with a semicolon
alert("Hello");
alert("World");
alert("There will be an error")[(1, 2)].forEach(alert); // error JS doesn't assume a semicolon after [...]

// 23
// in browser use shift+enter after typing 'use strict'
function test() {
  x = 100;
  return x; // no error
}
function test() {
  "use strict";
  xy = 100;
  return xy; // error
}

// 24
// hyphen not allowed in variable name nor reserved keywords nor startswith number
// let new-user ='Boutros' // error
// let let = 'Boutros' // error reserved word

// 1-The name must contain only letters, digits, or the symbols $ and _.
// 2-The first character must not be a digit.

// 25
typeof NaN; // number
typeof Infinity; // number
typeof -Infinity; // number

// NaN is sticky. Any further operation on NaN returns NaN:
alert("not a number" / 2 + 5); // NaN
// So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result.

// 26
typeof Math; // "object"  (1)
typeof null; // "object"  (2) not correct in language
typeof alert; // "function"  (3) it's an object but typeof operator treats it as func

typeof x;
//or
typeof (x);

// 27 VIP
alert(`hello ${"name"}`); // hello name
let x = ` hello 'samah' miss you`;

// 28 type conversion
String; // usually to primitive types

Number; // same as + // use when doing math
// undefined	NaN
// null	0
// true / false	1 / 0
// string	The string is read “as is”, whitespaces from both sides are ignored. An empty string becomes 0. An error gives NaN.

Boolean; // same as !! // use if when using logical operator && || !
// 0, null, undefined, NaN, ""	false
// any other value

" \t \n" - 2; // -2
// Space characters, are trimmed off string start and end when a string is converted to a number. Here the whole string consists of space characters, such as \t, \n and a “regular” space between them. So, similarly to an empty string, it becomes 0.

// three cases:
// any addition toString
// compare == with string toString
// if empty changes to zero, if one number changes to this number
alert([] + 1); // "1"  [] changes to "" in the +
alert([1] + 1); // '11' any addition changes to string
alert([] - 1); // -1 [] changes to 0 in any other operator
alert([] > 4)[(1, 2)] == "1,2"; // false because changes to 0 // true it's converted to strin as in addition

// 28 + operator has no effect on numbers
// No effect on numbers
let x = 1;
alert(+x); // 1

let y = -2;
alert(+y); // -2

// Converts non-numbers
alert(+true); // 1
alert(+""); // 0

// 29 ++ --
let a = 1,
  b = 1;
let c = ++a; //  what we did is a = a + 1 so now value of a is 2 then assign c to a after increasing it
let d = b++; // ?

var age = 23;
var arr = ["John", age, (age += 10), age--, age - 1, undefined];
// **************
arr[2] = age += 10; // age = age + 10 then we assign it to arr[2]

// arr[2] = (age = age+10)
let c = 3 - (a = b + 1);

// vip vip vip vip
// The assignment operator "=" returns a value

// **************

console.log(arr); //["john",23,33,33,31,undefined]
arr.length = 2;
console.log(arr); //["john",23]
delete arr[3]; //line 6
console.log(arr.length); //2
delete arr[0];
console.log(arr); //[,23]
console.log(arr.length);
2;
arr[6] = "Sam"; //line 11

let i = 0;
while (i++ < 5) alert(i);

let i = 0;
while (++i < 5) alert(i);

// 30 string comparison is a dictionary comparison

alert("Bee" > "Be"); // true longer string is always greater

alert("Z" > "A"); // true
alert("Glow" > "Glee"); // true
alert("a" > "A"); // true
alert("ahlan" > "aHlan"); // true once find a one larger than other it stops

alert("2" > 1); // true, string '2' becomes a number 2
alert("01" == 1); // true, string '01' becomes a number 1

// 31
// i can put any evaluation in the if() but true returns and false not like
if ("0") {
  alert("Hello");
}

// 32 short circuit
let x;
true || (x = 1);
alert(x); // undefined, because (x = 1) not evaluated

function checkAge(age) {
  return age > 18 || confirm("Did parents allow you?");
}

let x = 1;
x > 0 && alert("Greater than zero!");

// 33
// We can pass arbitrary data to functions using parameters (also called function arguments) .

// 34
function sayHi() {
  // ...
}

let sayHi = function () {
  // ...
};
// semicolon after function expression

// 35
let age = prompt("What is your age?", 18);
// conditionally declare a function
if (age < 18) {
  function welcome() {
    alert("Hello!");
  }
} else {
  function welcome() {
    alert("Greetings!");
  }
}
// ...use it later
welcome(); // Error: welcome is not defined

let age = 16; // take 16 as an example
if (age < 18) {
  welcome(); // \   (runs)                        //  |
  function welcome() {
    //  |
    alert("Hello!"); //  |  Function Declaration is available
  } //  |  everywhere in the block where it's declared
  //  |
  welcome(); // /   (runs)
} else {
  function welcome() {
    alert("Greetings!");
  }
}
// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.
welcome(); // Error: welcome is not defined

let age = prompt("What is your age?", 18);
let welcome =
  age < 18
    ? function () {
        alert("Hello!");
      }
    : function () {
        alert("Greetings!");
      };
welcome(); // ok now

// 36 why not to use 'new'
alert(typeof 0); // "number"
alert(typeof new Number(0)); // "object"!

null;
undefined; //have no methods

// 37
// The base can vary from 2 to 36. By default it’s 10.
let num = 255;
alert(num.toString(16)); // ff
alert(num.toString(2)); // 11111111

alert((123456).toString(36)); // 2n9c vip vip vip

// 38 vip vip vip
alert(parseInt("a123")); // NaN, the first symbol stops the process
alert(parseInt("0xff", 16)); // 255

// 39
function randomInteger(min, max) { // 6,2
  // here rand is from min to (max+1)
  let rand = min + Math.random() * (max + 1 - min); 2 + //(1 ---> 5)
  return Math.floor(rand);
}
Math.floor(Math.random() * 10) + 1; // returns a random integer from 1 to 10

// 40
let str = `Hello`;
alert(str[1000]); // undefined
alert(str.charAt(1000)); // '' (an empty string)

// strings are immutable
let str = "Hi";
str[0] = "h"; // error
alert(str[0]); // doesn't work
// work around
let str = "Hi";
str = "h" + str[1]; // replace the string
alert(str); // hi

// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

// 41
// The ways to misuse an array:

// Add a non-numeric property like arr.test = 5.
// Make holes, like: add arr[0] and then arr[1000] (and nothing between them).
// Fill the array in the reverse order, like arr[1000], arr[999] and so on.

// 42
// So, the simplest way to clear the array is: arr.length = 0;
//for...in   //dont use with arrays

let arr = [1, 2, 3, 4, 5];
arr.length = 2; // truncate to 2 elements
alert(arr); // [1, 2]
arr.length = 5; // return length back
alert(arr[3]); // undefined: the values do not return

// 43 don't use new Array(2)
let arr = new Array(2); // will it create an array of [2] ?
alert(arr[0]); // undefined! no elements.
alert(arr.length); // length 2

// 44 vip vip vip
alert([] + 1); // "1"
alert([1] + 1); // "11"
alert([1, 2] + 1); // "1,21"

//45
let arr = [];
// Error: Reduce of empty array with no initial value
// if the initial value existed, reduce would return it for the empty arr.
arr.reduce((sum, current) => sum + current);

// 46
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = [];
users.forEach((item) => {
  return usersMapped.push({
    fullName: item.name + "" + item.surname,
    id: item.id,
  });
});

let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

// 47
let user = {
  name: "John",
  age: 30,
};
Object.keys(user) = ["name", "age"];
Object.values(user) = ["John", 30];
Object.entries(user) = [
  ["name", "John"],
  ["age", 30],
];

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};
let doublePrices = Object.fromEntries(
  // convert to array, map, and then fromEntries gives back the object
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);
alert(doublePrices.meat); // 8

// 49
let user = {};
[user.name, user.surname] = "Ilya Kantor".split(" ");
alert(user.name); // Ilya

//  ************************************ Json.stringify ****************************************** 
// 50
// The JSON (JavaScript Object Notation) is a general format to represent values and objects.

// ignore:
// Function properties (methods).
// Symbolic properties.
// Properties that store undefined.

// 14`
// a number in JSON is just a number
alert(JSON.stringify(1)); // 1
// a string in JSON is still a string, but double-quoted
alert(JSON.stringify("test")); // "test"
alert(JSON.stringify(true)); // true
alert(JSON.stringify([1, 2, 3])); // [1,2,3]

alert(JSON.stringify(user, null, 2)); // 2 is for indentation // null is for specifiying what items
/* for JSON.stringify(user, null, 4) the result would be more indented:
{
    "name": "John",
    "age": 25,
    "roles": {
        "isAdmin": false,
        "isEditor": true
    }
}
*/
//  ************************************ Json.stringify ****************************************** 


// 51 except __proto__ key names
let obj = {
  for: 1,
  let: 2,
  return: 3,
};
alert(obj.for + obj.let + obj.return); // 6

// 52
// The prototype is a little bit “magical”. When we want to read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, such thing is called “prototypal inheritance”.

[[Prototype]] = {}; // hidden property equals to null or object and can be accessed via
__proto__;

// 53
let animal = {
  eats: true,
};
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype = animal;
let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
alert(rabbit.eats); // true

Rabbit.prototype = rabbit.__proto__;
// here the constructor function(Rabbit) has a property(prototype) which is set to the __proto__ of the new object created using(new) keyword.
// if Rabbit.prototype = <new object> so the new created objects will be different

// 54
function Rabbit(name) {
  this.name = name;
}
let rabbit = new Rabbit("mido");

Rabbit.prototype.constructor;
// ƒ Rabbit(name){
//   this.name = name;
// }
rabbit.constructor;
// ƒ Rabbit(name){
//   this.name = name;
// }

function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

alert(Rabbit.prototype.constructor == Rabbit); // true
function Rabbit() {}
let rabbit = new Rabbit(); // inherits from {constructor: Rabbit}
alert(rabbit.constructor == Rabbit); // true (from prototype)

function Rabbit(name) {
  this.name = name;
  alert(name);
}
let rabbit = new Rabbit("White Rabbit");
let rabbit2 = new rabbit.constructor("Black Rabbit");

function Rabbit() {}
Rabbit.prototype = {
  jumps: true,
};
let rabbit = new Rabbit();
alert(rabbit.constructor === Rabbit); // false

// So, to keep the right "constructor" we can choose to add/remove properties to the default "prototype" instead of overwriting it as a whole:
function Rabbit() {}
// Not overwrite Rabbit.prototype totally
// just add to it
Rabbit.prototype.jumps = true;
// the default Rabbit.prototype.constructor is preserved

// 55
function Customer(name, lastName, membership) {
  Person.call(this, name, lastName);
  this.name = name;
  this.lastName = lastName;
  this.membership = membership;
}

Customer.prototype = Object.create(Person.prototype);

// 56 see 15 & 48
Object.keys(); // show on the real object only
//for..in shows all on the real object and prototype
// in class the for..in doesn't show the methods on the class but shows on prototype

// 57
// classes always in strict mode
// for..in doesn't list methods

//  ************************************ Spread Rest ... ****************************************** 
// Spread
// Array.from converts an iterable or arrayLike into an array
alert(Array.from(str)); // H,e,l,l,o
let arr = [...str];

//overwriting
let obj = {
  name: "Boutros",
};
let obj1 = {
  name: "Michael",
};
let res = {
  name: "Tony",
  ...obj1,
};
res.name; // Michael

//But there’s a subtle difference between Array.from(obj) and [...obj]:
Array.from //operates on both array-likes and iterables.
// The spread syntax works only with iterables.

/ 58
// Rest ...
// 1- used to collect the arguments in an array
function me(...args) {
  console.log(args);
}
me(1, 2, 3); // [1, 2, 3]

// 2- used to collect the destruction in and array
let arr = ["Boutro", "Bekhit", "Samir"];
let [item1, ...rest];
rest[1]; // Samir
let str = "Hello";

let obj = {
  name: "boutros",
  lastName: "Bekhit",
};
let { name, ...rest } = obj;
rest.lastName; // Bekhit

// arguments (arrayLike)
function showName() {
  alert( arguments.length );
  alert( arguments[0] );
  alert( arguments[1] );
  // it's iterable
  // for(let arg of arguments) alert(arg);
}
// shows: 2, Julius, Caesar
showName("Julius", "Caesar");
// shows: 1, Ilya, undefined (no second argument)
showName("Ilya");

// vip 
// As we remember, arrow functions don’t have their own this. Now we know they don’t have the special arguments object either.

//  ************************************ Spread Rest ... ****************************************** 

//  ************************************ Destruction ****************************************** 
// 58` destructions
// second element is not needed
let [firstName, , title] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];
alert(title); // Consul

let options = {
  title: "Menu"
};
let {width: w = 100, height: h = 200, title} = options;
alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200

// works for any iterables ------> VIP VIP VIP same as spread operator ...
let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);
//  ************************************ Destruction ****************************************** 


//  ************************************ Map_Set ****************************************** 
// Map & Set
let set = new Set(iterable) // number is not iterable

// syntax	  map.keys()	Object.keys(obj)
// Returns	iterable	  “real” Array

// SET
// 1- doesn't have indexes can't access set[1]
// 2- unique values
// 3- to switch let arr = [...set] or Array.from(set) ----> VIP VIP

// arrayLike has indexes and length
let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};

Array.from
// There’s a universal method Array.from that takes an iterable or array-like value and makes a “real” Array from it. Then we can call array methods on it.

// string is both iterables and arrayLike

// new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.

WeakSet 
// - had no size
// - has no .keys() .values() .entries
// - only objects as keys in WeakMap
let john = { name: "John" };
let weakMap = new WeakMap();
weakMap.set(john, "...");
john = null; // overwrite the reference // john is removed from memory!

let john = { name: "John" };
let map = new Map();
map.set(john, "...");
john = null; // overwrite the reference // john is stored inside the map,// we can get it by using map.keys()

//  ************************************ Map_Set ****************************************** 


//  ************************************ Garbage Collection ****************************************** 

// - GarbageCollection 
let user = {
  name: "John"
}; // user is a reference to the object created in memory
let admin = user;
user = null // still can reach it therough admin

//  ************************************ Garbage Collection ****************************************** 

//  ************************************ Var let const ****************************************** 

// 1- var variables have no block scope, they are visible minimum at the function level.
if (true) {
  var test = true; // use "var" instead of "let"
}
alert(test); // true, the variable lives after if
// 2- var declarations are processed at function start (script start for globals).

// let can't be 
// 1- reclared 
// 2- block-scope
// 3- ReferenceError if accessed before Declaration
// 4- doesn't create properties in window object 

// const 
// must be initialized with a value 
const arr = [];
arr = ['hello'] // error can't reassign


//  ************************************ Var let const ****************************************** 

//  ************************************ Functions ****************************************** 
- // a function in JavaScript is a value
- // functions is an Object(add/remove properties, pass by reference )
- // has a name property
- // has a length property
- // NFE, named function expression, see functions.js

new Function('a', 'b', 'return a + b'); // basic syntax
new Function('a,b', 'return a + b'); // comma-separated
new Function('a , b', 'return a + b'); // comma-separated with spaces

let sum = new Function('a', 'b', 'return a + b');
alert( sum(1, 2) ); // 3

- // Functions created with new Function, have [[Environment]] referencing the global Lexical Environment, not the outer one. Hence, they cannot use outer variables. But that’s actually good, because it insures us from errors. Passing parameters explicitly is a much better method architecturally and causes no problems with minifiers.

function say(name){ // name here is a parameter
  return
}
say("Boutrso") // name here is an argument

//  ************************************ Functions ****************************************** 


//  ************************************ OOP ****************************************** 
 function Phone(serial){
   this.serial = serial;
 }
 let phone1 = new Phone(345);
 phone1 instanceof Phone === true
 phone1.constructor === Phone

//  - each object has by default __proto__ which is equal to an Object or null and has properties as toString() and hasOwnProperty 
// every function has a property called PROTOTYPE

function Person(name){
  this.name = name;
  this.getName = function(){
    return "name comes from constructor function"
  }
}
Person.prototype.getName = function(){
  return 'name comes from prototype'
}
let me = new Person("Boutros")
me.getName = function(){
  return "name comes from created object"
}
me.getName() // "name comes from created object"
delete me.getName
me.getName() // 'name comes from prototype'

// chaining:
// i let the __proto__ points to another object and so on 
// makes inheritance
let parent = {
  name: "Parent"
}
let child = {
  age: 21
}
child.__proto__ = parent;
child.name // Parent

child.name = "Child"
parent.name // still "Parent" vip vip vip

// For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.
// Prototypal inheritance is a language feature that helps in that.

// In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. That object is called “a prototype”: 

// Please note that __proto__ is not the same as [[Prototype]]. It’s a getter/setter for it.

// VIP VIP 
// Symbolic properties do not participate in for..in loop and Object.keys() ==> yes in Object.assign
// for...in shows inherited and own
let animal = {
  eats: true
};
let rabbit = {
  jumps: true,
  __proto__: animal
};
for(let prop in rabbit) {
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

// VIP VIP VIP 
function Rabbit() {}
// default prototype
Rabbit.prototype = { constructor: Rabbit };
Rabbit.prototype.constructor == Rabbit

function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }
let rabbit = new Rabbit(); // inherits from {constructor: Rabbit}
alert(rabbit.constructor == Rabbit); // true (from prototype) will find it on __proto__

function Rabbit(name) {
  this.name = name;
  alert(name);
}
let rabbit = new Rabbit("White Rabbit");
let rabbit2 = new rabbit.constructor("Black Rabbit")

function Rabbit() {}
Rabbit.prototype = {
  jumps: true
};
let rabbit = new Rabbit();
alert(rabbit.constructor === Rabbit); // false

console.log(bar !== null && bar.constructor === Object); // as rabbit.constructor 
new String("This is a string") instanceof String; 

// VIP VIP VIP
let obj = {
  0: "Hello",
  1: "world!",
  length: 2,
};
obj.join = Array.prototype.join;
alert( obj.join(',') ); // Hello,world!

Object.create /////////////////////////////
let animal = {
  jumps: true
}
let rabbit = Object.create(animal, {
  name: {
    value: "rabbit"
  },
  age:{
    value: 13
  },
  getName:{
    value() {
      return this.name
    }
  }
})
console.log(rabbit);
Object.getPrototypeOf(rabbit)
Object.setPrototypeOf(rabbit, {})

// config
let user = {
  name: "John"
};
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
alert( JSON.stringify(descriptor, null, 2 ) );
/* property descriptor:
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/
// writable – if true, the value can be changed, otherwise it’s read-only.
// enumerable – if true, then listed in loops, otherwise not listed.
// configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.

Object.seal(obj)
// Forbids adding/removing of properties. Sets configurable: false for all existing properties.
Object.freeze(obj)
// Forbids adding/removing/changing of properties. Sets configurable: false, writable: false for all existing properties.

// getter setter
// It gives simpler syntax
// It allows equal syntax for properties and methods
// It can secure better data quality
// It is useful for doing things behind-the-scenes
// https://github.com/kaloraat/nodeapi/blob/master/models/user.js 

//  ************************************ OOP ****************************************** 

//  ************************************ Classes****************************************** 
constructor() //method is called automatically by new, so we can initialize the object there. 

class User {
  constructor(name){ 
    this.name = name; 
  }
  sayHi() { alert(this.name); }
}
// Usage:
let user = new User("John");
user.sayHi();
// proof: User is a function
alert(typeof User); // function

//1- Creates a function named User, that becomes the result of the class declaration. The function code is taken from the constructor method (assumed empty if we don’t write such method).
//2- Stores class methods, such as sayHi, in User.prototype. 
alert(User === User.prototype.constructor); // true
alert(User.prototype.sayHi); // alert(this.name);
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

// differences
// 1- can't be called like User(), only with new
// 2- classes in strict-mode
// 3- non-enurable, for...in doesn't list methods 

// binding
class Button {
  constructor(value) {
    this.value = value;
    this.click = this.click.bind(this);
  }
  click() {
    alert(this.value);
  }
}
let button = new Button("hello");
setTimeout(button.click, 1000); // hello

//bind
let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};
setTimeout(user.sayHi, 1000); // Hello, undefined!
// solution
setTimeout(function() {
  user.sayHi(); // Hello, John!
}, 1000);
// solution 2
setTimeout(() => user.sayHi(), 1000); // Hello, John!
// solution 3
let sayHi = user.sayHi.bind(user);
setTimeout(sayHi, 1000); // Hello, John!

// fields vip vip
class User {
  name = "John";

  sayHi() {
    alert(`Hello, ${this.name}!`);
  }
}
let user = new User()
user

// extending
// When a regular function is executed with new, it creates an empty object and assigns it to this.
// But when a derived constructor runs, it doesn’t do this. It expects the parent constructor to do this job. 
// So a derived constructor must call super in order to execute its parent (non-derived) constructor, otherwise the object for this won’t be created. And we’ll get an error. 
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  // ...
}

class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }
  // ...
}
// now fine
let rabbit = new Rabbit("White Rabbit", 10);
alert(rabbit.name); // White Rabbit
alert(rabbit.earLength); // 10
//  ************************************ Classes****************************************** 


// 63
globalThis === window;
// in node the enviroment is global 
// The global object holds variables that should be available everywhere.

// 64
// Here we covered their properties:

// name – the function name. Usually taken from the function definition, but if there’s none, JavaScript tries to guess it from the context (e.g. an assignment).
// length – the number of arguments in the function definition. Rest parameters are not counted.

let sayHi = function func(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func("Guest"); // use func to re-call itself
  }
};
sayHi(); // Hello, Guest
// But this won't work:
func(); // Error, func is not defined (not visible outside of the function)

// 65
// But new Function allows to turn any string into a function. For example, we can receive a new function from a server and then execute it:

// has no closure
function getFunc() {
  let value = "test";
  let func = new Function("alert(value)");
  return func;
}
getFunc()(); // error: value is not defined

// 66 setTimeout
function sayHi(phrase, who) {
  alert(phrase + ", " + who);
}
setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John

let timerId = setTimeout(() => alert("never happens"), 1000);
alert(timerId); // timer identifier
clearTimeout(timerId);
alert(timerId); // same identifier (doesn't become null after canceling)

// repeat with the interval of 2 seconds
let timerId = setInterval(() => alert("tick"), 2000);
// after 5 seconds stop
setTimeout(() => {
  clearInterval(timerId);
  alert("stop");
}, 5000);

// NESTED
/** instead of:
let timerId = setInterval(() => alert('tick'), 2000);
*/
let timerId = setTimeout(function tick() {
  alert("tick");
  timerId = setTimeout(tick, 2000); // (*)
}, 2000);

function rep() {
  let timerId = setTimeout(function run() {
    console.log("Hello");
    timerId = setTimeout(run, 1000);
  }, 1000);
  setTimeout(() => {
    clearTimeout(timerId);
    alert("stop");
  }, 10000);
}

// 67
// Method func.bind(context, ...args) returns a “bound variant” of function func that fixes the context this and first arguments if given.

let obj = {
  name: "Boutros",
  sayHi() {
    console.log(`hi ${this.name}`);
  },
};
setTimeout(obj.sayHi, 1000); // undefined
setTimeout(obj.sayHi.bind(obj), 1000);

let user = {
  name: "Boutros",
  last: "Bekhit",
};
function callMe(phrase, phrase1) {
  return `${phrase} ${phrase1}, ${this.name} ${this.last}`;
}
callMe(); // undefined
let test = callMe.bind(user);
test("hello", "myfriend"); // fixed

// The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

this.x = 9; // this refers to global "window" object here in the browser
var module = {
  x: 81,
  getX: function () {
    return this.x;
  },
};
module.getX(); // 81
var retrieveX = module.getX;
retrieveX();
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81

//  ************************************Closures****************************************** 
// A closure is a function that remembers its outer variables and can access them.
// in JavaScript, all functions are naturally closures (there is only one exclusion, to be covered in The "new Function" syntax).
function sum(a) {
  return function (b) {
    return a + b;
  };
}
sum(4)(5);

function inBetween(a, b) {
  return function(x,i,arr) {
    console.log(`${x} ${i} ${arr}`);
    return x >= a && x <= b;
  };
}
let arr = [1, 2, 3, 4, 5, 6, 7];
alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
function byField(field){
  return function(a,b){
    return b[field] - a[field]
  }
}
function byField(field) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}
console.log(users.sort(byField('name')));
console.log(users.sort(byField('age'))); 
//  ************************************Closures****************************************** 

//  ************************************ call apply binding ****************************************** 
//  check files 
let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};

setTimeout(user.sayHi, 1000); // Hello, undefined! lose context

// # - 1 solution 
setTimeout(function() {
  user.sayHi(); // Hello, John!
}, 1000);

// # - 2 solution 
setTimeout(function() {
  user.sayHi(); // Hello, John!
}, 1000);

// example
let name = "So"
let obj = {
  name : "bo",
  getName(){
    console.log(this.name);  
  }
}
obj.getName() // "bo"
let res = obj.getName;
res() // "so"

// example
let user = {
  firstName: "John",
  say(phrase) {
    alert(`${phrase}, ${this.firstName}!`);
  }
};
let say = user.say.bind(user);
say("Hello"); // Hello, John ("Hello" argument is passed to say)
say("Bye"); // Bye, John ("Bye" is passed to say)

// example
function f() {
  alert( this ); // ?
}
let user = {
  g: f.bind(null)
};
user.g();

// example 
function f() {
  alert(this.name);
}
f = f.bind( {name: "John"} ).bind( {name: "Ann" } );
f();

// example
function sayHi() {
  alert( this.name );
}
sayHi.test = 5;
let bound = sayHi.bind({
  name: "John"
});
alert( bound.test ); // what will be the output? why?

// example vip
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}
let user = {
  name: 'John',
  loginOk() {
    alert(`${this.name} logged in`);
  },
  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};
askPassword(user.loginOk, user.loginFail);

// example 
// The method setTimeout in-browser is a little special: it sets this=window for the function call (for Node.js, this becomes the timer object, but doesn’t really matter here). So for this.firstName it tries to get window.firstName, which does not exist. In other similar cases, usually this just becomes undefined.


// 59
function list() {
  return Array.prototype.slice.call(arguments);
}


//  ************************************ call apply binding ******************************************


//  ************************************ This ******************************************
// It has different values depending on where it is used:

// In a method, this refers to the owner object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), and apply() can refer this to any object. 
//  ************************************ This ****************************************** 

//  ************************************ arrow function ****************************************** 
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach(function(student) {
      // Error: Cannot read property 'title' of undefined
      alert(this.title + ': ' + student)
    });
  }
};
group.showList();
// The error occurs because forEach runs functions with this=undefined by default, so the attempt to access undefined.title is made.
// That doesn’t affect arrow functions, because they just don’t have this. 


function defer(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms)
  };
}
function sayHi(who) {
  alert('Hello, ' + who);
}
let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John"); // Hello, John after 2 seconds 

function defer(f, ms) {
  return function(...args) {
    let ctx = this;
    setTimeout(function() {
      return f.apply(ctx, args);
    }, ms);
  };
}

// Do not have this
// Do not have arguments
// Can’t be called with new
// They also don’t have super, but we didn’t study it yet. We will on the chapter Class inheritance
//  ************************************ arrow function ****************************************** 



//  ************************************ Promises ****************************************** 
// Promises	Callbacks
// Promises allow us to do things in the natural order. First, we run loadScript(script), and .then we write what to do with the result.	We must have a callback function at our disposal when calling loadScript(script, callback). In other words, we must know what to do with the result before loadScript is called.
// We can call .then on a Promise as many times as we want. Each time, we’re adding a new “fan”, a new subscribing function, to the “subscription list”. More about this in the next chapter: Promises chaining.	There can be only one callback.

// vip vip async error
new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert); // error is asycnronos so it will not be caught https://javascript.info/promise-error-handling

// example of return from promise
let str = "";
function promise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("new value of str"), 1000)
    })
}
promise()
.then((res) => {
    str = res;
    return str;
})
.then(res => console.log(str))

// example of return from promise
  let arr = ["bbekhit", "bradtraversy"];
  let urls = arr.map(name => fetch(`https://api.github.com/users/${name}`));
  let requests = Promise.all(urls)
                        .then(res => Promise.all(res.map(item => item.json())))
                        .then(res => res.map(item => alert(item.name)))

  fetch(`https://api.github.com/users/bbekhit`)
      .then(res => res.json())
      .then(res => alert(res.name))

  // example 
  const fetchGithubInfo = async (url) => {
    const res = await fetch(url)
    const githubInfo  = await res.json();
    return {
      name: githubInfo.name,
      bio: githubInfo.bio,
      repos: githubInfo.public_repos
    }
  }
  
  // Iterates all users and returns their Github info.
  const fetchUserInfo = async (names) => {
    const requests = names.map((name) => {
      const url = `https://api.github.com/users/${name}`
      return fetchGithubInfo(url) // Async function that fetches the user info.
    })
    return Promise.all(requests)
  }
  
  
  fetchUserInfo(['sindresorhus', 'yyx990803', 'gaearon'])
    .then(a => console.log(a))
//  ************************************ Promises ****************************************** 


//  ************************************ LocalStorage ****************************************** 
for(let i=0; i<localStorage.length; i++) {
  let key = localStorage.key(i);
  alert(`${key}: ${localStorage.getItem(key)}`);
} // has length and localStorage.key(i)

// localStorage : 1- survives restart
//                2- consistent
//                3- 

// sessionStorage: 1- The data survives page refresh, but not closing/opening the tab.

//  ************************************ LocalStorage ****************************************** 


// 68
// ****************************************************************
// A-format
regexp = new RegExp("pattern", "flags");
let mm = new RegExp("MM", "ig");

// The main difference between these two syntaxes is that slashes /.../ do not allow to insert expressions (like strings with ${...}). They are fully static.
let tag = prompt("What tag do you want to find?", "h2");
let regexp = new RegExp(`<${tag}>`); // same as /<h2>/ if answered "h2" in the prompt above
// ****************************************************************
// B-match-replace-test flags i,g,m,s
// if no matches return empty array
let matches = "JavaScript".match(/HTML/) || [];
if (!matches.length) {
  alert("No matches"); // now it works
}

// MATCH
// 1-with 'g' returns array of matches
// 2-without 'g' returns array with first match at arr[0],when using () it will addup
// 3-if no matches will return null

//REPLACE
// no flag g
alert("We will, we will".replace(/we/i, "I")); // I will, we will
// with flag g
alert("We will, we will".replace(/we/gi, "I")); // I will, I will

// TEST
let str = "I love JavaScript";
let regexp = /LOVE/i;
alert(regexp.test(str)); // true

// ****************************************************************
// C-character classes \d\w\s--\D\W\S
let str = "+7(903)-123-45-67";
alert(str.match(/\d/g).join("")); // 79031234567

let str = "+7(903)-123-45-67";
alert(str.replace(/\D/g, "")); // 79031234567

alert("A\nB".match(/A.B/)); // null (no match)
alert("A\nB".match(/A.B/s)); // A\nB (match!)
// ****************************************************************
// D-   m flag
let str = `1st place: Winnie
2nd place: Piglet
3rd place: Eeyore`;
alert(str.match(/^\d/g)); // 1

let str = `Winnie: 1
Piglet: 2
Eeyore: 3`;
alert(str.match(/\d$/gm)); // 1,2,3

let str = `Winnie: 1
Piglet: 2
Eeyore: 3`;
alert(str.match(/\d\n/gm)); // 1\n,2\n

// ****************************************************************
// E- \b
// There are three different positions that qualify as word boundaries:

// At string start, if the first string character is a word character \w.
// Between two characters in the string, where one is a word character \w and the other is not.
// At string end, if the last string character is a word character \w.

// case
let testMe = "catmania catmina thiscat thiscatmaina";
testMe.replace(/\bcat/g, "ct"); //"ctmania ctmina thiscat thiscatmaina"
testMe.replace(/\bcat\b/g, "ct"); //"catmania catmina thiscat thiscatmaina"

// case
testMe = "catmania catmina cat thiscat thiscatmaina";
testMe.replace(/\bcat\b/g, "ct"); //"catmania catmina ct thiscat thiscatmaina"

//case
testMe = "catmania catmina cat- thiscat thiscatmaina";
testMe.replace(/\bcat-\b/g, "ct"); //"catmania catmina cat- thiscat thiscatmaina"

// case
testMe = "catmania catmina _cat- thiscat thiscatmaina";
testMe.replace(/\b_cat-\b/g, "ct"); //"catmania catmina _cat- thiscat thiscatmaina"

// case
testMe = "catmania catmina _cat_ thiscat thiscatmaina";
testMe.replace(/\b_cat_\b/g, "ct"); //"catmania catmina ct thiscat thiscatmaina"

// ****************************************************************
// F- ESCAPING

// **To search for special characters [ \ ^ $ . | ? * + ( ) literally, we need to prepend them with a backslash \ (“escape them”).
//   **We also need to escape / if we’re inside /.../ (but not inside new RegExp).
//   **When passing a string new RegExp, we need to double backslashes \\, cause string quotes consume one of them.

let regexp = new RegExp("d.d"); // d.d
alert("Chapter 5.1".match(regexp)); // null
let regStr = "\\d\\.\\d";
alert(regStr); // \d\.\d (correct now)
let regexp = new RegExp(regStr);
alert("Chapter 5.1".match(regexp)); // 5.1

// ****************************************************************
// E- SETS and Ranges

//[^aeyo] //– any character except 'a', 'e', 'y' or 'o'.
//[^0-9] //– any character except a digit, the same as \D.
// [^\s] //– any non-space character, same as \S.

// find "V", then [o or i], then "la"
alert("Voila".match(/V[oi]la/)); // null, no matches

// FINAL  EDITION FINAL
// 1- symbols not converted to string automatically and doesn't appear in for..in
// 2- let arr = new Array(2) arr // [2 * undefined]
// 3- Array.from() takes any iterable or array-like
// 4-
function print({name, age = 40}){
  console.log(`my name is ${name} and I am ${age} years old`)
}
print({name:"Boutros"})
// 5-
str[0] // new undefined
str.charAt(0) // old empty str
// 6- JSON
// Function properties (methods).
// Symbolic properties.
// Properties that store undefined.


// client package.json "proxy":"http://localhost:8000/" // 132
// main package.json "dev": "export DEBUG='test-suite-generator,test-runner,config,common,queue-runner,baseline,server';nodemon $NODE_DEBUG_OPTION server.js",
// https://github.siri.apple.com/aabramets/siri-e2e 
// https://github.siri.apple.com/siri/signal
// https://e2e-siri-e2e-dev.usspk05.app.apple.com/ 
// https://istweb.apple.com/radar-agile 

// - calender
// https://programmingwithmosh.com/react/build-a-react-calendar-component-from-scratch/
// https://blog.flowandform.agency/create-a-custom-calendar-in-react-3df1bfd0b728
// https://dev.to/zhiyueyi/how-to-create-a-simple-react-calendar-with-styled-component-42n6

// - calculator
// https://medium.com/@gusya59/building-a-simple-calculator-with-react-react-hooks-and-grid-f6724baed5e
// https://code.sololearn.com/WG2rmADHXhdr/?ref=app#css 

// - scheduler
// https://www.cosmicjs.com/apps/appointment-scheduler/demo?ref=hackernoon.com
// https://medium.com/reactninja/building-appointment-scheduler-app-in-react-and-nodejs-f163c4eaab6b
// https://github.com/krissnawat/node-react-appoinment/tree/master/appointment-scheduler

// - ryan -- 3 
// Brad countup
// countdown react

// image slider
// https://medium.com/@ItsMeDannyZ/build-an-image-slider-with-react-es6-264368de68e4 

// POS with react
// https://blog.soshace.com/create-a-simple-pos-with-react-node-and-mongodb-0-initial-setup-frontend-and-backend/ 

// restaurant
// https://github.com/ibrahimBougaoua/restaurant 


// components
// https://learnersbucket.com/examples/react/list-of-different-components-in-react/
// https://levelup.gitconnected.com/building-a-reusable-component-system-with-react-js-and-styled-components-4e9f1018a31c
// https://blog.logrocket.com/building-reusable-ui-components-with-react-hooks/
// https://www.youtube.com/channel/UCio7gIFilw6wsgbTZAVOBrg

// interview
// https://thirumanikandan.com/posts/javascript-interview-questions
// https://github.com/sudheerj/reactjs-interview-questions/blob/master/README.md 


// rdar://63697389 
// rdar://60615480 
// mr95p01if-hyfs04203401.mr.if.apple.com 


// localhost:8000/api/signal/create-post/
// in front-end package.json we use proxy:'http://localhost:8000' so we don't repeat in actions
// in server.js we use app.use("api/user", users) so we don't repeat in usersRoute.js 