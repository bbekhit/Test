// 1
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}
// proof: User is a function
alert(typeof User); // function

// 2 advantage
// use strict
// for..in doesn't show the methods
// sugar syntax
