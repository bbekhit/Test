// https://gist.github.com/MattSurabian/8867307
// http://davidshariff.com/js-quiz/#q=10

// 1********************
function sumTwo(arr, num) {
  let result = [];
  let map = {};
  for (let item of arr) {
    if (map[item] !== undefined) {
      result.push(map[item], item);
    } else {
      map[num - item] = item;
    }
  }
  return result;
}
console.log(sumTwo([1, 4, 3, 6], 5));

function sumTwo(arr, num) {
  let result = [];
  let map = {};
  for (let i in arr) {
    if (map[num - arr[i]] !== undefined) {
      result.push(map[num - arr[i]], i);
    } else {
      map[arr[i]] = i;
    }
  }
  return result;
}
console.log(sumTwo([1, 4, 3, 6], 5));

function sumTwo(arr, num) {
  let result = [];
  let map = {};
  for (let item of arr) {
    if (map[item] !== undefined) {
      result.push(arr.indexOf(map[item]), arr.indexOf(item));
    } else {
      map[num - item] = item;
    }
  }
  return result;
}
console.log(sumTwo([1, 3, 4, 7, 5, 9], 5));


function sumTwo(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    console.log('i',i)
    for (let j = i + 1; j < arr.length; j++) {
      console.log('j', j)
      if (arr[i] + arr[j] === num) return [arr[i], arr[j]];
    }
  }
  return null;
}
console.log(sumTwo([1, 8, 3, 6, 7], 5));
// time comelexity O(n)  spacecomplexity O(1)
// 2******************************
function mySort(arr) {
  let map = {};
  for (let item of arr) {
    map[item] = (map[item] || 0) + 1;
  }
  // map = arr.reduce((acc,value) => {
  //   if(acc[value]){
  //     acc[value]++
  //   }else{
  //     acc[value] = 1
  //   }
  //   return acc
  // }, {})
  return arr.sort((a, b) => {
    if (map[a] > map[b]) return 1;
    else if (map[b] > map[a]) return -1;
    else if (a > b) return 1;
    else if (b > a) return -1;
    else return 0;
  });
}
console.log(mySort([13, 7, 13, 8, 5, 2, 1, 8, 8, 6, 6, 6, 23]));

// 3***********************
function removeDup(arr) {
  return arr.filter((item, i, self) => self.indexOf(item) === i);
}
function removeDup(arr) {
  let test = [];
  for (let i in arr) {
    if (test.indexOf(arr[i]) === -1) {
      test.push(arr[i]);
    }
  }
  return test
}
console.log(removeDup([1, 2, 3, 3, 2, 1, 1, 6, 7, 6, 8]));


function myFilter(arr){
  let res = arr.filter((item,i,self) => self.indexOf(item) !== i);
  // return res; [2,4,3]
  // return arr.filter(item => !res.includes(item)); // [1,5] 
  return arr.filter(item => res.includes(item)); // [ 2, 3, 4, 2, 4, 3 ] 
}
console.log(myFilter([1,2,3,4,2,4,3,5]));


// 4*************************
function inter(arr1, arr2) {
  return arr1
    .filter((item, i, self) => self.indexOf(item) === i)
    .filter(subItem => arr2.indexOf(subItem) !== -1);
}
console.log(inter([1, 2, 3, 2, 4, 5, 6, 7], [2, 6, 7, 90, 87]));

// 5*********************************
function rotate(arr, num) {
  for (let i = 1; i <= num; i++) {
    arr.shift(arr.push(arr[0]));
  }
  return arr;
}
function rotate(arr, num) {
  arr.unshift(...arr.splice(arr.length - num))
  return arr
}
console.log(rotate([1, 3, 4, 5], 2));

function rot(arr, arr1) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 1; j <= arr[i]; j++) {
      arr.shift(arr.push(arr[0]));
    }
  }
  return arr;
}

rot([1, 2, 3, 4], [1, 2]);

function rot(arr,arr1){
  for(let num of arr1){
    let tail = arr.splice(-num)
    arr.unshift(...tail)
  }
  return arr;
}
// 6************************************
function sortOdd(arr) {
  let odds = arr.filter(item => item % 2 !== 0).sort((a, b) => a - b);
  return arr.map(item => (item % 2 !== 0 ? odds.shift() : item));
}
sortOdd([9, 3, 7, 4, 1, 13, 8]);

// 7*************************************
function cloneObj(obj) {
  let clone = {};
  for (let i in obj) {
    if (typeof obj[i] === "object" && obj[i] !== null) {
      clone[i] = cloneObj(obj[i]);
    } else {
      clone[i] = obj[i];
    }
  }
  return clone;
}
console.log(
  cloneObj({
    name: "boutros",
    bio: {
      age: 45,
      color: "white"
    }
  })
);

let obj = {
  name: "boutros",
  bio: {
    age: 45,
    color: "white"
  }
};
let obj1 = Object.assign({}, obj);
console.log(obj1);

