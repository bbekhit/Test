// 1
// isNaN(value) converts its argument to a number and then tests it for being NaN:
alert(isNaN(NaN)); // true
alert(isNaN("str")); // true

alert(NaN === NaN); // false

// isFinite(value) converts its argument to a number and returns true if it’s a regular number, not NaN/Infinity/-Infinity:
alert(isFinite("15")); // true
alert(isFinite("str")); // false, because a special value: NaN
alert(isFinite(Infinity)); // false, because a special value: Infinity

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

// 8
let arr = new Array(2);
//will create  [empty × 2] so don't use

// 9
// don't use for..in loop with arrays

// 10
const arr = [NaN];
alert(arr.indexOf(NaN)); // -1 (should be 0, but === equality doesn't work for NaN)
alert(arr.includes(NaN)); // true (correct)

switch (x) {
} // compares using === too

// 11
var arr = [1, , 3];
arr.forEach(function(element) {
  console.log(element);
});
//Expected output: 1 3
console.log(arr.map(element => element));
//Expected output: [1, undefined, 3];

// 12
typeof NaN; // number
typeof null; // object short in language

// 13
let obj = {
  city: undefined
};
//if using obj.city => undefined because it already undefined so we use
"city" in obj; // to check for the property in object

// 14
JSON.stringify();
// JSON is data-only language-independent specification, so some JavaScript-specific object properties are skipped by JSON.stringify.
// Namely:
// Function properties (methods).
// Symbolic properties.
// Properties that store undefined.

// 15
let id = Symbol("id");
let animal = {
  eats: true
};
let rabbit = {
  jumps: true,
  [id]:3,
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
// The for..in loop iterates over both its own and its inherited properties. All other key/value-getting methods only operate on the object itself.

// Object.keys only return own keys
alert(Object.keys(rabbit)); // jumps

// 16
Customer.prototype = Object.create(Person.prototype);

// 17
let arr = [1, 2, 3];
// it inherits from Array.prototype?
alert(arr.__proto__ === Array.prototype); // true
// then from Object.prototype?
alert(arr.__proto__.__proto__ === Object.prototype); // true
// and null on the top.
alert(arr.__proto__.__proto__.__proto__); // null

// 18
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
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
    }
  }
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
let groups = str.match(dateRegexp)
// ["2019-04-30", "2019", "04", "30", index: 0, input: "2019-04-30", groups: undefined]

// 21
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)
undefined //is NaN as a number, not 0.

// 22 statements are separated with a semicolon
alert('Hello'); alert('World');
alert("There will be an error")
[1, 2].forEach(alert) // error JS doesn't assume a semicolon after [...] 

// 23
// in browser use shift+enter after typing 'use strict'
function test(){
  x = 100
  return x // no error
}
function test(){
  'use strict'
  xy = 100
  return xy // error
}

// 24
// hyphen not allowed in variable name nor reserved keywords nor startswith number
// let new-user ='Boutros' // error
// let let = 'Boutros' // error reserved word

// 1-The name must contain only letters, digits, or the symbols $ and _.
// 2-The first character must not be a digit.


// 25
typeof NaN // number
typeof Infinity // number
typeof -Infinity // number

// NaN is sticky. Any further operation on NaN returns NaN:
alert( "not a number" / 2 + 5 ); // NaN
// So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result.

// 26
typeof Math // "object"  (1)
typeof null // "object"  (2) not correct in language
typeof alert // "function"  (3) it's an object but typeof operator treats it as func

typeof x 
//or 
typeof(x)

// 27 VIP 
alert( `hello ${"name"}` ); // hello name
let x = ` hello 'samah' miss you`

// 28 type conversion 
String // usually to primitive types

Number // same as + // use when doing math
// undefined	NaN
// null	0
// true / false	1 / 0
// string	The string is read “as is”, whitespaces from both sides are ignored. An empty string becomes 0. An error gives NaN.

Boolean // same as !! // use if when using logical operator && || !
// 0, null, undefined, NaN, ""	false
// any other value

" \t \n" - 2 // -2
// Space characters, are trimmed off string start and end when a string is converted to a number. Here the whole string consists of space characters, such as \t, \n and a “regular” space between them. So, similarly to an empty string, it becomes 0.

