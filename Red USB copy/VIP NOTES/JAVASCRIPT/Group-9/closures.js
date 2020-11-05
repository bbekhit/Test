// Please note that a new function Lexical Environment is created each time a function runs.
// And if a function is called multiple times, then each invocation will have its own Lexical Environment, with local variables and parameters specific for that very run.
let name = "John";
sayHi(); // John
function sayHi() {
  alert("Hi, " + name);
}
name = "Pete"; // (*)
sayHi(); // Pete

function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}
let counter1 = makeCounter();
let counter2 = makeCounter();
alert(counter1()); // 0
alert(counter1()); // 1
alert(counter2()); // 0 (independent)

// A closure is a function that remembers its outer variables and can access them.
// in JavaScript, all functions are naturally closures (there is only one exclusion, to be covered in The "new Function" syntax).

// That is: they automatically remember where they were created using a hidden [[Environment]] property, and all of them can access outer variables.

function makeCounter() {
  let count = 0;
  return function() {
    return count++; // has access to the outer "count"
  };
}
let counter = makeCounter();
alert(counter()); // 0
alert(counter()); // 1
alert(counter()); // 2

// IIFE

// In the past, there were no block-level lexical environment in JavaScript.

// So programmers had to invent something. And what they did is called “immediately-invoked function expressions” (abbreviated as IIFE).

// That’s not a thing we should use nowadays, but you can find them in old scripts, so it’s better to understand them.

// example
function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}
let arr = [1, 2, 3, 4, 5, 6, 7];
alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

function makeArmy() {
  let shooters = [];
  let i = 0;
  while (i < 10) {
    let shooter = function() {
      // shooter function
      alert(i); // should show its number
    };
    shooters.push(shooter);
    i++;
  }
  return shooters;
}
let army = makeArmy();
army[0](); // the shooter number 0 shows 10
army[5](); // and number 5 also outputs 10...
// ... all shooters show 10 instead of their 0, 1, 2, 3...

function makeArmy() {
  let shooters = [];
  for (let i = 0; i < 10; i++) {
    let shooter = function() {
      // shooter function
      alert(i); // should show its number
    };
    shooters.push(shooter);
  }
  return shooters;
}
let army = makeArmy();
army[0](); // 0
army[5](); // 5

function makeArmy() {
  let shooters = [];
  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function() {
      // shooter function
      alert(j); // should show its number
    };
    shooters.push(shooter);
    i++;
  }
  return shooters;
}
let army = makeArmy();
army[0](); // 0
army[5](); // 5

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

//

function Counter() {
  let count = 0;
  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}
let counter = new Counter();
alert( counter.up() ); // 1
alert( counter.up() ); // 2
alert( counter.down() ); // 1

// each callback will enter the callback queue and get pushed to the callstack one by one when call stack is empty, so by using var which has no block-level lexical enviroment so the value of i is the last value, but if using let it will keep the value of i for each iteration or the old school we can use IIFE

// In the past, there were no block-level lexical environment in JavaScript.
// So programmers had to invent something. And what they did is called “immediately-invoked function expressions” (abbreviated as IIFE).
// That’s not a thing we should use nowadays, but you can find them in old scripts, so it’s better to understand them.

function print() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => console.log(i), i * 1000);
  }
} // 6 five times

function print() {
  for (var i = 1; i <= 5; i++) {
    (function(i) {
      setTimeout(() => console.log(i), i * 1000);
    })(i);
  }
}

// Closure Examples
function classRoom(){
  let instructors = ["Colt", "Elie"]
  return {
    getInstructors: function(){
      return instructors.slice()
    },
    addInstructors: function(instructor){
      instructors.push(instructor)
      return instructors
    }
  }
}
// in memory instructors = ["Colt", "Elie"] 
let firstTest = classRoom()
console.log(firstTest.addInstructors("Bo")); // in memory instructors = ["Colt", "Elie", "Bo"]
console.log(firstTest.getInstructors()); // in memory instructors = ["Colt", "Elie", "Bo"] got copy
firstTest.getInstructors().pop(); 
firstTest.getInstructors().pop();
console.log(firstTest.getInstructors());


////
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

/////////////////
let test = () => console.log("entered test");
   function once(fn){
     let count = 0;
     return function(){
      if(count > 0) return;
      fn()
      count++
     }
   }
  function once(func) {
    let count = 2;
    let result;
    if (typeof func !== 'function') {
        throw new TypeError('Not a function');
    }
    return function(...args) {
        if (--count > 0)
            result = func.apply(this, args);

        return result;
    }
  }
   test  = once(test); //write the once function

   console.log(test()); //prints "entered test"
   console.log(test()); //function is not called and nothing is printed