// 8*******************************
function arrDiff(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}
console.log(arrDiff([1, 2, 3, 4], [1, 2, 3, 5]));

// 9************************************
function mostOccurence(arr) {
  let map = {};
  let compare = 0;
  let most;
  for (let item of arr) {
    map[item] = (map[item] || 0) + 1;
    if (map[item] > compare) {
      compare = map[item];
      most = item;
    }
  }
  return most;
}

function mostOccurence(arr){
  return arr.reduce((acc, value, index) => {
      acc[value] ? acc[value] += 1 : acc[value] = 1;
      if(acc[value] > acc.most[1]) acc.most = [value, acc[value]]
      if(index === arr.length - 1) return acc.most[0];
      return acc;
  }, {most:[0,0]})
}
console.log(mostOccurence([2, 3, 4, 5, 6, 2, 2, 5, 2, 5]));

// 10*************************************
function flatten(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
      result.push(...flatten(item))
    } else {
      result.push(item);
    }
  }
  return result;
}

const myArray = [['1', '2', '3'], ['4', '5']];
const flatArray = myArray.reduce((total, amount) => total.concat(amount));

var nestedArray = [1, 2, [3, 4, [5, 6]]];
nestedArray.flat(2);
console.log(flatten([1, [2], [[[[3]]]]]));

// 11**********************************
function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

function fac(num){
  let res = 1;
  for(let i = num; num > 0; num--){
    res *= num
  }
  return res;
}
console.log(fac(0));

function fac(num) {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return num * fac(num - 1);
}

// 12*****************************************
function chunk(arr, num) {
  let result = [];
  for (let i = 0; i < arr.length; i += num) {
    return result.push(arr.slice(i, i + num));
  }
  return result;
}
console.log(chunk([1, 2, 3, 4, 5, 6], 2));

// 13*************************
function squared(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let map1 = {};
  let map2 = {};
  for (let item of arr1) {
    map1[item] = (map1[item] || 0) + 1;
  }
  for (let item of arr2) {
    map2[item] = (map2[item] || 0) + 1;
  }
  for (let i in map1) {
    if (!(i ** 2 in map2)) return false;
    if (map1[i] !== map2[i ** 2]) return false;
  }
  return true;
}
console.log(squared([1, 2, 3], [1, 4, 9, 4]));

// 14*********************************************
function sumThree(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          result.push(arr[i], arr[j], arr[k]);
        }
      }
    }
  }
  return result;
}

console.log(sumThree([1, -1, 0, -2, -2, 4]));

function sum(arr) {
  arr = arr.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    //   if (i > 0 && nums[i] === nums[i-1]) continue;
    for (let j = i + 1; j < arr.length; j++) {
      if (j > i + 1 && arr[j] === arr[j - 1]) continue;
      //     if ( j > i + 1 && nums[j] === nums[j-1]) continue;
      for (let k = j + 1; k < arr.length; k++) {
        if (k > j + 1 && arr[k] === arr[k - 1]) continue;
        //    if (k > j + 1 && nums[k] === nums[k - 1]) continue;
        if (arr[i] + arr[j] + arr[k] === 0) {
          result.push(arr[i], arr[j], arr[k]);
        }
      }
    }
  }
  return result;
}

// 15***********************************************
var x = 21;
var girl = function () {
  console.log(x);
   var x = 20;
};
girl(); //undefined

var x = 21;
var girl = function () {
  console.log(x);
  let x = 20;
};
girl(); //error x not defined

var x = 21;
var girl = function () {
  console.log(x);
  let xy = 20;
};
girl(); //21

var x = "outside";
function hoist() {
  console.log(x);
  var x = "inside";
}
hoist(); //undefined


function hoist() {
  console.log(x);
   x = "inside";
}
hoist(); //undefined
x // "inside"

console.log(square(5));
function square(n) {
  return n * n;
} // 25

console.log(square(5));
var square = function (n) {
  return n * n;
}; // error

var a = 10;
function Foo() {
  if (true) {
    let a = 4;
  }

  alert(a); // alerts '10' because the 'let' keyword
}
Foo();

function bar() {
  return foo;
  foo = 10;
  function foo() { }
  var foo = "11";
}
console.log(typeof bar()); //function

function bar() {
  return foo;
  foo = 10;
  var foo = function foo() { };
  var foo = "11";
}
console.log(typeof bar()); // undefined

function bar() {
  foo = 10;
  function foo() { }
  return foo;
  var foo = "11";
}
console.log(typeof bar()); // number

function bar() {
  foo = 10;
  return foo;
  function foo() { }
  var foo = "11";
}
console.log(typeof bar()); // number

function bar() {
  foo = 10;
  function foo() { }
  var foo = "11";
  return foo;
}
console.log(typeof bar()); // string

// 16********************************************
function combinations(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}
combinations("hello");

// 17********************************************

