// It has different values depending on where it is used:

// In a method, this refers to the owner object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), and apply() can refer this to any object.



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