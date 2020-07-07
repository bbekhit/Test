// ## ??
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

// ## ?.
let user = {}; // the user happens to be without address
alert(user.address.street); // Error!

let user = {}; // user has no address
alert( user && user.address && user.address.street ); // undefined (no error)

// The optional chaining ?. stops the evaluation and returns undefined if the part before ?. is undefined or null.
let user = {}; // user has no address
alert( user?.address?.street ); // undefined (no error)

// the chaining stops below example because user is undefined or null.

// Please note: the ?. syntax works exactly where it’s placed, not any further.
//  In the last two lines the evaluation stops immediately after user?., never accessing further properties. But if the user actually exists, then the further intermediate properties, such as user.address must exist.
let user = null;
alert( user?.address ); // undefined

alert( user?.address.street ); // undefined
alert( user?.address.street.anything ); // undefined


// We should use ?. only where it’s ok that something doesn’t exist.
// For example, if according to our coding logic user object must be there, but address is optional, then user.address?.street would be better.
// So, if user happens to be undefined due to a mistake, we’ll know about it and fix it. Otherwise, coding errors can be silenced where not appropriate, and become more difficult to debug.

//
let user1 = {
  admin() {
    alert("I am admin");
  }
}
let user2 = {};
user1.admin?.(); // I am admin
user2.admin?.();



//
let user1 = {
  firstName: "John"
};
let user2 = null; // Imagine, we couldn't authorize the user
let key = "firstName";
alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined
alert( user1?.[key]?.something?.not?.existing); // undefined

//
delete user?.name; // delete user.name if user exists

//
// We can use ?. for safe reading and deleting, but not writing
// the idea of the code below is to write user.name, if user exists
user?.name = "John"; // Error, doesn't work
// because it evaluates to undefined = "John"

// short-circuit
let user = null;
let x = 0;
user?.sayHi(x++); // nothing happens
alert(x); // 0, value not incremented