// https://jsfiddle.net/nyg7104c/
Array.prototype.triple = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i] * 3;
  }
};
// Implement the triple functionality as shown below
// e.g. -
const arr = [1, 5, 7, 9];
arr.triple(); // does not return anything
console.log(arr); //o/p -> [3, 15, 21, 27]
let arr = [1, 5, 7, 9];
arr.triple();
/* console.log('Callinhg tripple -', arr); */

function cloneObject(obj) {
  var clone = {};
  for (var i in obj) {
    if (typeof obj[i] == "object" && obj[i] != null)
      clone[i] = cloneObject(obj[i]);
    else clone[i] = obj[i];
  }
  return clone;
}
let o = {
  a: "My name",
  b: 23,
  c: function() {
    console.log("Hello there");
  },
  d: {
    e: 45,
    f: function() {
      console.log("Hello there");
    }
  }
};
let result = cloneObject(0);
console.log(result);

Array.prototype.myFind = function(num) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === num) return "YES";
  }
  return "NO";
};
