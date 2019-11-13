// Please note that methods sort, reverse and splice modify the array itself.

// 1 Adding to array
arr.push;
arr.unshift;

// 2 Delete from array at certain point //accepts negative
let arr = ["I", "go", "home"];
delete arr[1]; // remove "go"
// now arr = ["I",  , "home"];
alert(arr.length); // 3
alert(arr[1]); // undefined

let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // from index 1 remove 1 element
alert(arr); // ["I", "JavaScript"]

let arr = ["I", "study", "JavaScript", "right", "now"];
// remove 2 first elements
let removed = arr.splice(0, 2);
alert(removed); // "I", "study" <-- array of removed elements

let arr = ["I", "study", "JavaScript"];
// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");
alert(arr); // "I", "study", "complex", "language", "JavaScript"

let arr = [1, 2, 5];
// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4); // the -1 is translated to arr.length-1 = 3 -1 = 2
alert(arr); // 1,2,3,4,5

// 3 SLICE accepts negative
let arr = ["t", "e", "s", "t"];
alert(arr.slice(1, 3)); // e,s (copy from 1 to 3)
alert(arr.slice(-2)); // s,t (copy from -2 till the end)

// 4 CONCAT
let arr = [1, 2];
// create an array from: arr and [3,4]
alert(arr.concat([3, 4])); // 1,2,3,4
// create an array from: arr and [3,4] and [5,6]
alert(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
// create an array from: arr and [3,4], then add values 5 and 6
alert(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

// 5 iterate
forEach() // for // for .. of
  [("Bilbo", "Gandalf", "Nazgul")].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
  });
//   The result of the function (if it returns any) is thrown away and ignored.

// 6 SEARCH an array
arr.indexOf();
arr.lastIndexOf();
arr.includes();
let arr = [1, 0, false];
alert(arr.indexOf(0)); // 1
alert(arr.indexOf(false)); // 2
alert(arr.indexOf(null)); // -1
alert(arr.includes(1)); // true

// VIP VIP VIP
const arr = [NaN];
alert(arr.indexOf(NaN)); // -1 (should be 0, but === equality doesn't work for NaN)
alert(arr.includes(NaN)); // true (correct)

arr.find; // arr.findIndex
// Imagine we have an array of objects. How do we find an object with the specific condition?
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" }
];
let user = users.find(item => item.id == 1);
alert(user.name); // John

// find returns item or undefined
// findIndex returns index or -1

arr.filter();
// The find method looks for a single (first) element that makes the function return true.
// If there may be many, we can use arr.filter(fn).
// The syntax is similar to find, but filter returns an array of all matching elements:

// 7 Transforming

// When we need to iterate and return the data for each element – we can use map.
arr.map();
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6

arr.sort();
arr.sort((a, b) => a - b);

arr.reverse();
let arr = [1, 2, 3, 4, 5];
arr.reverse();
alert(arr); // 5,4,3,2,1

split();
let names = "Bilbo, Gandalf, Nazgul";
let arr = names.split(", ");
for (let name of arr) {
  alert(`A message to ${name}.`); // A message to Bilbo  (and other names)
}

join();
let arr = ["Bilbo", "Gandalf", "Nazgul"];
let str = arr.join(";"); // glue the array into a string using ;
alert(str); // Bilbo;Gandalf;Nazgul

reduce();
groupIds.reduce(
  (arr, groupId) => arr.concat(radarSelectors.getRadarsByGroup(store, groupId)),
  []
);

alert(typeof {}); // object
alert(typeof []); // same

alert(Array.isArray({})); // false
alert(Array.isArray([])); // true

arr.some(fn) / arr.every(fn); //checks the array.
// The function fn is called on each element of the array similar to map.
// If any/all results are true, returns true, otherwise false.

Array.from();
// There’s a universal method Array.from that takes an iterable or array-like value and makes a “real” Array from it. Then we can call array methods on it.