// three cases:
// any addition toString
// compare == with string toString
// if empty changes to zero, if one number changes to this number
alert([] + 1) // "1"  [] changes to "" in the +
alert([1] + 1) // '11' any addition changes to string
alert([] - 1) // -1 [] changes to 0 in any other operator
alert([] > 4) // false because changes to 0
[1,2] == '1,2' // true it's converted to strin as in addition

// 28 + operator has no effect on numbers
// No effect on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0

// 29 ++ --
let a = 1, b = 1;
let c = ++a; //  what we did is a = a + 1 so now value of a is 2 then assign c to a after increasing it
let d = b++; // ?

var age=23;
var arr=["John",age,age+=10,age--,age-1,undefined ];
// **************
arr[2] = age += 10 // age = age + 10 then we assign it to arr[2] 

// arr[2] = (age = age+10)
let c = 3 - (a = b + 1);

// vip vip vip vip
// The assignment operator "=" returns a value

// **************

console.log(arr); //["john",23,33,33,31,undefined]
arr.length=2;
console.log(arr); //["john",23]
delete arr[3];//line 6
console.log(arr.length);//2
delete arr[0];
console.log(arr);//[,23]
console.log(arr.length);2
arr[6]="Sam";//line 11

let i = 0;
while (i++ < 5) alert( i );

let i = 0;
while (++i < 5) alert( i );

// 30 string comparison is a dictionary comparison

alert( 'Bee' > 'Be' ); // true longer string is always greater

alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert ('a' > 'A') // true
alert('ahlan' > 'aHlan') // true once find a one larger than other it stops


alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

// 31
// i can put any evaluation in the if() but true returns and false not like
if ("0") {
  alert( 'Hello' );
}

// 32 short circuit
let x;
true || (x = 1);
alert(x); // undefined, because (x = 1) not evaluated

function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}

let x = 1;
(x > 0) && alert( 'Greater than zero!' );

// 33
// We can pass arbitrary data to functions using parameters (also called function arguments) .

// 34
function sayHi() {
  // ...
}

let sayHi = function() {
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
  welcome();               // \   (runs)                        //  |
  function welcome() {     //  |
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
  welcome();               // /   (runs)
} else {
  function welcome() {
    alert("Greetings!");
  }
}
// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.
welcome(); // Error: welcome is not defined

let age = prompt("What is your age?", 18);
let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };
welcome(); // ok now

// 36 why not to use 'new'
alert( typeof 0 ); // "number"
alert( typeof new Number(0) ); // "object"!

null
undefined //have no methods

// 37 
// The base can vary from 2 to 36. By default it’s 10.
let num = 255;
alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111

alert( 123456..toString(36) ); // 2n9c vip vip vip

// 38 vip vip vip
alert( parseInt('a123') ); // NaN, the first symbol stops the process
alert( parseInt('0xff', 16) ); // 255

