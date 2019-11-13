// it has no block scope
if (true) {
  var test = true; // use "var" instead of "let"
}
alert(test); // true, the variable lives after if
// ****************************************************

function sayHi() {
  "use strict"
  phrase = "Hello";
  alert(phrase); // error phrase not defined
}
sayHi();
// without 'use strict' a global var phrase is created
// ****************************************************

function sayHi() {
  phrase = "Hello";
  alert(phrase);
  var phrase;
}
sayHi();

function sayHi() {
  var phrase;
  phrase = "Hello";
  alert(phrase);
}
sayHi();

// ****************************************************
// function level
function sayHi() {
  if (true) {
    var phrase = "Hello";
  }

  alert(phrase); // works
}
sayHi();
alert(phrase); // Error: phrase is not defined (Check the Developer Console)
// ****************************************************

// So in the example above, if (false) branch never executes, but that doesn’t matter. The var inside it is processed in the beginning of the function, so at the moment of (*) the variable exists.

function sayHi() {
  phrase = "Hello"; // (*)
  if (false) {
    var phrase;
  }
  alert(phrase);
}
sayHi();

// ****************************************************
function sayHi() {
  alert(phrase); // undefined
  var phrase = "Hello";
}
sayHi();

function sayHi() {
  var phrase; // declaration works at the start...
  alert(phrase); // undefined
  phrase = "Hello"; // ...assignment - when the execution reaches it.
}
sayHi();
// ****************************************************
