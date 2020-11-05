1-// Functions are values. They can be assigned, copied or declared in any place of the code.
2-// If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.
3-// If the function is created as a part of an expression, it’s called a “Function Expression”.
4-// Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
5-// Function Expressions are created when the execution flow reaches them.

6-// functions can modify outer variables
let userName = 'John';
function showMessage() {
  userName = "Bob"; // (1) changed the outer variable
  let message = 'Hello, ' + userName;
  alert(message);
}
alert( userName ); // John before the function call
showMessage();
alert( userName ); // Bob, the value was modified by the function


7-// If a same-named variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName. The outer one is ignored:
let userName = 'John';
function showMessage() {
  let userName = "Bob"; // declare a local variable
  let message = 'Hello, ' + userName; // Bob
  alert(message);
}
// the function will create and use its own userName
showMessage();
alert( userName ); // John, unchanged, the function did not access the outer variable

8-// Variables declared outside of any function, such as the outer userName in the code above, are called global.


9-// VIP VIP VIP
function showMessage(from, text) {
  from = '*' + from + '*'; // make "from" look nicer
  alert( from + ': ' + text );
}
let from = "Ann";
showMessage(from, "Hello"); // *Ann*: Hello
// the value of "from" is the same, the function modified a local copy
alert( from ); // Ann

10-// empty return
function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }
  alert( "Showing you the movie" ); // (*)
  // ...
}
// In the code above, if checkAge(age) returns false, then showMovie won’t proceed to the alert.

11-//long return
return (
  some + long + expression
  + or +
  whatever * f(a) + f(b)
  )

12-// Naming
showMessage()     // shows a message
getAge()          // returns the age (gets it somehow)
calcSum()         // calculates a sum and returns the result
createForm()      // creates a form (and usually returns it)
checkPermission() // checks a permission, returns true/false

13-//splitting
function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // a prime
  }
}

14-function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}

15-// Example
function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
let x = prompt("x?", '');
let n = prompt("n?", '');
if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}

// 16-// a Function Declaration:
function sayHi() {
  alert( "Hello" );
}

// 17-// a Function expression
let sayHiToMe = function() {
  alert( "Hello" );
};

// 18-// Copying a function
function sayHi() {   // (1) create
  alert( "Hello" );
}
let func = sayHi;    // (2) copy
func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)

19-// VIP VIP VIP VIP

// Function Expressions are created when the execution reaches them. That would happen only in the line (*). Too late.
sayHi("John"); // error!
let sayHi = function(name) {  // (*) no magic any more
  alert( `Hello, ${name}` );
};

20-// For example, a global Function Declaration is visible in the whole script, no matter where it is.
// That’s due to internal algorithms. When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.
sayHi("John"); // Hello, John
function sayHi(name) {
  alert( `Hello, ${name}` );
}

// 21-// functions only runs in defined block

let age = 16; // take 16 as an example
if (age < 18) {
  welcome();               // \   (runs)
                           //  |
  function welcome() {     //  |
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
  welcome();               // /   (runs)

} else {

  function welcome() {
    alert("Greetings!");
  }
  welcome()
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined

// Example
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);