// https://github.com/bhavyareddivari/JSExamples/tree/master/Advanced
// 1**
function findLargestNums(arr) {
  return arr.map(x => Math.max(...x));
}
findLargestNums([[1, 23, 4], [2, 39]]);

// 2**
function sumTwo(arr, num) {
  let map = {};
  let num = 0;
  let result = [];
  for (let key of arr) {
    if (map[key] !== undefined) {
      result.push(map[key], key);
    } else {
      map[num - key] = key;
    }
  }
  return result;
}
sumTwo([2, 3, 5, 0, 7, 8], 5);
// another version
function sumZero(arr) {
  let num = 0;
  let map = {};
  result = [];
  for (let i of arr) {
    if (map[i] !== undefined) {
      result.push(map[i], i);
    } else {
      map[num - i] = i;
    }
  }
  if (result.length !== 0) {
    return [result[0], result[1]];
  } else {
    return undefined;
  }
}
sumZero([1, 2, 4, -4, 9, 5, -5, -6, 6]);
// another version
function averagePair(arr, num) {
  let map = {};
  let result = [];
  for (let item of arr) {
    if (map[item] !== undefined) {
      result.push([map[item], item]);
    } else {
      map[2 * num - item] = item;
    }
  }
  return result.length !== 0;
}
// another version
var twoSum = function(nums, target) {
  let map = {};
  let res = [];
  for (let i in nums) {
    if (map[target - nums[i]] !== undefined) {
      res.push(map[target - nums[i]], i);
    } else {
      map[nums[i]] = i;
    }
  }
  return res;
};
// 3**
function repeat(str) {
  let map = {};
  for (let item of str) {
    if (item.match(/[a-zA-Z0-9]/)) {
      map[item] = (map[item] || 0) + 1;
    }
  }
  return map;
}
repeat("hello hello");

// 4**
let obj1 = {
  name: "boutros",
  age: 27
};
let obj2 = {
  name: "boutros",
  age: 27
};
let test1 = Object.keys(obj1);
let test2 = Object.keys(obj1);
test1 === test2;
test1.toString() === test2.toString();
JSON.stringify(test1) === JSON.stringify(test2);

// 5**
// missing numbers in an array from 1-10
function missing(arr) {
  let res = [];
  for (let i = 1; i <= 10; i++) {
    if (arr.indexOf(i) === -1) {
      res.push(i);
    }
  }
  return res;
}
missing([1, 2, 3]);

// 6**
// reverse boolean
function reverse(bool) {
  return typeof bool === "boolean" ? !bool : "boolean expected";
}
reverse(true);

// 7**
// remove duplicate
function removeDup(arr) {
  let test = [];
  for (let i in arr) {
    if (test.indexOf(arr[i]) === -1) {
      test.push(arr[i]);
    }
  }
  return test;
}
function removeDup(arr) {
  return arr.filter((item, i, self) => self.indexOf(item) === i);
}
removeDup([1, 1, 2, 2, 3, 3, 4, 4, 6, 6, 6, 7, 7, 5])[(1, 2, 3, 4, 6, 7, 5)];
// remove dup from string
function dup(str) {
  return str
    .split("")
    .filter((item, i, self) => self.indexOf(item) === i)
    .join("");
}
dup("hello");
// 8**
//   return duplicates
function dup(arr) {
  return arr.filter((item, index, self) => self.indexOf(item) !== index);
}
dup([1, 1, 2, 2, 3, 3, 4, 4, 6, 6, 6, 7, 7, 5]);

// 9**
function print() {
  for (let i = 0; i <= 5; i++) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  }
}

let arr = [1, 2, 3, 4, 5];
arr.forEach(item =>
  setTimeout(function() {
    console.log(item);
  }, item * 1000)
);
function print() {
  for (var i = 0; i <= 5; i++) {
    (function(j) {
      setTimeout(function() {
        console.log(j);
      }, j * 1000);
    })(i);
  }
}

// 10**
function findUnique(arr) {
  var res = [];
  for (var i in arr) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) res.push(arr[i]);
  }
  return res;
}

