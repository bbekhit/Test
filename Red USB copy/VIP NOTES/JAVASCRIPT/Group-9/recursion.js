// When a function solves a task, in the process it can call many other functions. A partial case of this is when a function calls itself. That’s called recursion.

// example - 1
function pow(x, n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= x;
  }
  return result;
}

function pow(x, n) {
  return n === 1 ? x : x * pow(x, n - 1);
}

// example - 2
function fac(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function fac(n) {
  return n === 1 ? 1 : n * fac(n - 1);
}

// example - 3
function odd(arr) {
  let result = [];
  for (let item of arr) {
    if (item % 2 !== 0) {
      result.push(item);
    }
  }
  return result;
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
  // result.push(...odd(arr.slice(1))); 
  return result;
}

// example -4
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

function product(arr){
  let res = 1;
  if(arr.length === 0) return res;
  res *= arr[0]
  res *= product(arr.slice(1))
  return res;
}
console.log(product([1,2,3,4,5]));

// example -5
function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

function reverse(str){
  if(str.length === 1) return str;
  return str.slice(-1) + reverse(str.slice(0, str.length - 1));
 }

function reverse(num) {
  let temp = Math.abs(num)
    .toString()
    .split("")
    .reverse()
    .join("");
  return temp * Math.sign(num);
}

function reverse(num) {
  let str = Math.abs(num).toString();
  if (str.length <= 1) return str;
  let temp = reverse(str.slice(1)) + str[0];
  return temp * Math.sign(num);
}

// example -6
function isPalindrom(str) {
  return (
    str ===
    str
      .split("")
      .reverse()
      .join("")
  );
}

function isPalindrom(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrom(str.slice(1, -1));
  return false;
}

// example -7
let company = {
  sales: [
    {
      name: "John",
      salary: 1000
    },
    {
      name: "Alice",
      salary: 600
    }
  ],

  development: {
    sites: [
      {
        name: "Peter",
        salary: 2000
      },
      {
        name: "Alex",
        salary: 1800
      }
    ],

    internals: [
      {
        name: "Jack",
        salary: 1300
      }
    ]
  }
};
// The function to do the job
function sumSalaries(department) {
  if (Array.isArray(department)) {
    // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else {
    // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}

// example -8
function flatten(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log(flatten([1, [2], [[[[3]]]]]));

// example -9
var tribonacci = function(n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
};

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& 
function odd(arr){
  let res = [];
  if(arr.length === 0) return res;
  if(arr[0] % 2) res.push(arr[0]);
  res = res.concat(odd(arr.slice(1)))
  return res;
}

console.log(odd([1,2,3,4,5,6,7,8,9]));

//
function flatten(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log(flatten([1,3,[3,[4,5,[[6,7]]]]]));

//
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
console.log(cloneObj({name:"bo",skills:{
  first:"swimming",
  second:{
    premier:"Running"
  }
}}));

//
function reverse(str){
  if(str.length === 1) return str;
  return reverse(str.slice(1)) + str[0]
}

// 
function isPalindrom(str){
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
  return false;
}

// 
function fac(num){
  if(num <= 1) return 1;
  if(num < 0) return 0;
  return num * fac(n - 1)
}

//
function product(arr){
  if(arr.length ===0) return 1;
  return arr[0] * product(arr.slice(1))
}

//
function pow(x,n){
  if(n === 1) return x;
  return x * pow(x, n-1)
}

//
function someRecursive(array, callback){
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1),callback);
}

//
function capitalizeFirst (arr) {
  // add whatever parameters you deem necessary - good luck!
  let res = [];
  if(arr.length === 0) return res;
  res.push(`${arr[0][0].toUpperCase()}${arr[0].slice(1)}`);
  res = res.concat(capitalizeFirst(arr.slice(1)));
  return res;
}

//
function nestedEvenSum (obj, sum=0) {
  for (var key in obj) {
      if (typeof obj[key] === 'object'){
          sum += nestedEvenSum(obj[key]);
      } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
          sum += obj[key];
      }
  }
  return sum;
}

//
function capitalizeWords (arr) {
  // add whatever parameters you deem necessary - good luck!
  let res = [];
  if(arr.length === 0) return res;
  res.push(arr[0].toUpperCase());
  res = res.concat(capitalizeWords(arr.slice(1)));
  return res;
}

// 
function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

//
function collectStrings(obj) {
  var stringsArr = [];
  for(var key in obj) {
      if(typeof obj[key] === 'string') {
          stringsArr.push(obj[key]);
      }
      else if(typeof obj[key] === 'object') {
          stringsArr = stringsArr.concat(collectStrings(obj[key]));
      }
  }

  return stringsArr;
}
