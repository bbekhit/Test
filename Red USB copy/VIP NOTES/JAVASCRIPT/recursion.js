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
  return result;
}

// example -4
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

// example -5
function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
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
