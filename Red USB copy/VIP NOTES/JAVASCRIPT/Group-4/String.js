// The internal format for strings is always UTF-16, it is not tied to the page encoding. 

alert( `The backslash: \\` ); // The backslash: \
// double backslash in order to see it

alert( `My\n`.length ); // 3

// 1
let str = "Hello";
str.test = 5; // (*)
alert(str.test);

// Depending on whether you have use strict or not, the result may be:

// undefined (no strict mode)
// An error (strict mode).
// Why? Let’s replay what’s happening at line (*):

// When a property of str is accessed, a “wrapper object” is created.
// In strict mode, writing into it is an error.
// Otherwise, the operation with the property is carried on, the object gets the test property, but after that the “wrapper object” disappears, so in the last line str has no trace of the property.

// 2
str.length;
// Please note that str.length is a numeric property, not a function. There is no need to add parenthesis after it.

// 3 Accessing
let str = `Hello`;
// the first character
alert(str[0]); // H
alert(str.charAt(0)); // H
// the last character
alert(str[str.length - 1]); // o

// VIP VIP
let str = `Hello`;
alert(str[1000]); // undefined
alert(str.charAt(1000)); // '' (an empty string)

// 4
immutable;
let str = "Hi";
str[0] = "h"; // error
alert(str[0]); // doesn't work

workaround;
let str = "Hi";
str = "h" + str[1]; // replace the string
alert(str); // hi

// 5
str.toLowerCase();
str.toUpperCase();

// 6
str.indexOf();
let str = "Widget with id";
alert(str.indexOf("Widget")); // 0, because 'Widget' is found at the beginning
alert(str.indexOf("widget")); // -1, not found, the search is case-sensitive
alert(str.indexOf("id")); // 1, "id" is found at the position 1 (..idget with id)

let str = "Widget with id";
alert(str.indexOf("id", 2)); // 12

// when used in if statement i have to use !== -1
if (str.indexOf("Widget") != -1) {
  alert("We found it"); // works now!
}

// 7
str.lastIndexOf();
"canal".lastIndexOf("a", 3); // returns 3
// here i specify that i want to start from the second 'a' and move from right to screenLeft, and since it's included so the first match will be the second 'a'
"abab".lastIndexOf("ab", 2); // 2
"abab".lastIndexOf("ab", 1); // 0

// 8
includes, startsWith, endsWith;
let str = "Widget with id";
alert("Widget with id".includes("Widget")); // true
alert("Hello".includes("Bye")); // false

alert("Widget".includes("id")); // true
alert("Widget".includes("id", 3)); // false, from position 3 there is no "id"

alert("Widget".startsWith("Wid")); // true, "Widget" starts with "Wid"
alert("Widget".endsWith("get")); // true, "Widget" ends with "get"

// 9
str.slice();
let str = "stringify";
// start at the 4th position from the right, end at the 1st from the right
alert(str.slice(-4, -1)); // gif //
str.length = 9; // str.slice(9-4,9-1) => str.slice(5,8) VIP VIP

// 10 comparing String

// A lowercase letter is always greater than the uppercase:
alert("a" > "Z"); // true

// Letters with diacritical marks are “out of order”:
alert("Österreich" > "Zealand"); // true

// different case letters have different codes
alert("z".codePointAt(0)); // 122
alert("Z".codePointAt(0)); // 90

let str = "hello";
str.charCodeAt(1); // 101
str.charCodeAt(1).toString(16); // 65
("\x65"); // 'e'

// all these keep original string
slice(); // accepts negative values
substring(); // if first parameter is smaller, it will switch it with second parameter
split("", 2); // return array of length of 2

str1.localeCompare(str2); // -1 means str2 has to go backwards to str1, so str2>str1

//
let str = 'As sly as a fox, as strong as an ox';
let target = 'as'; // let's look for it

let pos = 0;
while(true){
  let foundPos = str.indexOf(target,pos)
  if(foundPos === -1) break;
  alert(`Found at position ${foundPos}`)
  pos = foundPos + 1
}


// SUMMARY
str.length

str[0] // new undefined
str.charAt(0) // old empty str

str.toUpperCase()
str.toLowerCase()

str.indexOf()
str.includes()

str.startsWith()
str.endsWith()

str.slice()

str.trim() 
str.repeat(3)
