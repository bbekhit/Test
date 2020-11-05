const firstName = Boutros;
const lastName = Bekhit;

let val;

val = firstName + lastName; // BoutrosBekhit

// concatenation

val = firstName + " " + lastName;

// escaping

val = "i'am a developer that's it";

// Append
val = "boutros ";
val += "bekhit"; //Boutros Bekhit

//Length counts number of characters in a string
val = firstName.length; // 7

// concat
val = firstName.concat(" ", lastName);

// toLowerCase()
val = firstName[0].toUpperCase(); //B
valp = firstName[0].toUpperCase() + firstName.slice(1);

//indexOf
val = firstName.indexOf("b"); // 0

const removeIndex = post.likes
  .map(item => item.user.toString())
  .indexOf(req.user.id);
// i want to know the like of a certain user located
//  at which index

// charAt()

// last character of string
let name = "boutros"
 console.log(name.charAt(name.length-1))

//  charAt() takes a number to find the character
// indexOf takes a string to find the position of this string inside the string

// replace() -- split() -- slice() -- split() --includes() --trim()
