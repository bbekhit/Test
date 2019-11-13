const sayHello = function() {
  console.log("Hello");
};

const sayHello = () => {
  console.log("Hello");
};

// if it is one line or return one thing i can remove {}
const sayHello = () => console.log("Hello");

// if i want to return object literal i wrap {} with ()
const sayHello = () => ({ msg: "Hello" });

//the this keyword is bound to different values based on the context in which the function is called.
//Whereas arrow functions use the value of this in their lexical scope

// Its context is actually a Timeout object in Node or the window object in browsers.

// We’ve seen how arrow functions don’t bind a this and they just use the value of this in their scope.
// Arrow functions also don’t bind an arguments object.

//The takeaway: Function expressions are best for object methods.
//Arrow functions are best for callbacks or methods like map, reduce, or forEach.

var obj1 = {
  name: "Boutros",
  myFunc: function() {
    console.log(this.name);
    setTimeout(function() {
      console.log(this.name); //undefined
    }, 1000);
  }
};
obj1.myFunc();

var myObject = {
  foo: "bar",
  func: function() {
    var self = this;
    console.log("outer func:  this.foo = " + this.foo);
    console.log("outer func:  self.foo = " + self.foo);
    (function() {
      console.log("inner func:  this.foo = " + this.foo);
      console.log("inner func:  self.foo = " + self.foo);
    })();
  }
};
myObject.func();

// to fix it
var obj1 = {
  name: "Boutros",
  myFunc: function() {
    let self = this;
    console.log(this.name);
    setTimeout(function() {
      console.log(self.name); //undefined
    }, 1000);
  }
};
obj1.myFunc();

// or
var obj1 = {
  name: "Boutros",
  myFunc: function() {
    console.log(this.name);
    setTimeout(() => console.log(this.name), 1000);
  }
};
obj1.myFunc();

//There’s another way arrow functions don’t work well with objects. They can’t be constructors.
//The classic function expressions can be used to construct a new object like so:

// But arrow functions do not have a prototype property and they cannot be used with new.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const add = () => {
  return arguments[0] + arguments[1];
}; //fail

// https://medium.com/tfogo/advantages-and-pitfalls-of-arrow-functions-a16f0835799e
