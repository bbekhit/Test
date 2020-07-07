// The JSON (JavaScript Object Notation) is a general format to represent values and objects.

// JSON.stringify to convert objects into JSON.
// JSON.parse to convert JSON back into an object.

// a number in JSON is just a number
alert(JSON.stringify(1)); // 1
// a string in JSON is still a string, but double-quoted
alert(JSON.stringify("test")); // "test"
alert(JSON.stringify(true)); // true
alert(JSON.stringify([1, 2, 3])); // [1,2,3]

// ignore
// Function properties (methods).
// Symbolic properties.
// Properties that store undefined.
let user = {
  sayHi() {
    // ignored
    alert("Hello");
  },
  [Symbol("id")]: 123, // ignored
  something: undefined // ignored
};
alert(JSON.stringify(user)); // {} (empty object)

// Note
let json = `{
  name: "John",                     // mistake: property name without quotes
  "surname": 'Smith',               // mistake: single quotes in value (must be double)
  'isAdmin': false                  // mistake: single quotes in key (must be double)
  "birthday": new Date(2000, 2, 3), // mistake: no "new" is allowed, only bare values
  "friends": [0,1,2,3]              // here all fine
}`;
