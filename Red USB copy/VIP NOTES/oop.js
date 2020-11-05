// oop-parseInt-reduce-hoist-closure-regular-

function Person(name, dob) {
    this.name = name;
    this.birthday = new Date(dob)
    this.calculateAge = function () {
        const diff = Date.now() - this.birthday.getTime()
        const ageDate = new Date(diff)
        return Math.abs(ageDate.getUTCFullYear - 1970)
    }
}
const Boutros = new Person("boutros", "5-17-1978")
console.log(Boutros.calculateAge())

console.log(this) // gives us the woindow object

const joj = new Object({
    name: "Joe"
})
console.log(joj)

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob)
    this.calculateAge = function () {
        const diff = Date.now() - this.birthday.getTime()
        const ageDate = new Date(diff)
        return Math.abs(ageDate.getUTCFullYear - 1970)
    }
}
const mary = new Person("mary", "doe", "5-8-1978")

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob)
}
Person.prototype.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
}
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}

const mary = new Person("mary", "doe", "5-8-1978")
console.log(mary.getFullName())
console.log(mary.calculateAge())

// 48-prototype
// every constructor function has a property called a prototype
// the prototype object has a property called constructor which points bact to the function
Person.prototype === mary.__proto__
// contains constructor and proto === contains constructor and proto 

Object.prototype.hasOwnProperty() // has its own built in methods which we can use
Array.prototype.find()

myArray == > Array.prototype == > Object.prototype == > null
const team = ["me", "samah"]
team.hasOwnProperty("length") //true
team.hasOwnProperty("filter") //false as it exists on Array.prototype

// literal Syntax
const obj = {
    name: "me"
}
const arr = ["me", "samah"]

// Inheritance
function Person(name, lastName) {
    this.name = name;
    this.lastName = lastName;
}
Person.prototype.greeting = function () {
    return `Hello ${this.name}`
}

function Customer(name, lastName, membership) {
    Person.call(this, name, lastName)
    this.name = name;
    this.lastName = lastName;
    this.membership = membership;
}

Customer.prototype = Object.create(Person.prototype)

const customer1 = new Customer("Joe", "Doe", "Standard")

customer1.greeting()




// Classes
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting() {
        return `Hello ${this.firstName}`
    }
}
const peter = new Person("Peter", "Samir")

class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName)
        this.phone = phone;
        this.membership = membership;
    }
}

const newCus = new Customer("Peter", "Samir",33,"stand")
newCus.greeting()

// setup a method that is shared with all instances


Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}
// Now I can get a random array element by just typing:
var myRandomElement = myArray.randomElement()











Array.prototype.reduce = function (f, value) {
    for (var i = 0; i < this.length; i++) {
        value = f(this[i], value);
    }
    return value;
};

var add = function (a, b) {
    return a + b;
}

var data = [1, 3, 2, 4, 5, 6, 7, 8, 9];
var result = data.reduce(add, 0);
alert(result);


Array.prototype.mfilter = function(fun) {
    var filtered = [];
    for (let i = 0; i < this.length; i++) {
      if (fun(this[i], i, this)) filtered.push(this[i]);
    }
    return filtered;
  };
  var returnedArr = [1, 2, 3, 4, 5, 6].mfilter(over5);
  let over5 = function(item, i, arr) {
    return item > 5;
  };
  console.log(returnedArr);


  Array.prototype.myFind = function(num){
      for(let i = 0; i < this.length; i++){
          if(this[i] === num) return "YES"
      }
      return "NO"
  }

// printing twice
const Person = function(){
    console.log(this)
}
const me = new Person()

console.log(me)

//
function Calculator() {

    this.read = function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.mul = function() {
      return this.a * this.b;
    };
  }
  
  let calculator = new Calculator();
  calculator.read();
  
  alert( "Sum=" + calculator.sum() );
  alert( "Mul=" + calculator.mul() );

  //
  function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
      this.value += +prompt('How much to add?', 0);
    };
  
  }
  
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value);