function Candidate(name, age, stream, grad, school) {
  this.name = name;
  this.age = age;
  this.stream = stream;
  this.grad = grad;
  this.display = function (p) {
    console.log("First Name: " + p.name.firstName);
    console.log("Age: " + p.age);
    console.log("Stream: " + p.stream);
    console.log("School: " + p.school.name);
    console.log("Grad: " + p.grad);
  };
}

var ob = new Candidate("Ashley", 21, "Science", "B.Tech", "St.Jones");
// console.log(ob);
console.log(ob.display(ob));
// console.log(ob.name.lastName);

// 18*************************************
var foo = function foo() {
  console.log(foo === foo);
};
foo();

// 19****************************************
alert("1" - -"1");
alert(1 + "2" + "2");
alert(1 + +"2" + "2");
alert(1 + -"1" + "2")
alert(+"1" + "1" + "2");
alert("A" - "B" + "2"); 
alert("A" - "B" + 2);
alert(5 > 4);
alert("apple" > "pineapple")
alert("2" > "12")
alert(undefined == null)
alert(undefined === null)
alert(null == "\n0\n") 
alert(null === +"\n0\n")
alert(undefined > 0 )
alert(undefined < 0) 
alert(undefined == 0) 
alert(null > 0)
alert(null == 0) 
alert(null >= 0)
alert("" + 1 + 0)
alert("" - 1 + 0)
alert(true + false)
alert(6 / "3")
alert("2" * "3")
alert(4 + 5 + "px")
alert("$" + 4 + 5)
alert("4" - 2)
alert("4px" - 2)
alert(7 / 0)
alert("  -9  " + 5)
alert("  -9  " - 5)
alert(null + 1)
alert(undefined + 1)
alert("1" == 1) 
alert(true == 1) 
alert("" == false) //vip i convert "" to zero number
alert(undefined == null) 
// [] + 1 // "1"
// [] > 0 // false
// [] == false 
// 21***************************************************
var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("outer func:  this.foo = " + this.foo);
    console.log("outer func:  self.foo = " + self.foo);
    (function () {
      console.log("inner func:  this.foo = " + this.foo);
      console.log("inner func:  self.foo = " + self.foo);
    })();
  }
};
myObject.func();

let obj = {
  name: "Boutros",
  getName: function () {
    console.log(this.name);
  }
}; //Boutros

let obj = {
  name: "Boutros",
  getName: function () {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  }
}; //undefined

let obj = {
  name: "Boutros",
  getName: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
}; // fix-1

let obj = {
  name: "Boutros",
  getName: function () {
    let that = this;
    setTimeout(function () {
      console.log(that.name);
    }, 1000);
  }
}; // fix-2

function Person(){
  // let this = {}; 
  // let that = this // fix-1
  this.age = 0;
  setInterval(function(){
    this.age++
    // that.age++ // fix-1
  }, 1000)
  // setInterval(() => {
  //   this.age++
  // }, 1000) // fix-2
  // return this; 
}
let user = new Person();

// 22********************************************************
var x = 3;
var foo = {
  x: 2,
  baz: {
    x: 1,
    bar: function () {
      return this.x;
    }
  }
};

var go = foo.baz.bar;
alert(go());
alert(foo.baz.bar());

let dog = {
  name: "doggo",
  sayName() {
    console.log(this.name);
  }
};
let sayName = dog.sayName();
console.log(sayName); // doggo
console.log(dog.sayName()); // doggo

function Dog(name) {
  this.name = name;
}
Dog.bark = function () {
  console.log(this.name + " says woof");
};
let fido = new Dog("fido");
fido.bark();

// solution
var boundedBark = Dog.bark.bind(fido);
boundedBark(); // "fido says woof"

// 23*******************************************************
new String("This is a string") instanceof String;

// 24*********************************************
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.getAge = function () {
    console.log(this.age);
  };
}
Person.prototype.getName = function () {
  console.log(this.name);
};
let boutros = new Person("Boutros", 40);
boutros.getAge();
boutros.getName();

function Candidate(name, age, lastName) {
  Person.call(this, name, age);
  this.lastName = lastName;
  this.getLastName = function () {
    console.log(this.lastName);
  };
}
Candidate.prototype = Object.create(Person.prototype);
let samah = new Candidate("Samah", 40, "Amanious");
samah.getLastName();
samah.getName();
samah.getAge();

// 25*********************************************
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    console.log(this.name);
  }
}
let boutros = new Person("Boutros", 40);
boutros.getName();

class Candidate extends Person {
  constructor(name, age, lastName) {
    super(name, age);
    this.lastName = lastName;
  }
  getLastName() {
    console.log(this.lastName);
  }
}
let samah = new Candidate("Samah", 40, "Armanious");
samah.getName();

// 26************************************************
Array.prototype.myReduce = function (f, value = 0) {
  for (let i = 0; i < this.length; i++) {
    value = f(this[i], value);
  }
  return value;
};
let arr = [1, 2, 3];
let add = function (a, b) {
  return a + b;
};
console.log(arr.myReduce(add));

