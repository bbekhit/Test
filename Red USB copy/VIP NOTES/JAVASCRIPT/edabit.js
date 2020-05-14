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
