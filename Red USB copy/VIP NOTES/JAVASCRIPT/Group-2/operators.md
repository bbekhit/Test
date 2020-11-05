## operators and operand

// 5 + 5 ==> + is operator --- 5 is operand

## precedence 
That’s why, when we assign a variable, like x = 2 * 2 + 1, the calculations are done first and then the = is evaluated, storing the result in x.

- http://javascript.info/operators

## unary operator

\* takes only one argument as : typeof
let x = 5
typeof x ===> number
typeof typeof x ===> string \*

## binary operator

takes two arguments
+-/\*=><
= called assignment operator \* let x = 5
x = x + 3 this adds 3 to x and then assign new value to x so it can be
x += 3

##

in es8 the added the power using **
so 2**2 ===> 4

### VIP

let x = 5
let y = x++
console.log(x) //6
console.log(y) //5

let x = 5
let y = ++x
console.log(x) //6
console.log(y) //6

var age=23;
var arr=["John",age,age+=10,age--,age-1,undefined ];
console.log(arr); //["john",23,33,33,31,undefined]
arr.length=2;
console.log(arr); //["john",23]
delete arr[3];//line 6
console.log(arr.length);//2
delete arr[0];
console.log(arr);//[,23]
console.log(arr.length);2
arr[6]="Sam";//line 11

### logical operators

&& ------ || ---- ! unary takes only one operand

### switch

let x = 1;
switch(x){
case 1:
console.log("x is one")
case 2:
console.log("x is two")
case 3:
console.log("x is Three")
default:
conselor.log("unknown")
}

### chaining assignment operator

let a, b, c;
a = b = c = 2 + 2;
alert( a ); // 4
alert( b ); // 4
alert( c ); // 4
Chained assignments evaluate from right to left. First, the rightmost expression 2 + 2 is evaluated and then assigned to the variables on the left: c, b and a. At the end, all the variables share a single value.

##increment and decrement
Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.

The operators ++ and -- can be placed either before or after a variable.

When the operator goes after the variable, it is in “postfix form”: counter++.
The “prefix form” is when the operator goes before the variable: ++counter.

let counter = 1;
alert( 2 \* ++counter ); // 4

let counter = 1;
alert( 2 \* counter++ ); // 2,

#coma
let a = (1 + 2, 3 + 4);
alert( a ); // 7 (the result of 3 + 4)
Here, the first expression 1 + 2 is evaluated and its result is thrown away. Then, 3 + 4 is evaluated and returned as the result.

## comparisons

< > >= <= ==
When comparing values of different types, JavaScript converts the values to numbers except when using == with null and undefined it's evaluated as is

For example:
alert( 0 == false ); // true
alert( '' == false ); // true
alert( null === undefined ); // false different types

### VIP alert( null == undefined ); // true

if i convert Number(null) = 0
Number(undefined) = NaN
but they are special equal

alert( null > 0 ); // (1) false
alert( null == 0 ); // (2) false  - - - VIP VIP VIP VIP 
alert( null >= 0 ); // (3) true

The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.
On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.

alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)

Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
The equality check (3) returns false because undefined only equals null, undefined, and no other value.

### vip

## VIP VIP ***null == undefined*** only only

When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).

Strings are compared letter-by-letter in the “dictionary” order.
so we treat this as same type so we use dictionary
"2" > "12"

5 > 4 //true
"apple" > "pineapple" //false
"2" > "12" //true
undefined == null //true
undefined === null //false
null == "\n0\n" // false
null === +"\n0\n" //false

### Summary

- any arithmetic change to numbers except + we have to check if we have strings and evertything is converted to string

- comparasion everything converted to numbers when different types except
  - undefined compared to anything is false
  - null translated to 0
  - null == undefined
