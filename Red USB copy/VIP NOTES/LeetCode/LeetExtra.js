// 1
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
alert(undefined == 0 )
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
alert([] == false) 
alert("" == false) 
alert(undefined == null) 
alert([] + 1) 
alert([] > 0) 

// 2
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

// 3
var age=23;
var arr=["John",age,age+=10,age--,age-1,undefined ];
// **************
arr[2] = age += 10 // age = age + 10 then we assign it to arr[2] 

// arr[2] = (age = age+10)
let c = 3 - (a = b + 1);

// vip vip vip vip
// The assignment operator "=" returns a value

// 4 **************

console.log(arr); //["john",23,33,33,31,undefined]
arr.length=2;
console.log(arr); //["john",23]
delete arr[3];//line 6
console.log(arr.length);//2
delete arr[0];
console.log(arr);//[,23]
console.log(arr.length);2
arr[6]="Sam";//line 11

// 5 vip vip vip vip
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
alert( arr ); // [3, 1]

// 6
if (!String.prototype.repeat) { // if there's no such method
  // add it to the prototype
  String.prototype.repeat = function(n) {
    // repeat the string n times

    // actually, the code should be a little bit more complex than that
    // (the full algorithm is in the specification)
    // but even an imperfect polyfill is often considered good enough for use
    return new Array(n + 1).join(this);
  };
}
alert( "La".repeat(3) ); // LaLaLa

// 7
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert( this.name );
}
let rabbit = new Rabbit("Rabbit");
rabbit.sayHi();                        // Rabbit
Rabbit.prototype.sayHi();              // undefined
Object.getPrototypeOf(rabbit).sayHi(); // undefined
rabbit.__proto__.sayHi();              // undefined

// 8
let company = { // the same object, compressed for brevity
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};
// The function to do the job
function sumSalaries(department) {
  if (Array.isArray(department)) { // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else { // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}

// 9
(function(){
  var a = b = 3;
})();
// var a = b
// b = 3
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

// 10
function isInteger(x) { 
  return (typeof x === 'number') && (x % 1 === 0); 
}

// 11
function isPalindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase();
  return (str == str.split('').reverse().join(''));
}
console.log(isPalindrome("level"));                   // logs 'true'
console.log(isPalindrome("levels"));                  // logs 'false'
console.log(isPalindrome("A car, a man, a maraca"));  // logs 'true'

// 12
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

// 13
var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);

// 14
(function(x) {
  return (function(y) {
      console.log(x);
  })(2)
})(1);

// 15
function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}
let arr = [1, 2, 3, 4, 5, 6, 7];
alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  };
}
let arr = [1, 2, 3, 4, 5, 6, 7];
alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

// 16
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

// 17
function chunk(arr, num) {
  let result = [];
  for (let i = 0; i < arr.length; i += num) {
    return result.push(arr.slice(i, i + num));
  }
  return result;
}
console.log(chunk([1, 2, 3, 4, 5, 6], 2));

// 18
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

// 19
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

// 20
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


