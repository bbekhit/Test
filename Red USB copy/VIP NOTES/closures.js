// A closure is a function having access to the parent scope, even after the parent function has closed.

let x = 10;
function foo() {
  let y = 20; // free variable
  function bar() {
    let z = 15; // free variable
    return x + y + z;
  }
  return bar;
}
var test = foo();
console.log(test()); // 45
// *********************************************************************************************
// vip vip vip vip
// when i stored the value of the return of foo() in test it is a function so i can say
// console.log(test()) but if it just returns a normal value as belwo so its no more
// a function
let x = 10;
function foo() {
  let y = 20; // free variable
  function bar() {
    let z = 15; // free variable
    return x + y + z;
  }
  return y;
}
var test = foo();
console.log(test);

// ************************************************************************************************

var x = 10;
function foo() {
  x = 20;
  let y = 20; // free variable
  function bar() {
    let z = 15; // free variable
    return x + y + z;
  }
  return bar;
}
var test = foo();
console.log(test()); // 55
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
function numberGenerator() {
  // Local “free” variable that ends up within the closure
  var num = 1;
  function checkNumber() {
    console.log(num);
  }
  num++;
  return checkNumber;
}

var number = numberGenerator();
number(); // 2
//   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
function sayHello() {
  var say = function() {
    console.log(hello);
  };
  // Local variable that ends up within the closure
  var hello = "Hello, world!";
  return say;
}
var sayHelloClosure = sayHello();
sayHelloClosure();
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
function greetings(name) {
  var say = function() {
    return hello;
  };
  var hello = `hello: ${name}`;
  return say;
}
var res = greetings("Boutros");
console.log(res());
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
for (var i = 0; i < 5; i += 1) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000);
}
//   solution
for (var i = 0; i < 5; i += 1) {
  (function(j) {
    setTimeout(function() {
      console.log(j);
    }, j * 1000);
  })(i);
}

//   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
var x = 10;
function foo(a) {
  var b = 20;
  function bar(c) {
    var d = 30;
    return boop(x + a + b + c + d);
  }
  function boop(e) {
    return e * -1;
  }
  return bar;
}

var moar = foo(5); // Closure
/* 
  The function below executes the function bar which was returned 
  when we executed the function foo in the line above. The function bar 
  invokes boop, at which point bar gets suspended and boop gets push 
  onto the top of the call stack (see the screenshot below)
*/
moar(15);
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// 24 - sum closures
//closure exists when an inner function makes use of variables declared
//in an outer function which previously returned

function outer(a) {
  return function inner(b) {
    return a + b;
  };
}
outer(5)(6); //11
var outStore = outer(5);
outerStore(10); //14

sum(2, 3); // 5
sum(2)(3); // 5

const outer = a => b => a + b;

function sum(x, y) {
  if (arguments.length >= 2) return x + y;
  else if (arguments.length === 1)
    return function(z) {
      return x + z;
    };
}

// example
function outer(a) {
  function inner(b) {
    return a + b;
  }
  return inner;
}
var res = outer(5);
console.log(res(6));

// example
const createCounter = () => {
  let counter = 0;
  return {
    increment() {
      counter++;
    },
    decrement() {
      counter--;
    },
    get() {
      return counter;
    }
  };
};
const res = createCounter();
res.increment();
res.increment();
res.decrement();
console.log(res.get());

function mul(x) {
  return function(y) {
    // anonymous function
    return function(z) {
      // anonymous function
      return x * y * z;
    };
  };
}
function out(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

// *****************************************************************************************
function add() {
  let counter = 0;
  return function inc() {
    counter += 1;
    return counter;
  };
}
var result = add();
console.log(result());
console.log(result());
console.log(result());
