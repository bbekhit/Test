
// 2- Convert to fahrenheit
function convertToF(celisus) {
  return (celisus * 9) / 5 + 32;
}






















// 14-mutation
function mutateArr(arr) {
  var firstIndex = arr[0].toLowerCase();
  var secondIndex = arr[1].toLowerCase();
  for (var i = 0; i < firstIndex.length; i++) {
    if (secondIndex.indexOf(firstIndex[i]) < 0) {
      return false;
    }
  }
  return true;
}

mutateArr(["hello", "hey"]);

// 15-where do i belong
function findIndexInArr(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

findIndexInArr([1, 3, 5], 7);

// 17- sum of all numbers
function sumAll(arr) {
  let sorted = arr.sort();
  let sum = 0;
  for (var i = sorted[0]; i <= sorted[1]; i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);

// 19-
function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

spinalCase("i am here to go");

// 20- pig-latin
function pigLatinWord(word) {
  return word.slice(1).concat(word[0], "ay");
}

pigLatinWord("fish");

function pigLatinSentence(sentence) {
  var words = sentence.split(" ");
  var result = [];
  for (var i = 0; i < words.length; i++) {
    result.push(pigLatinWord(words[i]));
  }
  return result.join(" ");
}

// 21-map(parsInt)
// * `map` is a method on arrays that
//  executes a callback on every element of the array.

// * In this case,
// we've passed `parseInt` as our callback,
// so we expect the snippet to run `parseInt` on every number in the array `[1, 2, 3]`.
// * In particular, `map` passes the index of the current element to `parseInt`,
//  which it uses as a base. So, our function calls look like:

// 22-maximin
function maximin(arr) {
  var minimum = (maximum = arr[0]);

  for (var i = 0; i < arr.length; i += 1) {
    var candidate = arr[i];

    if (candidate > maximum) maximum = candidate;
    if (candidate < minimum) minimum = candidate;
  }

  return [minimum, maximum];
}



function palindrome(str) {
  return (
    str.replace(/[\W_]/g, "").toLowerCase() ===
    str
    .replace(/[\W_]/g, "")
    .toLowerCase()
    .split("")
    .reverse()
    .join("")
  );
}

// 24 - sum closures
//closure exists when an inner function makes use of variables declared
//in an outer function which previously returned

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

function sum(x, y) {
  if (arguments.length >= 2) return x + y;
  else if (arguments.length === 1)
    return function (z) {
      return x + z;
    };
}

function addTogether(x, y) {
  if (arguments.length === 2) {
    if (typeof x !== "number" && typeof y !== "number") {
      return undefined;
    }
    return x + y;
  } else if (arguments.length === 1) {
    return function (z) {
      if (typeof z !== "number") {
        return undefined;
      }
      return x + z;
    };
  }
}

function addTogether() {
  var args = new Array(arguments.length);
  //Storing the arguments in an array
  for (var i = 0; i < args.length; ++i) {
    args[i] = arguments[i];
  }
  //Check for the arguments length
  if (args.length === 2) {
    //If there are two arguments,check for the type of both arguments
    //Use typeof to check the type of the argument(both should be numbers)
    if (typeof args[0] !== "number" || typeof args[1] !== "number") {
      return undefined;
    }
    return args[0] + args[1];
  }
  //When only one argument is provided
  if (args.length === 1) {
    var a = args[0];
    //Check the  argument using typeof
    if (typeof a !== "number") {
      return undefined;
    } else {
      //Making use of closures
      return function (b) {
        //Checking the second argument
        if (typeof b !== "number") {
          return undefined;
        } else return a + b;
      };
    }
  }
}

//   25-function myReplace
function myReplace(str, before, after) {
  if (/[A-Z]/.test(before[0])) {
    after = after
      .charAt(0)
      .toUpperCase()
      .concat(after.slice(1));
  }
  return str.replace(before, after);
}

function myReplace(str, before, after) {
  return str;
}

//   26-pairElement
function pairElement(str) {
  var pairs = {
    T: "A",
    A: "T",
    G: "C",
    C: "G"
  };
  var newArr = str.split("");
  for (var i = 0; i < newArr.length; i++) {
    newArr[i] = [newArr[i], pairs[newArr[i]]];
  }
  return newArr;
}

// 27-missing letter
function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
      hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {
      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

//   28-getting afinal array from a given arrays with no repeating
function uniteUnique(arr1, arr2, arr3) {
  var resultArr = [];

  for (var i = 0; i < arguments.length; i++) {
    var arrArg = arguments[i];
    for (var j = 0; j < arrArg.length; j++) {
      var indexValue = arrArg[j];

      if (resultArr.indexOf(indexValue) < 0) {
        resultArr.push(indexValue);
      }
    }
  }
  return resultArr;
}


// 30-
function sumPrimes(num) {
  // function to check if the number presented is prime
  function isPrime(number) {
    for (i = 2; i <= number; i++) {
      if (number % i === 0 && number != i) {
        // return true if it is divisible by any number that is not itself.
        return false;
      }
    }
    // if it passes the for loops conditions it is a prime
    return true;
  }
  // 1 is not a prime, so return nothing, also stops the recursive calls.
  if (num === 1) {
    return 0;
  }
  // Check if your number is not prime
  if (isPrime(num) === false) {
    // for non primes check the next number down from your maximum number, do not add anything to your answer
    return sumPrimes(num - 1);
  }

  // Check if your number is prime
  if (isPrime(num) === true) {
    // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function.
    return num + sumPrimes(num - 1);
  }
}
// test here
sumPrimes(10);



// 31- drop it
function dropElements(arr, func) {
  return arr.slice(
    arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length,
    arr.length
  );
}

// test here
dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
});


//35-sorting with chcking

function sortNumsAscending(arr) {
  if (arr === null) return [];
  return arr.sort((a, b) => a - b);
}

// 36-max and min
function maxmin(arr) {
  return [Math.max(...arr), Math.min(...arr)];
}

maxmin([1, 3, 90]);

function minmax(arr) {
  arr = arr.sort((a, b) => a - b);
  return [arr[0], arr[arr.length - 1]];
}
maxmin([1, 3, 90]);

/

// 38-sort alphabetically
function alphabetically(str) {
  //return str.split("").sort().join("")
  return Array.from(str)
    .sort()
    .join("");
}

alphabetically("ikladebfrt");

// 39-replace first name with last name
function shuffle(str) {
  let newArr = str.split(" ");
  return newArr[1].concat(" ", newArr[0]);
}

shuffle("Boutros Bekhit");

// 41-multiply by length
// multiply the items in an array
function MultiplyByLength(arr) {
  return arr.map(item => item * arr.length);
}

// 42-isEvenOrOdd
const isEvenOrOdd = num => (num % 2 === 0 ? "even" : "odd");

isEvenOrOdd(45);

//43-
<
body >
  <
  div class = "container" >
  <
  div id = "tabsHolder" >
  <
  button style = "float:left;width:50%"
class = "button"
id = "tabOne" >
  TAB A <
  /button> <
button style = "width:50%;"
class = "button"
id = "tabTwo" >
  TAB B <
  /button> < /
div > <
  div id = "content" > Lorem ipsum dolor sit amet, consectetur. < /div> < /
div > <
  /body>;

let tab1 = document.getElementById("tabOne"),
  tab2 = document.getElementById("tabTwo"),
  content = document.getElementById("content");

function firstTabContent() {
  content.innerHTML = "First tab";
}

function secondTabContent() {
  content.innerHTML = "Second tab";
}

// Function to change the content
function modifyContent(e) {
  if (e.target.id === "tabOne") {
    firstTabContent();
  }
  if (e.target.id === "tabTwo") {
    secondTabContent();
  }
}
// add event listener
let tabsHolder = document.getElementById("tabsHolder");
tabsHolder.addEventListener("click", modifyContent, false);

// default tab
window.addEventListener("load", function (event) {
  firstTabContent();
});

// .container {
//   width:190px;
//   height:200px;
//   border : 1px solid black;
// }

// .button {
//   padding:2px;
//   border : 1px solid black;
// }

// #content{
//   padding:15px;
// }

//44 my solution
<
div class = "container" >
  <
  button id = "btnOne"
style = "float:left;width:50%"
class = "btn" >
  tab 1 < /button> <button id = "btnTwo"
style = "width:50%"
class = "btn" >
  tab 2 < /button> <div id = "sent" > <
  h3 > tab1 < /h3> </div > < /div>;

var tab1 = document.querySelector("#btnOne");
var tab2 = document.querySelector("#btnTwo");
var content = document.querySelector("#sent");

tab1.addEventListener("click", function () {
  content.innerHTML = "tab1"
});

tab2.addEventListener("click", function () {
  content.innerHTML = "tab2";
  document.body.style.backgroundColor = "red";
});

// .btn{
//   padding:2px;
//   border:1px solid black
// }

// #sent {

//   text-align:center;
// }

// h3 {
//   text-align:center;
// }

// 48-prototype
// every constructor function has a property called a prototype
// the prototype object has a property called constructor which points bact to the function

//this ===is a reserved keyword which value is determined at execution
//it is set using the new key word or binding

function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
}

var person1 = new Person("boutros", "bekhit");
var person = new Object()


// 50- global and block scope

var a = 2;
let b = 3;
const c = 4;

// function print(){
//   var a = 4;
//   let b = 5;
//   let c = 6
//   console.log("function scope: ", a,b,c)
// }
// print()
// if (true) {
//   var a = 15;
//   let b = 16;
//   const c = 17;
//   console.log("block scope: ", a, b, c);
//}
console.log("global scope: ", a, b, c);

for (var i = 0; i < 5; i += 1) {
  button.addEventListener("click", function () {
    console.log(i);
  })
}
before - after - first - line - first - letter pseudo elements
p::first - line {
  color: red;
}

psuedo classes
hover - focus - nth - child - focus




//52-function declare vs function expression
function bar() {
  return console.log("hello");
}

//function expression
const square = function (x) {
  return x * x;
};
console.log(square(8));