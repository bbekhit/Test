##### type conversion VIP VIP

## ToNumber
undefined ===> NaN
null ===> 0
true and false ===> 1 and 0
string Whitespaces from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.

+" " ====> 0
+("A123") //NaN
+("   23") //23

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0


## addition exception

If one of the added values is a string, the other one is also converted to a string.

alert( 1 + '2' ); // '12' (string to the right)
alert( '1' + 2 ); // '12' (string to the left)

## ToBoolean
Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
Other values become true.

alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)

0, null, undefined, NaN, "" =====> false
any other value =====> true

let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

##notes
undefined is NaN as a number, not 0.
"0" and space-only strings like " " are true as a boolean.
