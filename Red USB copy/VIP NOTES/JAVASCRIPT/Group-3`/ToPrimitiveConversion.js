let user = {
  name:"Boutros"
}
alert(user)
// here alert expects a string so it converts the object to string and result in [object Object]

let user = {
  name:'Boutros',
  toString(){
    return this.name
  }
}
alert(user)
// here we wxplicitly say that when the conversion need to be string, it returns this.name


let user = {
  name: "John",
  money: 1000,

  // // for hint="string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // for hint="number" or "default"
  // valueOf() {
  //   return this.money;
  // }

};
alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500


// Let’s start from the first method. There’s a built-in symbol named Symbol.toPrimitive that should be used to name the conversion method, like this: 
obj[Symbol.toPrimitive] = function(hint) {
  // must return a primitive value
  // hint = one of "string", "number", "default"
};

let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};
// conversions demo:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500

// Examples
[] + "hello" // "hello" 
{} + "hello" // 

function Person(){
  this.toString = function toString(){
      return ""
  }
  this.valueOf  = function valueOf(){
      return 0
  }
}