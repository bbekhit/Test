// 1.
function specialReverse(s, c) {
  return s
    .split(" ")
    .map((item) => (item[0] === c ? item.split("").reverse().join("") : item))
    .join(" ");
}

// 2.
const redundant = (str) => () => str;
function redundant(str) {
  return function () {
    return str;
  };
}

// 3.
function afterNYears(names, n) {
  for (let i in names) {
    names[i] = names[i] + Math.abs(n);
  }
  return names;
}

// 4.
function countTrue(arr) {
  return arr.filter(Boolean).length;
}
function countTrue(arr) {
  return arr.filter((item) => item).length;
}

// 5.
function identicalFilter(arr) {
  return arr.filter((str) => new Set(str).size === 1);
}
identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]);
// ["aaaaaa", "d", "eeee"]

// 6.
const transformUpvotes = (str) =>
  str
    .split(" ")
    .map((num) => (num.includes("k") ? parseFloat(num) * 1000 : Number(num)));

function transformUpvotes(str) {
  return str.split(" ").map((item) => {
    if (isNaN(Number(item))) {
      return parseFloat(item) * 1000;
    } else {
      return Number(item);
    }
  });
}
transformUpvotes("20.3k 3.8k 7.7k 992"); //[20300, 3800, 7700, 992]

// 7.
function censor(str) {
  return str
    .split(" ")
    .map((item) => {
      if (item.length > 4) {
        for (let i = 0; i < item.length; i++) {
          item = item.replace(item[i], "*");
        }
        return item;
      } else {
        return item;
      }
    })
    .join(" ");
}
const censor = (str) =>
  str
    .split(" ")
    .map((word) => (word.length > 4 ? "*".repeat(word.length) : word))
    .join(" ");
censor("The code is fourty"); // "The code is ******"

// 8.
function clearFog(str) {
  if (str.indexOf("fog") === -1) {
    return "It's a clear day!";
  } else {
    return str.replace(/[fog]/gi, "");
  }
}
const clearFog = (string) => {
  return /[fog]/gi.test(string) // str.match(/[fog]/g)
    ? string.replace(/[fog]/gi, "")
    : "It's a clear day!";
};
clearFog("sky"); // "It's a clear day!"
clearFog("fogfogfffoooofftreesggfoogfog"); // "trees"

// 9.
function arrayOfMultiples(num, length) {
  let arr = [num];
  for (let i = 0; i < length - 1; i++) {
    arr[i + 1] = arr[i] + num;
  }
  return arr;
}
function arrayOfMultiples(num, length) {
  return [...Array(length)].map((_, i) => num * (i + 1));
}
console.log(arrayOfMultiples(7, 5)); // [7,14,21,28,35]

//10.
// check each number is one odd and one even
function oneOddOneEven(n) {
	let [x,y] = [...String(n)]
	return x % 2 !== y % 2
}

//11.
class Rectangle {
  constructor(sideA,sideB){
    this.sideA = sideA;
    this.sideB = sideB;
  }
  getArea(){return this.sideA*this.sideB};
  getPerimeter(){return (this.sideA + this.sideB) *2 };
}
class Circle {
	constructor(r){
    this.r = r;
  }
  getArea(){return Math.PI * this.r**2}
  getPerimeter(){return 2 * Math.PI * this.r}
}

// 12. 
function concat(...args) {
	let result = [];
	let arr = [...args]
	arr.map(item => result.push(...item));
	return result;
}
function concat(...args) {
	return [].concat(...args)
}
concat([1, 2, 3], [4, 5], [6, 7]) //[1, 2, 3, 4, 5, 6, 7]
