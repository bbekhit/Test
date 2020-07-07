let str = "Hello";
alert( str.toUpperCase() ); // HELLO

// The string str is a primitive. So in the moment of accessing its property, a special object is created that knows the value of the string, and has useful methods, like toUpperCase().
// That method runs and returns a new string (shown by alert).
// The special object is destroyed, leaving the primitive str alone. 

alert( typeof 0 ); // "number"
alert( typeof new Number(0) ); // "object"!

let zero = new Number(0);
if (zero) { // zero is true, because it's an object
  alert( "zero is truthy!?!" );
}

// Primitives except null and undefined provide many helpful methods. We will study those in the upcoming chapters.
// Formally, these methods work via temporary objects, but JavaScript engines are well tuned to optimize that internally, so they are not expensive to call. 

let str = "Hello";
str.test = 5; // (*)
alert(str.test);

undefined //(no strict mode)
error //(strict mode).
