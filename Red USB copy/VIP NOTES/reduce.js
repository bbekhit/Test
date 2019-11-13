Array.prototype.randomElement = function() {
  return this[Math.floor(Math.random() * this.length)];
};
// Now I can get a random array element by just typing:
var myRandomElement = myArray.randomElement();

Array.prototype.reduce = function(f, value) {
  for (var i = 0; i < this.length; i++) {
    value = f(this[i], value);
  }
  return value;
};

function extractValue(arr, key) {
  return arr.reduce((acc, next) => {
    acc.push(next[key]);
    return acc;
  }, []);
}

var add = function(a, b) {
  return a + b;
};

var data = [1, 3, 2, 4, 5, 6, 7, 8, 9];
var result = data.reduce(add, 0);
alert(result);

Array.prototype.mfilter = function(fun) {
  var filtered = [];
  for (let i = 0; i < this.length; i++) {
    if (fun(this[i], i, this)) filtered.push(this[i]);
  }
  return filtered;
};
var returnedArr = [1, 2, 3, 4, 5, 6].mfilter(over5);
let over5 = function(item, i, arr) {
  return item > 5;
};
console.log(returnedArr);

// takes a callback function and can turn the array to another data type
// arr.reduce((optional or first of Array, second of
// array or first of array,index, array) => {}, optional)

// [1,2,3,4,5].reduce((accumalator,nextvalue) => accumalator + nextvalue)
// accumalator   nextvalue  return
//  1             2           3
//  3             3           6
//  6             4           10
//  10            5            15

let arr = ["Tim", "Matt"];
let res = arr.reduce((a, b) => `${a} ${b}`, "The instructors are");
console.log(res);

// example
function extractValue(arr, key) {
  return arr.reduce(function(acc, next) {
    acc.push(next[key]);
    return acc;
  }, []);
}
function extractValue(arr, key) {
  return arr.reduce((acc, next) => {
    acc.push(next[key]);
    return acc;
  }, []);
}
let res = extractValue([{ name: "beto" }, { name: "seto" }], "name");
console.log(res);

// example
function count(str) {
  let arr = str.split("");
  return arr.reduce((a, b) => {
    if (a[b] === undefined) {
      a[b] = 1;
    } else {
      a[b]++;
    }
    return a;
  }, {});
}
console.log(count("hello"));
