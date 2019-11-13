// Hoisting is JavaScript's
// default behavior of moving all declarations to the top of the current scope
// (to the top of the current script or the current function).

// In JavaScript, a variable can be declared after it has been used.
// In other words; a variable can be used before it has been declared.

console.log(name);
var name; //not error

console.log(name);
var name = "john"; // still give undefined as only the declaration been hoisted

console.log(name);
let name; // error

function hoist() {
  console.log(age);
  var age = 10;
}
hoist(); // undefined

function hoist() {
  console.log(message);
  var message = "Hoisting is all the rage!";
}

hoist(); //undefined

function hoist() {
  console.log(message);
  let message = "Hoisting is all the rage!";
}
hoist(); //error
