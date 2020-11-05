// It has different values depending on where it is used:

// In a method, this refers to the owner object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
/////Usually such call is a programming error. If there’s this inside a function, it expects to be called in an object context.///////////
// In an event, this refers to the element that received the event.
// Methods like call(), and apply() can refer this to any object.

///////////////////////////////////////////////////////////////////////////////////////////////////////
// In JavaScript this is “free”, its value is evaluated at call-time and does not depend on where the method was declared, but rather on what object is “before the dot”.

// *********** The value of this is evaluated during the run-time, depending on the context. ***********
let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}
// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;
// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)

///////////////////////////////////////////////////////////////////////////////////////////////////////
let obj = {
    name:"joe",
    func:function(){
      console.log(this.name)
    }
  }
  let obj1 = {
    name:"joe",
    func:function(){
      setTimeout(function(){
        console.log(this.name)
      },1000)
    }
  }
  let obj1 = {
    name:"joe",
    func:function(){
      let that = this
      setTimeout(function(){
        console.log(that.name)
      },1000)
    }
  }
  obj1.func()
  let obj1 = {
    name:"joe",
    func:function(){
      let that = this
      setTimeout(() => {
        console.log(that.name)
      },1000)
    }
  }
  obj1.func()