// 39
function randomInteger(min, max) {
  // here rand is from min to (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10

// 40
let str = `Hello`;
alert( str[1000] ); // undefined
alert( str.charAt(1000) ); // '' (an empty string)

// strings are immutable
let str = 'Hi';
str[0] = 'h'; // error
alert( str[0] ); // doesn't work
// work around
let str = 'Hi';
str = 'h' + str[1]; // replace the string
alert( str ); // hi

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
alert( arr ); // [1, 2]
arr.length = 5; // return length back
alert( arr[3] ); // undefined: the values do not return

// 43 don't use new Array(2)
let arr = new Array(2); // will it create an array of [2] ?
alert( arr[0] ); // undefined! no elements.
alert( arr.length ); // length 2

// 44 vip vip vip
alert( [] + 1 ); // "1"
alert( [1] + 1 ); // "11"
alert( [1,2] + 1 ); // "1,21"

//45
let arr = [];
// Error: Reduce of empty array with no initial value
// if the initial value existed, reduce would return it for the empty arr.
arr.reduce((sum, current) => sum + current);

// 46
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = [];
users.forEach(item => {
  return usersMapped.push({
    fullName:item.name + '' + item.surname,
    id:item.id
  })
})

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

// 47
let user = {
  name: "John",
  age: 30
};
Object.keys(user) = ["name", "age"]
Object.values(user) = ["John", 30]
Object.entries(user) = [ ["name","John"], ["age",30] ]

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

// 48 // vip vip
// Just like a for..in loop, these methods ignore properties that use Symbol(...) 
// but for...in shows hasOwnProperty and prototype properties see no #15

// 49
let user = {};
[user.name, user.surname] = "Ilya Kantor".split(' ');
alert(user.name); // Ilya

// 50
// The JSON (JavaScript Object Notation) is a general format to represent values and objects.

// ignore:
// Function properties (methods).
// Symbolic properties.
// Properties that store undefined.

// 51 except __proto__ key names
let obj = {
  for: 1,
  let: 2,
  return: 3
};
alert( obj.for + obj.let + obj.return );  // 6

// 52
// The prototype is a little bit “magical”. When we want to read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, such thing is called “prototypal inheritance”. 

[[Prototype]] = {} // hidden property equals to null or object and can be accessed via
__proto__

// 53
let animal = {
  eats: true
};
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype = animal;
let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
alert( rabbit.eats ); // true

Rabbit.prototype = rabbit.__proto__
// here the constructor function(Rabbit) has a property(prototype) which is set to the __proto__ of the new object created using(new) keyword.
// if Rabbit.prototype = <new object> so the new created objects will be different 

// 54
function Rabbit(name){
  this.name = name;
}
let rabbit = new Rabbit("mido")

Rabbit.prototype.constructor
// ƒ Rabbit(name){
//   this.name = name;
// }
rabbit.constructor
// ƒ Rabbit(name){
//   this.name = name;
// }

function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

alert( Rabbit.prototype.constructor == Rabbit ); // true
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
  jumps: true
};
let rabbit = new Rabbit();
alert(rabbit.constructor === Rabbit); // false

// So, to keep the right "constructor" we can choose to add/remove properties to the default "prototype" instead of overwriting it as a whole:
function Rabbit() {}
// Not overwrite Rabbit.prototype totally
// just add to it
Rabbit.prototype.jumps = true
// the default Rabbit.prototype.constructor is preserved

// 55
function Customer(name, lastName, membership) {
  Person.call(this, name, lastName)
  this.name = name;
  this.lastName = lastName;
  this.membership = membership;
}

Customer.prototype = Object.create(Person.prototype)

// 56 see 15 & 48
Object.keys() // show on the real object only
//for..in shows all on the real object and prototype
// in class the for..in doesn't show the methods on the class but shows on prototype

// 57
     // classes always in strict mode
     // for..in doesn't list methods

// 58
// Rest ...
// 1- used to collect the arguments in an array
function me(...args){
  console.log(args)
}
me(1,2,3) // [1, 2, 3]

// 2- used to collect the destruction in and array
let arr = ["Boutro", "Bekhit", "Samir"]
let [item1, ...rest]
rest[1] // Samir
let str = "Hello";

let obj = {
  name:"boutros",
  lastName :"Bekhit"
}
let { name, ...rest} = obj
rest.lastName // Bekhit

// Spread
// Array.from converts an iterable into an array
alert( Array.from(str) ); // H,e,l,l,o
let arr = [...str]

//overwriting
let obj = {
  name:"Boutros"
}
let obj1 = {
  name:"Michael"
}
let res = {
  name:"Tony",
  ...obj1
}
res.name // Michael

// 59
function list() {
  return Array.prototype.slice.call(arguments);
}

// 60
console.log((bar !== null) && (bar.constructor === Object));

// 61
// There are two main differences of var compared to let/const:

// 1- var variables have no block scope, they are visible minimum at the function level.
if (true) {
  var test = true; // use "var" instead of "let"
}
alert(test); // true, the variable lives after if
// 2- var declarations are processed at function start (script start for globals).

// 62
// A closure is a function that remembers its outer variables and can access them.
// in JavaScript, all functions are naturally closures (there is only one exclusion, to be covered in The "new Function" syntax).
function sum(a){
  return function(b){
    return a + b
  }
}
sum(4)(5)

// 63
globalThis === window

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
  let func = new Function('alert(value)');
  return func;
}
getFunc()(); // error: value is not defined