Array.prototype.mfilter = function(fun) {
  var filtered = [];
  for (let i = 0; i < this.length; i++) {
    if (fun(this[i], i, this)) filtered.push(this[i]);
  }
  return filtered;
};

let max = function(item, i, arr) {
  return item > 5;
};

var returnedArr = [1, 2, 3, 4, 5, 6].mfilter(max);

console.log(returnedArr);

Array.prototype.randomElement = function () {
  return this[Math.floor(Math.random() * this.length)];
};

Array.prototype.myMap = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i] * 3;
  }
};
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.myMap());
console.log(arr);

Array.prototype.average = function () {
  // calculate sum
  var sum = this.reduce(function (prev, cur) { return prev + cur; });
  // return sum divided by number of elements
  return sum / this.length;
}

Array.prototype.myFind = function (num) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === num) return "YES";
  }
  return "NO";
};


// 27********************************************************
function fizzbuzz() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
fizzbuzz();

// 28*************************************-title case
function titleCase(str) {
  var newStr = str.toLowerCase().split(" ");
  var result = newStr.map(item =>
    item.replace(item.charAt(0), item.charAt(0).toUpperCase())
  );
  return result.join(" ");
}
titleCase("i am a SCool moOl");

function camelize(str){
  let arr = str.split("-")
  for(let i = 1; i < arr.length; i++){
    arr[i]=arr[i][0].toUpperCase().concat(arr[i].slice(1))
  }
  return arr.join("")
}
camelize("list-style-image");

function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

// 29***************************************- capitalize
function capitalize(str) {
  return str
    .charAt(0)
    .toUpperCase()
    .concat(str.slice(1));
}
capitalize("hello");

function cap(str){
  return `${str[0].toUpperCase()}${str.slice(1)}`
}
cap("paris")

// 30*********************************** - isPalindrom
function isPalindrome(string) {
  return (
    string
      .split("")
      .reverse()
      .join("") === string
  );
}

// 31******************************************* - anadgram
function anadgram(str, str1) {
  return (
    str
      .split("")
      .sort()
      .join("") ===
    str1
      .split("")
      .sort()
      .join("")
  );
}
anadgram("mary", "army");

function anagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let map1 = {};
  let map2 = {};
  for (let item of str1) {
    map1[item] = (map1[item] || 0) + 1;
  }
  for (let item of str2) {
    map2[item] = (map2[item] || 0) + 1;
  }
  for (let i in map1) {
    if (map1[i] !== map2[i]) return false;
  }
  return true;
}
console.log(anagram("bcrarrr", "rrrcarb"));

// 32********************************************************
function merge(str1, str2) {
  let arr = Array.from(str1.lenght > str2.length ? str1 : str2);
  return arr.map((item, i) => (str1[i] || "") + (str2[i] || "")).join("");
}
merge("hell", "123");
merge("abc", "123");
merge("ab", "123");
merge("abcd", "123");

// 33******************************************************
let arr = ["2010-3-3", "2015-3-3", "2005-3-3"];
arr
  .map(item => new Date(item).getTime())
  .sort((a, b) => a - b)
  .map(item => new Date(item).toISOString().split("T")[0]);

// 34****************
function isInt(num) {
  return num % 1 === 0;
}

// 35*******************************
// A good use of the bind function is when you have a particular function 
// that you want to call with a specific this value. 
// You can then use bind to pass a specific object to a function that uses a this reference.
let name = "outside"
let foo = {
  name: "inside",
  getName() {
    console.log(this.name)
  }
}
let answer = foo.getName
answer()

function fullName() {
  return "Hello, this is " + this.first + " " + this.last;
}
console.log(fullName()); // => Hello this is undefined undefined
// create a person object and pass its values to the fullName function
var person = { first: "Foo", last: "Bar" };
console.log(fullName.bind(person)()); // => Hello this is Foo Bar

// 35****************************************************
// The "use strict" literal is entered at the top of a JavaScript program 
// or at the top of a function and it helps you write safer JavaScript code 
// by throwing an error if a global variable is created by mistake. For example, 
// the following program will throw an error:
function doSomething(val) {
  "use strict";
  x = val + 10;
}
function doSomething(val) {
  "use strict";
  var x = val + 10;  // fixed
}

// 36*************************************************
"1" == 1 // true
true == 1 // true
[] == false // true
"" == false // true
undefined == null // true

// 37*****************************************************
// A callback function is a function that is passed 
// to another function as an argument and is executed 
// after some operation has been completed.
//  Below is an example of a simple callback 
//  function that logs to the console after some operations have been completed.
function modifyArray(arr, callback) {
  // do something to arr here
  arr.push(100);
  // then execute the callback function that was passed
  callback();
}

var arr = [1, 2, 3, 4, 5];

modifyArray(arr, function () {
  console.log("array has been modified", arr);
});

// 38*********************************************
function func() {
  var priv = "secret code";
  return function () {
    return priv;
  }
}
var getPriv = func();
console.log(getPriv()); // => secret code
// To create a private variable in JavaScript that cannot be changed you
//  need to create it as a local variable within a function. 
//  Even if the function is executed the variable 
//  cannot be accessed outside of the function. For example:
var counter = 0;
// Function to increment counter
function add() {
  counter += 1;
}
// Call add() 3 times
add();
add();
add(); //3

