//
// Regular numbers in JavaScript are stored in 64-bit format 

// 1
1e3 = 1 * 1000
1.23e6 = 1.23 * 1000000

// 2
// -3 divides by 1 with 3 zeroes
1e-3 = 1 // 1000 (=0.001)
// -6 divides by 1 with 6 zeroes
1.23e-6 = 1.23 // 1000000 (=0.00000123)

// 3 Hexadecimal starts with 0x
alert( 0xff ); // 255
alert( 0xFF ); // 255 (the same, case doesn't matter)

// 4 Binary and octal numeral systems are rarely used, but also supported using the 0b and 0o prefixes:
let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255
alert( a == b ); // true, the same number 255 at both sides

// 5 METHODS
// A*********** toString(base)
let num = 255
num.toString() // '255'
num.toString(16) // ff
123456..toString(36) // if on number not variable 
(123).toString() // another way

// B************** Rounding
Math.floor
//Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
Math.ceil
//Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
Math.round
//Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4 and -1.1 becomes -1.
Math.trunc //(//not supported by Internet Explorer)
//Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.

// C************** toFixed(n) returns a string VIP VIP VIP VIP
// 2 ways to round numbers 1-multiply&divide 2-toFixed()
let num = 1.23456;
alert( Math.floor(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23

let num = 12.34;
alert( num.toFixed(1) ); // "12.3"

// This rounds up or down to the nearest value, similar to Math.round:
let num = 12.36;
alert( num.toFixed(1) ); // "12.4"

let num = 12.34;
alert( num.toFixed(5) ); // "12.34000", added zeroes to make exactly 5 digits


// IMPORTANT NOTE
alert( 0.1 + 0.2 ); // 0.30000000000000004
// to fix it:
let sum = 0.1 + 0.2;
alert( +sum.toFixed(2) ); // 0.3
// A number is stored in memory in its binary form, a sequence of bits – ones and zeroes. But fractions like 0.1, 0.2 that look simple in the decimal numeric system are actually unending fractions in their binary form.

let x = 1
x.toString(2)
"1111111"

(0.1*10 + 0.2*10)/10 //= 0.3

// In other words, what is 0.1? It is one divided by ten 1/10, one-tenth. In decimal numeral system such numbers are easily representable. Compare it to one-third: 1/3. It becomes an endless fraction 0.33333(3).

// IMPORTANT NOTE

// isNaN(value) converts its argument to a number and then tests it for being NaN:
alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true

alert( NaN === NaN ); // false

// isFinite(value) converts its argument to a number and returns true if it’s a regular number, not NaN/Infinity/-Infinity:
alert( isFinite("15") ); // true
alert( isFinite("str") ); // false, because a special value: NaN
alert( isFinite(Infinity) ); // false, because a special value: Infinity

// Important
alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading

alert( parseInt('a123') ); // NaN, the first symbol stops the process

Math.random() // gives number from 0 inclusive to 1exclusive
Math.floor(Math.random() * 100)  // gives a number from 0-99
Math.floor(Math.random() * 100) + 1 // gives a number from 1-100
Math.round( 2 + Math.random() * (4 - 2))
function randomInteger(min, max) {
  // here rand is from min to (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function randomColor() {
  var r = Math.floor(Math.random() * 256); // gives a number from 0-255
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  // return "rgb(" + r + ", " + g + ", " + b + ")";
  return `rgb(${r},${g},${b})`
}

var random = Math.floor(Math.random() * colors.length)

//
5/0 // infinity
2**1024 // infinity

// Compare with Object.is
// There is a special built-in method Object.is that compares values like ===, but is more reliable for two edge cases:

// It works with NaN: Object.is(NaN, NaN) === true, that’s a good thing.
// Values 0 and -0 are different: Object.is(0, -0) === false, technically that’s true, because internally the number has a sign bit that may be different even if all other bits are zeroes.
// In all other cases, Object.is(a, b) is the same as a === b. 

// summary summary summary summary summary 

// 1- 
let billion = 1e9

// 2-
let res = billion.toString(10) //"1000000000"

// 3-
parseInt(res) // 1e9

// 4-
let test = 0.1 + 0.2 === 0.3000000004 // true
(0.1*10 + 0.2*10)/10 //0.3
+test.toFixed(1)

// 5-
Math.floor
Math.ceil
Math.round
Math.trunc

// 6-
isNaN()
isFinite()

// 7-
Object.is(NaN, NaN) === true
Object.is(a,b) 
a === b

// 8-
alert( 1.35.toFixed(1) ); // 1.4
alert( 6.35.toFixed(1) ); // 6.3 which is wrong to fix it
alert( Math.round(6.35 * 10) / 10); // 6.35 -> 63.5 -> 64(rounded) -> 6.4
