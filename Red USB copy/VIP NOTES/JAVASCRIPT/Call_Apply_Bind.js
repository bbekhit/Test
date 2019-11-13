// call is a method to calls function with given this value

// fundamental difference is that call() accepts an argument list, while apply() accepts a single array of arguments.

// https://www.freecodecamp.org/news/how-to-use-the-apply-call-and-bind-methods-in-javascript-80a8e6096a90/

// https://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind

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