function add() {
  counter = 0;
  return function () {
    return counter += 1
  }
}
add()

// 40*************************************************
// https://www.seth-dehaan.com/2016/01/21/freecodecamp-caesar-s-cipher/
// https://www.vincecampanale.com/blog/2017/01/20/caesar-cipher/
function rot13(str) {
  var newString = [];

  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
      newString.push(str.charAt(i));
    } else if (str.charCodeAt(i) > 77) {
      newString.push(String.fromCharCode(str.charCodeAt(i) - 13));
    } else {
      newString.push(String.fromCharCode(str.charCodeAt(i) + 13));
    }
  }
  return newString.join("");
}

// 41  Box Model *********************************************************
//
// Content - The content of the box, where text and images appear
// Padding - Clears an area around the content. The padding is transparent
// Border - A border that goes around the padding and content
// Margin - Clears an area outside the border. The margin is transparent
// box-sizing: border-box;

// CSS Pseudo Classes
// Hover - nth-child() - 

// CSS Pseudo Elements
// ::before - after - first_line - first-letter

// Inline-block

// Compared to display: inline, the major difference is that display:
//  inline-block allows to set a width and height on the element.

// Also, with display: inline-block, the top and bottom margins/paddings are respected,
//  but with display: inline they are not.

// Compared to display: block, the major difference is that display: 
// inline-block does not add a line-break after the element, 
// so the element can sit next to other elements

// 42*************************************************8
// https://medium.com/javascript-in-plain-english/5-tricky-javascript-problems-to-check-before-your-next-interview-part-1-60fdecaa59d6 
function print() {
  for (var i = 0; i <= 5; i++) {
    (function (j) {
      setTimeout(function () {
        console.log(j);
      }, j * 1000);
    })(i);
  }
}

function print(a, b){
  setTimeout(function go(){
    console.log(a)
    if(a < b){
      setTimeout(go, 1000)
    }
    a++
  }, 1000)
 }

 function print(a, b){
  let timer = setInterval(function(){
    console.log(a)
    if(a === b){
      clearInterval(timer)
    }
    a++
  },1000)
 }

//  https://javascript.info/closure 
 function makeArmy() {
  let shooters = [];
  for(let i = 0; i < 10; i++) {
    let shooter = function() { // shooter function
      alert( i ); // should show its number
    };
    shooters.push(shooter);
  }
  return shooters;
}
let army = makeArmy();
army[0](); // 0
army[5](); // 5

// 43*********************************************************
let fruits = [
  { color_id: 1, name: "strawbery" },
  {
    color_id: 2,
    name: "Banana"
  },
  {
    color_id: 5,
    name: "Tes"
  }
];

let colors = [
  { id: 5, color: "yellow" },
  { id: 1, color: "red" },
  { id: 2, color: "green" }
];

let outData = [];
fruits.forEach(fruit =>
  outData.push({
    id: fruit.color_id,
    color: colors.filter(color => color.id === fruit.color_id)[0].color,
    // color: colors.find(color => color.id === fruit.color_id).color,
    name: fruit.name
  })
);
console.log(outData);

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = []; /* ... your code ... */
users.forEach(item => usersMapped.push({
  fullName:`${item.name} ${item.surname}`,
  id: item.id
}))
/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/


alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

// / 44******************************************
// reverse boolean
function reverse(bool) {
  return typeof bool === "boolean" ? !bool : "boolean expected";
}
reverse(true);

// 45**
function findUnique(arr) {
  var res = [];
  for (var i in arr) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) res.push(arr[i]);
  }
  return res;
}

// 46********************************************
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2);

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }

  return maxSum;
}

// 47***************************************************************************
function generator(input) {
  var index = 0;
  return {
    next: function() {
      if (index < input.length) {
        index += 1;
        return input[index - 1];
      }
      return "";
    }
  };
}
var mygenerator = generator("boomerang");
mygenerator.next(); // returns "b"
mygenerator.next(); // returns "o"
mygenerator = generator("toon");
mygenerator.next(); // returns "t"

// 48************************************************
let arr1 = new Array(1,2,3)
let obj = new Object({name:"boutros"})
//  find
arr2.find(item => item < 50) //find first item that passes the test
// findIndex
arr2.findIndex(item => item === 2) //find index of first item that passes test
// forEach
// executes a call back function on each item and return undefined
// map
// executes a call back function on each item and return an array

// emptying array
arr = [];
arr.length = 0;
arr.splice(0, arr.length);
// 49**********************************************************************
function outer(a) {
  return function inner(b) {
    return a + b;
  };
}
outer(5)(6); //11
var outStore = outer(5);
outerStore(10); //14

sum(2, 3); // 5
sum(2)(3); // 5
const outer = a => b => a + b;