// 11**
// chunking arr
function chunk(arr, size) {
  let res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
}
chunk([1, 2, 3, 4, 5, 6, 7, 8], 2);

// 12**
// adding given number
function add(num) {
  let result = 0;
  let str = num.toString();
  for (let item of str) {
    result += Number(item);
  }
  return result;
}
add(34);

// 13**
// find odd numbers between 2 given numbers
function oddNumbers(l, r) {
  let result = [];
  for (var i = l; i <= r; i++) {
    if (i % 2 != 0) {
      result.push(i);
    }
  }
  return result;
}
oddNumbers(5, 11);

// 14**
// find high and low
function highLow(str) {
  var nums = str.split(" ");
  return `${Math.max(...nums)} ${Math.min(...nums)}`;
}
highLow("1 2 3 4 5"); // ➞ "5 1"

function highLow(str) {
  let arr = str.split(" ");
  return Math.max(...arr)
    .toString()
    .concat(" ", Math.min(...arr).toString());
}

// 15**
ping();
pong();
function printPing() {
  console.log("Ping");
}
function printPong() {
  console.log("Pong");
}
function ping() {
  var myFunction = function() {
    printPing();
    var rand = Math.round(Math.random() * (3000 - 500)) + 500; // generate new time (between 3sec and 500"s)
    setTimeout(myFunction, rand);
  };
  myFunction();
}
function pong() {
  var myFunction = function() {
    printPong();
    var rand = Math.round(Math.random() * (3000 - 500)) + 500; // generate new time (between 3sec and 500"s)
    setTimeout(myFunction, rand);
  };
  myFunction();
}

// 16**
function pairingMonth(num) {
  let months = {
    1: "january",
    2: "feburary",
    3: "March",
    4: "April",
    5: "May"
  };
  return months[num];
}
pairingMonth(3);

// 17**
function isPrime(num) {
  for (var i = 2; i <= num; i++) {
    if (num % i === 0 && num !== i) {
      return false;
    }
  }
  return true;
}

// 18** find the items that is't in
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// 19**
//module.exports = isEmpty;
const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

// 20**
// remove falsey value from arr
function bouncer(arr) {
  return arr.filter(item => Boolean(item));
}
function bouncer(arr) {
  return arr.filter(item => item);
}
function bouncer(arr) {
  return arr.filter(Boolean);
}

// 21**
// sort by value and frequency
function mySort(arr) {
  let map = {};
  for (var i in arr) {
    map[arr[i]] = (map[arr[i]] || 0) + 1;
  }
  return arr.sort((a, b) => a - b).sort((a, b) => map[a] - map[b]);
}
mySort([27, 19, 19, 7, 22, 101, 102, 34, 22, 34, 22]);
function sorty(arr) {
  let map = {};
  for (let item of arr) {
    map[item] = (map[item] || 0) + 1;
  }
  return arr.sort(function() {
    if (map[a] > map[b]) return 1;
    else if (map[b] > map[a]) return -1;
    else if (a > b) return 1;
    else if (b > a) return -1;
    else return 0;
  });
}
sorty([33, 22, 4, 7, , 1, 9, 9, 9, 33, 2, 22, 22]);

function sorty(arr) {
  let map = {};
  for (let item of arr) {
    map[item] = (map[item] || 0) + 1;
  }
  return arr.sort((a, b) => {
    if (map[a] > map[b]) return 1;
    else if (map[b] > map[a]) return -1;
    else if (a > b) return 1;
    else if (a > b) return -1;
    else return 0;
  });
}

// 22**
// most occurrence in a array
function mode(arr) {
  return arr
    .sort(
      (a, b) =>
        arr.filter(v => v === a).length - arr.filter(v => v === b).length
    )
    .pop();
}

mode(["pear", "apple", "orange", "apple"]); //apple

function most(arr) {
  let map = {};
  let compare = 0;
  let mostFrequent;
  for (let i in arr) {
    map[arr[i]] = (map[arr[i]] || 0) + 1;
    if (map[arr[i]] > compare) {
      compare = map[arr[i]];
      mostFrequent = arr[i];
    }
  }
  return mostFrequent;
}
most([1, 1, 2, 2, 2]);

