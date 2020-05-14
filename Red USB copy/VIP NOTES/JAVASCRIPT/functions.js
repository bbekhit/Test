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