function sum(x, y) {
  if (arguments.length >= 2) return x + y;
  else if (arguments.length === 1)
    return function(z) {
      return x + z;
    };
}

function sum(a) {
  let currentSum = a;
  function f(b) {
    currentSum += b;
    return f;
  }
  f.toString = function() {
    return currentSum;
  };
  return f;
}
alert( sum(1)(2) ); // 3
alert( sum(5)(-1)(2) ); // 6
alert( sum(6)(-1)(-2)(-3) )

// 50*************************************************
// call stack
// callback queue

// 51**********************************************************************
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
sumRange(3);

function factorial(num) {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}
factorial(5);

function productOfArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + productOfArray(arr.slice(1));
}

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

function odd(arr) {
  let result = [];
  if (arr.length === 0) {
    return result;
  }
  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }
  result = result.concat(odd(arr.slice(1)));
  return result;
}

// 52****************************************************************
function memoize(fn) {
	// implementation is here
	//check if the arguments is the same
	let cach = {}
	  return (...args) => {
	     let str = args.toLocalString()
	     if(str in cach){
	         return cach[str]
	     }else{
	         let myResult = fn(...args)
	         cach[str] = myResult
	         return myResult
	     }
	      
	   } 
//if the arguments are the same don't execute
}

// a simple pure function to get a value adding 10
const add = n => n + 10;
console.log("Simple call", add(3));
// a simple memoize function that takes in a function
// and returns a memoized function
const memoize = fn => {
  let cache = {};
  return (...args) => {
    let n = args[0]; // just taking one argument here
    if (n in cache) {
      console.log("Fetching from cache");
      return cache[n];
    } else {
      console.log("Calculating result");
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};
// creating a memoized function for the 'add' pure function
const memoizedAdd = memoize(add);
console.log(memoizedAdd(3)); // calculated
console.log(memoizedAdd(3)); // cached
console.log(memoizedAdd(4)); // calculated
console.log(memoizedAdd(4)); // cached

// 53****************************
// A RESTful API is an application program interface (API) that uses HTTP
// requests to GET, PUT, POST and DELETE data.
// it's a contract between one piece of software and another
//REST is an architecture style for designing networked applications
//treats server object as resource that can be created or destroyed

// 54*****************************************************
function StockPicker(arr) {
  let minPrice = arr[0];
  let profit = -1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > minPrice) {
      profit = Math.max(profit, arr[i] - minPrice);
    } else {
      minPrice = arr[i];
    }
  }
  return profit;
}
StockPicker([45, 24, 35, 31, 40, 38, 11]);

// 55*****************************************************
function reverseArrayInPlace(arr) {
  for (i = 0; i < arr.length; i++) {
    arr.splice(i, 0, arr.pop());
  }
  return arr;
}
reverseArrayInPlace([5, 4, 3, 2, 1]);

function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

// 56*****************************************************
// 65-90 are the ranges for A-Z (uppercase letters)
// 97-122 are the ranges for a-z (lowercase letters)
// 26 is the number of letters in the alphabet

function caesarCipher(s, k) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i);
    if (charCode < 65 || charCode > 122 || (charCode > 90 && charCode < 97)) {
      result += s[i];
    } else {
      let newCharCode = charCode + Math.ceil(k % 26);
      if (charCode >= 97 && newCharCode > 122) {
        newCharCode = newCharCode - 122 + 96;
      }
      if (charCode <= 90 && newCharCode > 90) {
        newCharCode = newCharCode - 90 + 64;
      }
      result += String.fromCharCode(newCharCode);
    }
  }

  console.log(result);
  return result;
}

// 56*********************************************
function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
  let map = {};
  let arr = Array.from(arguments);
  for(let item of arr){
      map[item] = (map[item] || 0) + 1;
  }
  for(let i in map){
      if(map[i] > 1) return true;
  }
  return false;
}
console.log(areThereDuplicates(1,2,3,4,5))

// 57***************************************************************
function isSubsequence(str1, str2) {
  let count = 0;
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === str1[count]) {
      count++;
    }
    if (count === str1.length) {
      return true;
    }
  }
  return false;
}
console.log(isSubsequence("hello", "hello there"));
console.log(isSubsequence("sing", "tsing"));
console.log(isSubsequence("abc", "abrdfgcign"));
console.log(isSubsequence("abc", "acb"));

function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}

// 58***********************************************************

function findLongestSubstring(str) {
  let map = {};
  let newStr = "";
  let longest = 0;
  for (let item of str) {
    if (!map[item]) {
      map[item] = 1;
      newStr += item;
    } else {
      longest = Math.max(longest, newStr.length);
      newStr = newStr.slice(newStr.indexOf(item) + 1);
      newStr += item;
    }
  }
  longest = Math.max(longest, newStr.length);
  return longest;
}

console.log(findLongestSubstring("thisisawesome")); 