// 23**
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
function sorty(arr) {
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
sorty([5, 3, 2, 6, 6, 6, 6, 7, 7, 9, 10, 10]);

bubbleSort([45, 33, 88, 12]);

// 24**
function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

function reverseNum(num) {
  let newStr = num.toString();
  let newArr = newStr
    .split("")
    .reverse()
    .join("");
  return parseInt(newArr);
}
reverseNum(654321);

// 25**
function factorial(num) {
  let result = 1;
  for (var i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
function factorial(num) {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}
factorial(5);

function factorial(num) {
  let result = 1;
  for (var i = num; i >= 1; i--) {
    result *= i;
  }
  return result;
}

factorial(5);

// 26**
function longestWord(str) {
  var words = str.split(" ");
  maxLength = 0;
  for (var i = 0; i < words.length; i++)
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  return maxLength;
}
longestWord("i love memomemo");

// 27** -  Confirm ending
function confirmEnd(str, target) {
  return str.slice(-target.length) === target;
}

confirmEnd("Bastian", "n");

// 28** - Repeat a string
function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : "";
}
repeatStringNumTimes("abc", 3);
repeatStr("hello", 4);

// 29** - isEven
function isEven(num) {
  return num % 2 === 0;
}
isEven(16);

// 30** - fizzbuzz
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

// 31 - isBoolean
function isBoolean(bool) {
  return typeof bool === "boolean";
}

// 32-title case
function titleCase(str) {
  var newStr = str.toLowerCase().split(" ");
  var result = newStr.map(item =>
    item.replace(item.charAt(0), item.charAt(0).toUpperCase())
  );
  return result.join(" ");
}
titleCase("i am a SCool moOl");

// 33- capitalize
function capitalize(str) {
  return str
    .charAt(0)
    .toUpperCase()
    .concat(str.slice(1));
}
capitalize("hello");

// 34** - isPalindrom
function isPalindrome(string) {
  return (
    string
      .split("")
      .reverse()
      .join("") === string
  );
}

// 35** - change htmlentities
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  var htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str
    .split("")
    .map(item => htmlEntities[item] || item)
    .join("");
}

//   36** - double character

function double(str) {
  return str
    .split("")
    .map(item => item.concat(item))
    .join("");
}
double("hello");

// 37** - reverse word if >5
function reverseF(str) {
  return str
    .split(" ")
    .map(item =>
      item.length === 5
        ? item
            .split("")
            .reverse()
            .join("")
        : item
    )
    .join(" ");
}
reverseF("i am there for babby tobby bonny");

// 38** - how may words of four letters

function lettersf(str) {
  return str.split(" ").filter(item => item.length === 4).length;
}
lettersf("i am here forr youu");

// 39** - anadgram
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
function isPalindrome(string) {
  return (
    string
      .split("")
      .reverse()
      .join("") === string
  );
}
// 40**
// function takes 2 arrays and return true if all values are squared
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let mapArr1 = {};
  let mapArr2 = {};
  for (let i of arr1) {
    mapArr1[i] = (mapArr1[i] || 0) + 1;
  }
  for (let i of arr2) {
    mapArr2[i] = (mapArr2[i] || 0) + 1;
  }
  for (let i in mapArr1) {
    if (!(i ** 2 in mapArr2)) {
      return false;
    }
    if (mapArr1[i] !== mapArr2[i ** 2]) {
      return false;
    }
    return true;
  }
}
same([1, 2, 3], [4, 1, 9]); //true
same([1, 2, 3], [1, 9]); //false
same([1, 2, 1], [1, 4, 4]); //false

