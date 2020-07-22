// Don’t overuse the optional chaining
// We should use ?. only where it’s ok that something doesn’t exist.

// For example, if according to our coding logic user object must be there, but address is optional, then user.address?.street would be better.

// So, if user happens to be undefined due to a mistake, we’ll know about it and fix it. Otherwise, coding errors can be silenced where not appropriate, and become more difficult to debug.

let user = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined

// it's only used when left part may be or may be not (NULL or UNDEFINED)