// A “symbol” represents a unique identifier.

// By specification, object property keys may be either of string type, or of symbol type. Not numbers, not booleans, only strings or symbols, these two types.

let id = Symbol("description");

// Symbols are guaranteed to be unique. Even if we create many symbols with the same description, they are different values. The description is just a label that doesn’t affect anything.
let id1 = Symbol("id");
let id2 = Symbol("id");
alert(id1 == id2); // false

// Most values in JavaScript support implicit conversion to a string. For instance, we can alert almost any value, and it will work. Symbols are special. They don’t auto-convert.
let id = Symbol("id");
alert(id); // TypeError: Cannot convert a Symbol value to a string

let id = Symbol("id");
alert(id.toString()); // Symbol(id), now it works

let id = Symbol("id");
alert(id.description); // id

// As user objects belongs to another code, and that code also works with them, we shouldn’t just add any fields to it. That’s unsafe. But a symbol cannot be accessed accidentally, the third-party code probably won’t even see it, so it’s probably all right to do.

// Also, imagine that another script wants to have its own identifier inside user, for its own purposes. That may be another JavaScript library, so that the scripts are completely unaware of each other.

let id = Symbol("id");
let user = {
  name: "John",
  [id]: 123, // not "id: 123"
}; // added to an object with square brackets

// Symbolic properties do not participate in for..in loop and Object.keys()
let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123,
};
for (let key in user) alert(key); // name, age (no symbols)
// the direct access by the symbol works
alert("Direct: " + user[id]);

// but it works with Object.assign()
let id = Symbol("id");
let user = {
  [id]: 123,
};
let clone = Object.assign({}, user);
alert(clone[id]); // 123
