// call is a method to calls function with given this value

// fundamental difference is that call() accepts an argument list, while apply() accepts a single array of arguments.

function list() {
  return Array.prototype.slice.call(arguments);
}
// We take (borrow) a join method from a regular array ([].join) and use [].join.call to run it in the context of arguments.

// Why does it work?

// That’s because the internal algorithm of the native method arr.join(glue) is very simple.

// Taken from the specification almost “as-is”:

// Let glue be the first argument or, if no arguments, then a comma ",".
// Let result be an empty string.
// Append this[0] to result.
// Append glue and this[1].
// Append glue and this[2].
// …Do so until this.length items are glued.
// Return result.
// So, technically it takes this and joins this[0], this[1] …etc together. It’s intentionally written in a way that allows any array-like this (not a coincidence, many methods follow this practice). That’s why it also works with this=arguments. 

// https://www.freecodecamp.org/news/how-to-use-the-apply-call-and-bind-methods-in-javascript-80a8e6096a90/

// https://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind

// https://medium.com/@TCAS3/debounce-deep-dive-javascript-es6-e6f8d983b7a1
// https://www.youtube.com/watch?v=F2zF8fu7aG0  --- vip debounce explained 

// Example
function Person(name){
  this.name = name
}
function Customer(name,age){
  Person.call(this,name)
}

let me = {
  name: "Boutros",
  getInfo: function(){
    return this.name
  }
}
let Tony = {
  name: "Tony"
}
me.getInfo.call(Tony) //"Tony"

// Example
let numbers = [1,2,3]
let letters = ['a','b','c']
numbers.push(letters) // [1,2,3,['a','b','c']]
numbers.push.apply(letters,numbers)

// Example
var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};
function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}
say.call(person1, 'Hello'); // Hello Jon Kuperman
say.call(person2, 'Hello'); // Hello Kelly King

var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};
function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}
say.apply(person1, ['Hello']); // Hello Jon Kuperman
say.apply(person2, ['Hello']); // Hello Kelly King

var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};
function say() {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
}
var sayHelloJon = say.bind(person1);
var sayHelloKelly = say.bind(person2);
sayHelloJon(); // Hello Jon Kuperman
sayHelloKelly(); // Hello Kelly King

// Example
let years = [1990, 1965, 1980, 2005, 1998]
function arrayCalc(arr, fn){
  var arrRes = []
  for(var i = 0; i < arr.length; i++){
    arrRes.push(fn(arr[i]))
  }
  return arrRes
}
function calculateAge(el){
  return 2016 - el
}
function isFullAge(limit, el){
  return el >= limit 
}

var ages = arrayCalc(years, calculateAge)
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20))
console.log(fullJapan)

// Example
var person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
person.fullName.apply(person1, ["Oslo", "Norway"]);


// Examples
let arr = [1,2,3,4]
Math.max.apply(null, arr) // null, undefined, Math
// i want to run the function on parameters and don't care about context
// https://stackoverflow.com/questions/21255138/how-does-the-math-max-apply-work

let arr = [1,2,3]
let arr1 = [4,5]
arr.push.apply(arr, arr1)
arr.push.call(arr, ...arr1)
// i setup this to -arr- then i need arguments to push it

Array.prototype.slice.call(arguments)
Array.prototype.slice.apply(arguments)

function add(...args){
  // let args = Array.prototype.slice.call(arguments)
  // let args = [...arguments]; 
  return args.reduce((acc, value) => acc + value, 0 )
}
console.log(add(1,2,3,4,5));

// debounce
// scrolling or resizing or searching 
// don't want it to trigger too often