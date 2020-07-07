// The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

// ******************************************************************************
var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("outer func:  this.foo = " + this.foo);
    console.log("outer func:  self.foo = " + self.foo);
    (function () {
      console.log("inner func:  this.foo = " + this.foo);
      console.log("inner func:  self.foo = " + self.foo);
    })();
  }
};
myObject.func();
// ******************************************************************************

let obj = {
  name1: "Boutros",
  sayHi:function(){
    setTimeout(function(){
      console.log(`hello ${this.name1}`)
  },1000) 
  }
}
obj.sayHi() // hello undefined

let obj1 = {
  name1: "Boutros",
  sayHi:function(){
    setTimeout(() =>
      console.log(`hello ${this.name1}`)
    ,1000) 
  }
}
obj1.sayHi() // hello boutros

let obj = {
  name: "Boutros",
  getName: function () {
    let that = this;
    setTimeout(function () {
      console.log(that.name);
    }, 1000);
  }
}; //fix

obj1.func()
  let obj1 = {
    name:"joe",
    func:function(){
      let that = this
      setTimeout(() => {
        console.log(that.name) // can use this or that
      },1000)
    }
  }
  obj1.func()
// ******************************************************************************

let name = "outside"
let foo = {
  name: "inside",
  getName() {
    console.log(this.name)
  }
}
let answer = foo.getName
answer()

// ******************************************************************************

this.x = 9;    // this refers to global "window" object here in the browser
var module = {
  x: 81,
  getX: function() { return this.x; }
};
module.getX(); // 81
var retrieveX = module.getX;
retrieveX();   
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81

// ******************************************************************************

function fullName() {
  return "Hello, this is " + this.first + " " + this.last;
}
console.log(fullName()); // => Hello this is undefined undefined
// create a person object and pass its values to the fullName function
var person = { first: "Foo", last: "Bar" };
console.log(fullName.bind(person)()); // => Hello this is Foo Bar

// ******************************************************************************
let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};
setTimeout(user.sayHi, 1000); // Hello, undefined!
// same as
let f = user.sayHi;
setTimeout(f, 1000); // lost user context
// The method setTimeout in-browser is a little special: it sets this=window for the function call (for Node.js, this becomes the timer object,

let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};
// solution 1
setTimeout(function() {
  user.sayHi(); // Hello, John!
}, 1000);
// solution 2
setTimeout(() => user.sayHi(), 1000); // Hello, John!
// solution 3
let sayHi = user.sayHi.bind(user);
setTimeout(sayHi, 1000); // Hello, John!
// ******************************************************************************
var x = 3;
var foo = {
  x: 2,
  baz: {
    x: 1,
    bar: function () {
      return this.x;
    }
  }
};

var go = foo.baz.bar;
alert(go()); 
alert(foo.baz.bar()); 
alert(go.bind(foo)()) 
// ******************************************************************************
let dog = {
  name: "doggo",
  sayName() {
    console.log(this.name);
  }
};
let sayName = dog.sayName();
console.log(sayName); // doggo
console.log(dog.sayName()); // doggo

function Dog(name) {
  this.name = name;
}
Dog.bark = function () {
  console.log(this.name + " says woof");
};
let fido = new Dog("fido");
fido.bark();
Dog.bark.bind(fido)

// ******************************************************************************

function list() {
  return Array.prototype.slice.call(arguments);
}
var list1 = list(1, 2, 3); // [1, 2, 3]
var leadingThirtysevenList = list.bind(null, 37);
leadingThirtysevenList(1,2,3) // [37, 1,2,3]