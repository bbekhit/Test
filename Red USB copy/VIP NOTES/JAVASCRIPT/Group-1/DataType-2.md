## DATA TYPES

# // primitive values

// Number;
// String;
// BigInt;
// Boolean;
// null;
// undefined;
// Symbol;

# // Objects:

// object
// function
// Array
// Date
// keyed collections:
// maps
// weak maps
// sets
// weak sets

# mutable

// object - Array

# immutable

// number - boolean - string

# undefined

// if i have a box and i don't know what is inside so it's undefined, it's the default value for any variable

# null

// the box is empty

##examples
typeof undefined // "undefined"

typeof 0 // "number"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object" (1)

typeof null // "object" (2) -- error in language

typeof alert // "function" (3)

### Number

-Infinity
-Infinity
-NaN

script doesn't stop if there is a computational error, at max it gives NaN

### String

''
""
``
let name = "John";

- embed a variable
  alert( `Hello, ${name}!` ); // Hello, John!

- embed an expression
  alert( `the result is ${1 + 2}` ); // the result is 3

### Boolean

### null

- It’s just a special value which represents “nothing”, “empty” or “value unknown”.

### undefined

- The meaning of undefined is “value is not assigned”.

### symbol

- The symbol type is used to create unique identifiers for objects

### BigInt

- typeof 10n // "bigint"

### typeof

The typeof operator allows us to see which type is stored in a variable.

- Two forms: typeof x or typeof(x).
- Returns a string with the name of the type, like "string".
- For null returns "object" – this is an error in the language, it’s not actually an object.
