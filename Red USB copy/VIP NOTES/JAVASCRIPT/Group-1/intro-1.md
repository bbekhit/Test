### 

javascript is invented to make web pages interactive instead of sending request to the server each time, it's engine is embedded in the browsers and nodejs took it out in the browsers

## 

it's interpreted language so i tell someone to make a right by pointing to him not telling him directly as compiled languages

# variable names:

// 1- can't start with number
// 2- can't start or contains special characters : !$@#%^&() 
// 3- can start with _$ only from special characters

VIP VIP VIP defining constants that are known before run time:
const ORANE_COLOR = "#FF7F00"

###

dynamic language, so i can save a number in a variable and then change it to a string

## 
- We can use a <script> tag to add JavaScript code to a page. </script>
- The type and language attributes are not required.
- A script in an external file can be inserted with <script src="path/to/script.js"></script>.

## 
// Semicolons are not required after code blocks {...} and syntax constructs with them like loops:
function f() {
  // no semicolon needed after function declaration
}

for(;;) {
  // no semicolon needed after the loop
}

// backtick quotes ` allow to split the string into multiple lines
let str = `
  Ecma International's TC39 is a group of JavaScript developers,
  implementers, academics, and more, collaborating with the community
  to maintain and evolve the definition of JavaScript.
`;

## error because no semicolon
alert("There will be an error")
[1, 2].forEach(alert)
