// A declared function is “saved for later use”, and will be executed later, when it is invoked (called).
// Just as Variable Declarations must start with “var”, Function Declarations must begin with “function”.
// e.g.

function bar() {
  return 3;
}

// function is only declared here .For using it, it must be invoked using function name. e.g bar();
// What is a Function Expression?
// A JavaScript function can also be defined using an expression.

//A function expression can be stored in a variable:

var x = function(a, b) {
  return a * b;
};

//After a function expression has been stored in a variable, the variable can
//be used as a function. Functions stored in
//variables do not need function names.
//They are always invoked (called) using the variable name.

// name property
function sayHi() {
  alert("Hi");
}
alert(sayHi.name); // sayHi

let sayHi = function() {
  alert("Hi");
};
alert(sayHi.name); // sayHi (there's a name!)

function f(sayHi = function() {}) {
  alert(sayHi.name); // sayHi (works!)
}
f();

// length property
function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}
alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2

// add own property
function sayHi() {
  alert("Hi");
  // let's count how many times we run
  sayHi.counter++;
}
sayHi.counter = 0; // initial value
sayHi(); // Hi
sayHi(); // Hi
alert( `Called ${sayHi.counter} times` ); // Called 2 times

// rewriting counter example with adding property to a function
function makeCounter() {
  // instead of:
  // let count = 0
  function counter() {
    return counter.count++;
  };
  counter.count = 0;
  return counter;
}
let counter = makeCounter();
alert( counter() ); // 0
alert( counter() ); // 1

// 
function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }
  counter.set = value => count = value;
  counter.decrease = () => count--;
  return counter;
}
let res = makeCounter()
alert(res())
alert(res.set(4)) 
alert(res.decrease())

// VIP VIP VIP
function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

alert( sum(1)(2) ); // 3
alert( sum(5)(-1)(2) ); // 6
alert( sum(6)(-1)(-2)(-3) ); // 0
alert( sum(0)(1)(2)(3)(4)(5) ); // 15

// NFE 
- // to call itself if needed
- // if we use sayHi to recall and it might have been changed it will throw an error

let sayHi = function func(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func("Guest"); // use func to re-call itself
  }
};
sayHi(); // Hello, Guest
// But this won't work:
func(); // Error, func is not defined (not visible outside of the function)


// new Function
function getFunc() {
  let value = "test";

  let func = new Function('alert(value)');

  return func;
}

getFunc()(); // error: value is not defined


function getFunc() {
  let value = "test";
  let func = function() { alert(value); };
  return func;
}

getFunc()(); // "test", from the Lexical Environment of getFunc