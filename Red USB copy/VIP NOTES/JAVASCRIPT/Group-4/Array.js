// to manage ordered list and insert between two items
// Array is a special kind of object, suited to storing and managing ordered data items.

// Arrays are mutuable so i can change a part of it, it's not one unit
// Arrays size isn't defined, it's open sized in JS

// 1
let arr = new Array();
let arr1 = [];

// 2
// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
// get the function at index 3 and run it
arr[3](); // hello

// 3
for (let i=0; i<arr.length; i++) //– works fastest, old-browser-compatible.
for (let item of arr) //– the modern syntax for items only,
for (let i in arr) //– never use.

// The loop for..in iterates over all properties, not only the numeric ones.

// There are so-called “array-like” objects in the browser and in other environments, that look like arrays. That is, they have length and indexes properties, but they may also have other non-numeric properties and methods, which we usually don’t need. The for..in loop will list them though. So if we need to work with array-like objects, then these “extra” properties can become a problem.

// The for..in loop is optimized for generic objects, not arrays, and thus is 10-100 times slower. Of course, it’s still very fast. The speedup may only matter in bottlenecks. But still we should be aware of the difference.

let fruits = ["Apple", "Orange", "Plum"];
// iterates over array elements
for (let fruit of fruits) {
  alert( fruit );
}

let arr = ["Apple", "Orange", "Pear"];
for (let key in arr) {
  alert( arr[key] ); // Apple, Orange, Pear
}

// 4
push(unshift),pop // are faster

// 5 copy by reference
let fruits = ["Banana"]
let arr = fruits; // copy by reference (two variables reference the same array)
alert( arr === fruits ); // true
arr.push("Pear"); // modify the array by reference
alert( fruits ); // Banana, Pear - 2 items now

// 6
// The ways to misuse an array:

// Add a non-numeric property like arr.test = 5.
// Make holes, like: add arr[0] and then arr[1000] (and nothing between them).
// Fill the array in the reverse order, like arr[1000], arr[999] and so on.

// 7 VIP VIP length
let fruits = [];
fruits[123] = "Apple";
alert( fruits.length ); // 124

let arr = [1, 2, 3, 4, 5];
arr.length = 2; // truncate to 2 elements
alert( arr ); // [1, 2]
arr.length = 5; // return length back
alert( arr[3] ); // undefined: the values do not return

// So, the simplest way to clear the array is: arr.length = 0;

// 8
let arr = new Array("Apple", "Pear", "etc");

let arr = new Array(2)
arr // [2 * undefined]

// 9 array middle
styles[Math.floor((styles.length - 1) / 2)] = "Classics";

// 10 // VIP
let arr = ["a", "b"];
arr.push(function() {
  alert( this );
})
arr[2](); // "a","b",function

// 11
let arr = [1,2,3,4,5]
arr.fill("*",1,3)
arr

// 12
let arr = [1,2,3,4,5]
arr.toString() // "1,2,3,4,5"
arr.join() // "1,2,3,4,5"
arr.join(" ") //'1 2 3 4 5'


// SUMMARY
let arr = [];
let arr = new Array("apple","orange") // gives an empty array new Array(2)

// by reference 

let arr = [];
arr[23] = 100; // arr.length = 24