function longest(str) {
  let map = {};
  let newStr = "";
  let result = [];
  for (let item of str) {
    if (!map[item]) {
      map[item] = 1;
      newStr += item;
      result.push(newStr);
    } else {
      newStr = newStr.slice(newStr.indexOf(item) + 1);
      newStr += item;
    }
  }
  result.sort((a, b) => b.length - a.length);
  return result.filter(item => item.length === result[0].length);
}

console.log(longest("rithmhscfhool"));


// 59*************************************************************
function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== num && start <= end) {
    if (num > arr[middle]) start = middle + 1;
    else end = middle - 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === num ? middle : -1;
}
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103));

// 60***************************************************************
function naiveSearch(long, short){
  var count = 0;
  for(var i = 0; i < long.length; i++){
      for(var j = 0; j < short.length; j++){
         if(short[j] !== long[i+j]) break;
         if(j === short.length - 1) count++;
      }
  }
  return count;
}

naiveSearch("lorie loled", "lol")

// 61*****************************************************
function selectionSort(arr) {
  arr.map((item, i) => {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  });
  return arr;
}
console.log(selectionSort([3, 1, 5, 0, -4, 44, 9, 20]));

// 62**********************************************************
function bubbleSort(arr) {
  arr.map(item =>
    arr.map((subItem, i) => {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    })
  );
  return arr;
}

function bubbleSort(arr){
  arr.map((item,i) => {
    for(let j = i + 1; j < arr.length; j++){
    if(arr[i] > arr[j]){
      [arr[i],arr[j]] = [arr[j],arr[i]]
    }
    }
  })
  return arr
}
console.log(bubbleSort([9, 8, 7, 6, 5, 4, 3, 0, 2, 1]));
// 63**********************************************************

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      console.log(arr);
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
console.log(insertionSort([2, 1, 9, 76, 4]));

[2,2,9,76,4]
[2,2,9,76,4]
[2,2,9,4,76]

// 64********************************************
// COLLECTION
function isPrime(num) {
  for (var i = 2; i <= num; i++) {
    if (num % i === 0 && num !== i) {
      return false;
    }
  }
  return true;
}

function pairingMonth(num) {
  let months = {
    1: "january",
    2: "feburary",
    3: "March",
    4: "April",
    5: "May"
  };
  return months[num]
}

function findLargestNums(arr) {
  return arr.map(x => Math.max(...x));
}
findLargestNums([[1, 23, 4], [2, 39]]);

var a = [1, 2, 3];
a[10] = 99; // will not crash
a[6]; // undefined
a.map(e => 6);
// [6, 6, 6, empty × 7, 6]

// Ajax
// asynchronous js and xml
// set of web technologies that send and receive data asynchronously

// 65************************************************
//function declaration:
function bar() {
  return 3;
    }

//function expression
var add = function(a,b){
  return a + b
}

// 66
var age=23;
 var arr=["John",age,age+=10,age--,age-1,undefined ];
 console.log(arr);
 arr.length=2;
 console.log(arr);
 delete arr[3];//line 6
 console.log(arr.length);
 delete arr[0];
 console.log(arr);
 console.log(arr.length);
 arr[6]="Sam";//line 11

//  Error in line 6
// The output of the snippet is:
[ 'John', 23, 33, 33, 31, undefined ]
[ 'John', 23 ]
2
[ , 23 ]
2
// Age is a local variable.
// Age is a global variable.
// Line 11 gives an error.
// The output of the snippet is:
[ 'John', 23, 33, 32, 31, undefined ]
[ 'John', 23 ]
2
[ , 23 ]
2
// The final value of age is 32.
// The final value of age is 31.

// 67
alert( null || 2 || undefined )
alert( alert(1) || 2 || alert(3) )
alert( 1 && null && 2 );
alert( alert(1) && alert(2) )
alert( null || 2 && 3 || 4 )
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );

// 68
let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

let x;
while ( true ){
  x = +prompt("what is the number", 0)
  if(!x || x > 100) break;
}

// 69
function maskify(str) {
  if(str.length < 4){
    return str
  }
 let end = str.length - 4
 for(let i = 0; i < end; i++ ){
   str = str.replace(str[i], '#')
 }
 return str
}

// 70 Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.
function readNumber() {
  let num;
  do {
    num = prompt("Enter a number please?", 0);
  } while ( !isFinite(num) );
  if (num === null || num === '') return null;
  return +num;
}
alert(`Read: ${readNumber()}`);

function readNumber(){
  let num;
  while(true){
    num = +prompt("Enter a number", 0)
    if(isFinite(num)) break;
  }
  return num;
}
alert(`Read: ${readNumber()}`);

// 71
function random(min, max) {
  return min + Math.random() * (max - min);
}

