### The OR || operator does the following:

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
alert( 'The office is closed.' ); // it is the weekend
}

Evaluates operands from left to right.
For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were false), returns the last operand.

## example

alert( 1 || 0 ); // 1 (1 is truthy)
alert( true || 'no matter what' ); // (true is truthy)
alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)
alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)

## example

let currentUser = null;
let defaultUser = "John";
let name = currentUser || defaultUser || "unnamed";
alert( name ); // selects "John" – the first truthy value

## example -- short circuit evaluation

let x;
true || (x = 1);
alert(x); // undefined, because (x = 1) not evaluated

## VIP

Precedence of AND && is higher than OR ||
The precedence of AND && operator is higher than OR ||.

So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d).

## VIP

let x = 1;
(x > 0) && alert( 'Greater than zero!' );

The action in the right part of && would execute only if the evaluation reaches it. That is, only if (x > 0) is true.

Evaluates operands from left to right.
For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were truthy), returns the last operand.

## !

The operator accepts a single argument and does the following:

Converts the operand to boolean type: true/false.
Returns the inverse value.

alert( !true ); // false
alert( !0 ); // true

## !!

A double NOT !! is sometimes used for converting a value to boolean type:

alert( !!"non-empty string" ); // true
alert( !!null ); // false

That is, the first NOT converts the value to boolean and returns the inverse, and the second NOT inverses it again. In the end, we have a plain value-to-boolean conversion.

There’s a little more verbose way to do the same thing – a built-in Boolean function:

alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false

## ??
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0