// 41**
function countUniqueChar(arr) {
  let map = {};
  let result = [];
  for (let item of arr) {
    map[item] = (map[item] || 0) + 1;
  }
  for (let i in map) {
    result.push(i);
  }
  return result.length;
}
countUniqueChar([1, 1, 1, 1, 2]); //2
countUniqueChar([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); //7
countUniqueChar([-1, -2, -3, 0, 1]); //5

// 42**
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

// 43**
// given 2 integers and want to see if they have same frequency
function sameFrequency(num1, num2) {
  let arr1 = num1.toString();
  let arr2 = num2.toString();
  let map1 = {};
  let map2 = {};
  for (let item of arr1) {
    map1[item] = (map1[item] || 0) + 1;
  }
  for (let item of arr2) {
    map2[item] = (map2[item] || 0) + 1;
  }
  if (arr1.length !== arr2.length) return false;
  for (let i in map1) {
    if (map1[i] !== map2[i]) return false;
  }
  return true;
}
sameFrequency(182, 281);
sameFrequency(34, 14);
sameFrequency(3589578, 5879385);

// 45**
function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
  let arr = [];
  for (let key of arguments) {
    arr.push(key);
  }
  let arr1 = arr.filter((item, index, self) => self.indexOf(item) !== index);
  return arr1.length !== 0;
}
function areThereDuplicates() {
  let map = {};
  for (let key of arguments) {
    map[key] = (map[key] || 0) + 1;
  }
  for (let i in map) {
    if (map[i] > 1) return true;
  }
  return false;
}

// 46**
// flatten
function flatten(oldArr) {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

// 47**
function nestedEvenSum(obj, sum = 0) {
  for (var key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

// 48**
function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

// 49**
function collectStrings(obj) {
  var stringsArr = [];
  for (var key in obj) {
    if (typeof obj[key] === "string") {
      stringsArr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      stringsArr = stringsArr.concat(collectStrings(obj[key]));
    }
  }

  return stringsArr;
}

// 50**
function intersect(arr1, arr2) {
  arr1
    .filter((item, i, self) => self.indexOf(item) === i)
    .filter(subItem => arr2.indexOf(subItem) > -1);
}
intersect(
  ["mike", "sue", "tom", "kathy", "henry"],
  ["howey", "jim", "sue", "jennifer", "kathy", "hank", "alex"]
);
intersect(["sue", "sue", "kathy"], ["kathy", "kathy", "sue"]);

// 51**
function non(arr) {
  let map = {};
  let res = [];
  for (let item of arr) {
    map[item] = (map[item] || 0) + 1;
  }
  for (let item of arr) {
    if (map[item] === 1) return item;
  }
}
non([1, 1, 2, 2, 3, 4, 3, 4, 6, 4, 5]);

// 52**
var str = "Mr. Blue has a blue house";
var n = str.search(/blue/i);

// search string methods
var str = "A string to test JavaScript string methods";
// start search at index location 10
var pos = str.indexOf("string", 10); // 28

var str = "A string to test JavaScript string methods";
var pos = str.lastIndexOf("string"); // 28 from right to left search

var str = "A string to test JavaScript string methods";
var re = /String/i; // i flag for case-insensitive
var pos = str.search(re); // 2 takes a string or reqular expression

var str = "A string to test JavaScript string methods";
var re = /String/i;
console.log(re.test(str)); // true

// 53**
function curry(f) {
  const inputargs = f.length;
  const testargs = [];
  const curried = (...args) =>
    testargs.push(...args) >= inputargs
      ? f(...testargs.slice(0, inputargs))
      : curried;

  return curried;
}

// 54**
console.log(((2.0 == "2") == new Boolean(true)) == "1"); //true

// 55**
console.log(square(5));
/* ... */
function square(n) {
  return n * n;
} // 25

console.log(square(5));
var square = function(n) {
  return n * n;
}; // error
// In JavaScript, if you define a function as a variable,
//  the variable name will be hoisted but you cannot access
//  until JS execution encounters its definition. Aren’t you surprised?

// 56**
var simpleLibrary = (function() {
  var simpleLibrary = {
    a,
    b,
    add: function(a, b) {
      return a + b;
    },
    subtract: function(a, b) {
      return a - b;
    }
  };
  return simpleLibrary;
})();

// 57**
pi = 3.14;
function circumference(radius) {
  pi = 3.14159;
  console.log(2 * pi * radius); // Prints "12.56636" not "12.56"
}
circumference(2);

// 58**
var a = 10;
function Foo() {
  if (true) {
    let a = 4;
  }

  alert(a); // alerts '10' because the 'let' keyword
}
Foo();

// 59**
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

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Header />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return;
    <h1>Header Component</h1>;
  }
}
ReactDOM.render(<MyComponent />, document.getElementById("content"));

// 60**
typeof bar === "object";

console.log(bar !== null && bar.constructor === Object)(
  // 61**
  function() {
    var a = (b = 3);
  }
)();
(function() {
  b = 3;
  var a = b;
})();

console.log("a defined? " + (typeof a === "undefined")); //true
console.log("b defined? " + (typeof b === "undefined")); //false

function hoist() {
  console.log(message);
  var message = "Hoisting is all the rage!";
}
hoist();
// interepts to
function hoist() {
  var message;
  console.log(message);
  message = "Hoisting is all the rage!";
}
hoist(); // Ouput: undefined

function hoist() {
  a = 20;
  var b = 100;
}

hoist();

console.log(a);
/* 
  Accessible as a global variable outside hoist() function
  Output: 20
  */

console.log(b);
/*
  Since it was declared, it is confined to the hoist() function scope.
  We can't print it out outside the confines of the hoist() function.
  Output: ReferenceError: b is not defined
  */

// 62**
var myObject = {
  foo: "bar",
  func: function() {
    var self = this;
    console.log("outer func:  this.foo = " + this.foo);
    console.log("outer func:  self.foo = " + self.foo);
    (function() {
      console.log("inner func:  this.foo = " + this.foo);
      console.log("inner func:  self.foo = " + self.foo);
    })();
  }
};
myObject.func();

// 63**

function foo1() {
  return {
    bar: "hello"
  };
}

function foo2() {
  return;
  {
    bar: "hello";
  }
}

// 64**
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);