// 72
function sumInput() {
  let numbers = [];
  while (true) {
    let value = prompt("A number please?", 0);
    // should we cancel?
    if (value === "" || value === null || !isFinite(value)) break;
    if (!value || !isFinite(value)) break;
    numbers.push(+value);
  }
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
alert( sumInput() );

function sumInput() {
  let numbers = [];
  let value;
  do {
    value = prompt("A number please?", 0);
    numbers.push(+value);
  } while (value && isFinite(value)) 
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
sumInput()

// 73
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// 74 DOB
function getAge(dob){
  let now = new Date()
  let sinceBirth = new Date(dob)
  let diff = now - sinceBirth
  return (new Date(diff).getFullYear() - 1970)
}
function getAge(dob){
  return  moment().diff(dob, 'years');
}

// 74`
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

// 75 hours passed since beging
var start = new Date();
start.setHours(0,0,0,0);
let now = new Date()
let diff = now - start/3600000

var end = new Date();
end.setHours(23,59,59,999);

var start = moment().startOf('day'); // set to 12:00 am today
var end = moment().endOf('day'); // set to 23:59 pm today

var start = moment.utc().startOf('day'); 
var end = moment.utc().endOf('day'); 

// 76 - 
function formatD(date){
  let now = moment()
  let m = moment(date)
  let diff = now - m
  let sec = Math.floor(diff/1000)
  let min = Math.floor(diff/60000)
  if(diff < 1000){
    return "just now"
  }
   if(sec < 60){
    return `${sec} sec. ago`
  }
   if(min < 60){
    return `${min} mins. ago`
  }
  
    return m.format("MMMM DD")
}
const res = formatD("2019-09-12 10:05:02")
console.log(res)

function formatDate(date) {
  let diff = new Date() - date; // the difference in milliseconds
  if (diff < 1000) { // less than 1 second
    return 'right now';
  }
  let sec = Math.floor(diff / 1000); // convert diff to seconds
  if (sec < 60) {
    return sec + ' sec. ago';
  }
  let min = Math.floor(diff / 60000); // convert diff to minutes
  if (min < 60) {
    return min + ' min. ago';
  }
  // format the date
  // add leading zeroes to single-digit day/month/hours/minutes
  let d = date;
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes()
  ].map(component => component.slice(-2)); // take last 2 digits of every component

  // join the components into date
  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}
alert( formatDate(new Date(new Date - 1)) ); // "right now"
alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"
// yesterday's date like 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );

/////
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
alert(ms); // 1327611110417  (timestamp)

// 77 - 
function aclean(arr) {
  let map = new Map();
  for (let word of arr) {
    // split the word by letters, sort them and join back
    let sorted = word.toLowerCase().split('').sort().join(''); // (*)
    map.set(sorted, word);
  }
  return Array.from(map.values());
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) );
// **
function aclean(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");
    obj[sorted] = arr[i];
  }
  return Object.values(obj);
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) );

function aclean(arr) {
  let map = {};
  // let map = new Map();
  for (let word of arr) {
    // split the word by letters, sort them and join back
    let sorted = word.toLowerCase().split("").sort().join(""); // (*)
    map[sorted] = word;
    // map.set(sorted, word);
  }

  return Object.values(map);
  // return Array.from(map.values());
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr));


// 78
Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
};
function f() {
  alert("Hello!");
}
f.defer(1000); // shows "Hello!" after 1 sec

// 79 debounce
// https://medium.com/@griffinmichl/implementing-debounce-in-javascript-eab51a12311e
function debounce(f, ms) {
  let isCooldown = false;
  return function() {
    if (isCooldown) return;
    f.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => isCooldown = false, ms);
  };
}

function debounce(func, wait) {
  let timeout
  return function(...args) {
    const context = this
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(context, args), wait)
  }
}
function sayHello() {
  console.log('My name is', this.name)
}
const amy = {
  name: 'amy',
  speak: debounce(sayHello),
}
amy.speak()

const debounce = (func, delay) => {
  let inDebounce
  return function() {
    const context = this
    const args = arguments
    clearTimeout(inDebounce)
    inDebounce = setTimeout(() => func.apply(context, args), delay)
  }
}

const throttle = (func, limit) => {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

function getRandomElements(arr, n) {
  let newItems = [];

  for (let i = 0; i < n; i++) {
    let idx = Math.floor(Math.random() * arr.length);
    newItems.push(arr[idx]);
    arr.splice(idx, 1);
  }
  return newItems;
}

getRandomElements(testArray, 3);

const original = {
  fullName:{
    firstName:"john",
    lastName:"Doe"
  }
}
const cloneOriginal = {...original}
cloneOriginal.fullName.firstName = "Will"
console.log(original)

// 
function sumSalaries(obj) {
  let arr = Object.values(obj);
  return arr.reduce((acc, nextValue) => acc + nextValue, 0);
  // let sum = 0;
  // for (let key in obj) {
  //   sum += obj[key];
  // }
  // return sum;
}
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
console.log(sumSalaries(salaries)); // 650

// 
function topSalary(salaries) {
  let max = 0;
  let maxName = null;
  for(const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }
  return maxName;
}

//
if (!String.prototype.repeat) { // if there's no such method
  String.prototype.repeat = function(n) {
    return new Array(n + 1).join(this);
  };
}
alert( "La".repeat(3) ); // LaLaLa
