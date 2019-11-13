// a function that calls itself
// cleaner alternative to iteration

function countdown(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}
countdown(5);

function countdown(num) {
  if (num <= 0) {
    console.log("done");
    return;
  }
  console.log(num);
  num--;
  countdown(num);
}

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

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

function recursiveRange(x) {
  if (x === 0) return 0;
  return x + recursiveRange(x - 1);
}

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}