// 66 setTimeout
function sayHi(phrase, who) {
  alert( phrase + ', ' + who );
}
setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John

let timerId = setTimeout(() => alert("never happens"), 1000);
alert(timerId); // timer identifier
clearTimeout(timerId);
alert(timerId); // same identifier (doesn't become null after canceling)

// repeat with the interval of 2 seconds
let timerId = setInterval(() => alert('tick'), 2000);
// after 5 seconds stop
setTimeout(() => { 
  clearInterval(timerId); 
  alert('stop'); 
}, 5000);

// NESTED
/** instead of:
let timerId = setInterval(() => alert('tick'), 2000);
*/
let timerId = setTimeout(function tick() {
  alert('tick');
  timerId = setTimeout(tick, 2000); // (*)
}, 2000);

function rep(){
  let timerId = setTimeout(function run(){
    console.log("Hello")
    timerId = setTimeout(run, 1000)
  }, 1000)
  setTimeout(() => {clearTimeout(timerId); alert('stop'); },10000)
}

// 67
// Method func.bind(context, ...args) returns a “bound variant” of function func that fixes the context this and first arguments if given.

let obj = {
  name:"Boutros",
  sayHi(){
    console.log(`hi ${this.name}`)
  }
}
setTimeout(obj.sayHi,1000) // undefined
setTimeout(obj.sayHi.bind(obj),1000)

let user = {
  name:"Boutros",
  last:"Bekhit"
}
function callMe(phrase,phrase1){
  return `${phrase} ${phrase1}, ${this.name} ${this.last}`
}
callMe() // undefined
let test = callMe.bind(user)
test("hello","myfriend") // fixed 

// The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

this.x = 9;    // this refers to global "window" object here in the browser
var module = {
  x: 81,
  getX: function() { return this.x; }
};
module.getX(); // 81
var retrieveX = module.getX;
retrieveX();   
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81

// 68
// ****************************************************************
// A-format
regexp = new RegExp("pattern", "flags");
let mm = new RegExp("MM","ig")

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
alert( "We will, we will".replace(/we/i, "I") ); // I will, we will
// with flag g
alert( "We will, we will".replace(/we/ig, "I") ); // I will, I will

// TEST
let str = "I love JavaScript";
let regexp = /LOVE/i;
alert( regexp.test(str) ); // true

// ****************************************************************
// C-character classes \d\w\s--\D\W\S
let str = "+7(903)-123-45-67";
alert( str.match(/\d/g).join('') ); // 79031234567

let str = "+7(903)-123-45-67";
alert( str.replace(/\D/g, "") ); // 79031234567

alert( "A\nB".match(/A.B/) ); // null (no match)
alert( "A\nB".match(/A.B/s) ); // A\nB (match!)
// ****************************************************************
// D-   m flag
let str = `1st place: Winnie
2nd place: Piglet
3rd place: Eeyore`;
alert( str.match(/^\d/g) ); // 1

let str = `Winnie: 1
Piglet: 2
Eeyore: 3`;
alert( str.match(/\d$/gm) ); // 1,2,3

let str = `Winnie: 1
Piglet: 2
Eeyore: 3`;
alert( str.match(/\d\n/gm) ); // 1\n,2\n

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
testMe.replace(/\bcat\b/g, "ct");//"catmania catmina ct thiscat thiscatmaina"

//case
testMe = "catmania catmina cat- thiscat thiscatmaina";
testMe.replace(/\bcat-\b/g, "ct");//"catmania catmina cat- thiscat thiscatmaina"

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

let regexp = new RegExp("\d\.\d"); // d.d
alert( "Chapter 5.1".match(regexp) ); // null
let regStr = "\\d\\.\\d";
alert(regStr); // \d\.\d (correct now)
let regexp = new RegExp(regStr);
alert( "Chapter 5.1".match(regexp) ); // 5.1

// ****************************************************************
// E- SETS and Ranges

//[^aeyo] //– any character except 'a', 'e', 'y' or 'o'.
//[^0-9] //– any character except a digit, the same as \D.
// [^\s] //– any non-space character, same as \S.

// find "V", then [o or i], then "la"
alert( "Voila".match(/V[oi]la/) ); // null, no matches