// 65**
(function() {
  console.log(1);
  setTimeout(function() {
    console.log(2);
  }, 1000);
  setTimeout(function() {
    console.log(3);
  }, 0);
  console.log(4);
})();

// 66**
console.log(1 + "2" + "2"); //122
console.log(1 + +"2" + "2"); // 32
console.log(1 + -"1" + "2"); //02
console.log(+"1" + "1" + "2"); //112
console.log("A" - "B" + "2"); //NaN2
console.log("A" - "B" + 2); //NaN

// 67**
var b = 1;
function outer() {
  var b = 2;
  function inner() {
    b++;
    var b = 3;
    console.log(b);
  }
  inner();
}
outer();

// 68**
console.log(typeof typeof 1);

// 67**
function check(letter, str) {
  let map = {};
  for (let item of str) {
    map[item] = (map[item] || 0) + 1;
  }
  for (let i in map) {
    return map[letter];
  }
}
console.log(check("l", "hello my littlllle"));
function charCount(myChar, str) {
  return [...str].filter(x => x === myChar).length;
}

// 68**
function sortOddNumber(arr) {
  const odd = arr.filter(x => x % 2).sort((a, b) => a - b);
  return arr.map(x => (x % 2 ? odd.shift() : x));
}
console.log(sortOddNumber([1, 13, 7, 3, 2, 9, 5])); //[ 1, 3, 5, 7, 2, 9, 13 ]

// 69**
// k is in the arr
function findNumber(arr, k) {
  if (!arr.includes(k)) {
    return "NO";
  } else {
    return "YES";
  }
}

// 70**
function XO(str) {
  let x = str
    .toLowerCase()
    .split("")
    .filter(x => x === "x").length;
  let o = str
    .toLowerCase()
    .split("")
    .filter(x => x === "o").length;
  return x === o;
}

function compare(str) {
  let map = {};
  for (let item of str) {
    map[item] = (map[item] || 0) + 1;
  }
  return map["x"] === map["o"];
}
console.log(compare("xxxoooxoxoxox"));

// 71** compare objects
function compareObjects(obj1, obj2) {
  for (var key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }

  for (var key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (obj2[key] !== obj2[key]) {
        return false;
      }
    }
  }
  return true;
}

// which HTTP server does ajax requires

// 71**
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
    name: fruit.name
  })
);
console.log(outData);
