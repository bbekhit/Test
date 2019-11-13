// https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285

var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
let strongRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

// https://stackoverflow.com/questions/43919606/i-could-not-seem-to-understand-a-z-this-expression

// 1
regexp = new RegExp("pattern", "flags");

// 2
regexp = /pattern/; // no flags
regexp = /pattern/gmi; // with flags g,m and i (to be covered soon)

// 3 when to use
let tag = prompt("What tag do you want to find?", "h2");
let regexp = new RegExp(`<${tag}>`); // same as /<h2>/ if answered "h2" in the prompt

// 4
i
// With this flag the search is case-insensitive: no difference between A and a (see the example below).
g
// With this flag the search looks for all matches, without it – only the first one.
m
// Multiline mode (covered in the chapter Multiline mode of anchors ^ $, flag "m").
s
// Enables “dotall” mode, that allows a dot . to match newline character \n (covered in the chapter Character classes).
u
// Enables full unicode support. The flag enables correct processing of surrogate pairs. More about that in the chapter Unicode: flag "u" and class \p{...}.
y
// “Sticky” mode: searching at the exact position in the text (covered in the chapter Sticky flag "y", searching at position)

// 5
str.match(regexp) // looks for matches: all of them if there’s g flag, otherwise only the first one. returns null or array of results

let str = "We will, we will rock you";
let result = str.match(/we/i); // without flag g
alert( result[0] );     // We (1st match)
alert( result.length ); // 1
// Details:
alert( result.index );  // 0 (position of the match)
alert( result.input );  // We will, we will rock you (source string)

// if always want array
let matches = "JavaScript".match(/HTML/) || [];
if (!matches.length) {
  alert("No matches"); // now it works
}

// 6
str.replace(regexp, replacement)
// no flag g
alert( "We will, we will".replace(/we/i, "I") ); // I will, we will
// with flag g
alert( "We will, we will".replace(/we/ig, "I") ); // I will, I will

// 7
regexp.test(str) //looks for at least one match, if found, returns true, otherwise false.

let str = "I love JavaScript";
let regexp = /LOVE/i;
alert( regexp.test(str) ); // true

// 8
// \d – digits.
// \D – non-digits.
// \s – space symbols, tabs, newlines.
// \S – all but \s.
// \w – Latin letters, digits, underscore '_'.
// \W – all but \w.
// . – any character if with the regexp 's' flag, otherwise any except a newline \n.

let str = "Is there CSS4?";
let regexp = /CSS\d/
alert( str.match(regexp) ); // CSS4

alert( "I love HTML5!".match(/\s\w\w\w\w\d/) ); // ' HTML5'

let str = "+7(903)-123-45-67";
alert( str.match(/\d/g).join('') );
alert( str.replace(/\D/g, "") ); // 79031234567

// **************************************************************************
function parseID(str) {
  if (!str) {
      return ''
  }
  const title = /^<rdar.*?(\d+)>.*?$/
  const id = /\d+/
  const match = title.exec(str) || []
  return match[1] || (str.match(id) && str.match(id)[0]) || ''
}

function parseIDs(str) {
  if (!str) {
      return []
  }
  const titles = /^<rdar.*?\d+>.*?$/gm
  const ids = /\d+/gm
  const matches = (str.match(titles) || []).map((item) => /^<.*?(\d+)>.*?/.exec(item)[1])
  return matches.concat(str.replace(titles, '').match(ids) || [])
}

// case#1
// rdar://problem/51817051&51827133&55100311&55575627&55959429 

// case#2
// <rdar://problem/51817051> Test Boutros - 1 
// <rdar://problem/51827133> Test Boutros - 2
// <rdar://problem/55100311> [Scope v4] [UAT] 2nd group sub-tasks radar number and assignee not shown
// <rdar://problem/55575627> [Scope v4] cannot access team names in Scope when creating a new report
// <rdar://problem/55959429> [Scope v4] [UAT] HTML for Font Color does not work

// **************************************************************************

// 9
let regexp = /CS.4/;

alert( "CSS4".match(regexp) ); // CSS4
alert( "CS-4".match(regexp) ); // CS-4
alert( "CS 4".match(regexp) ); // CS 4 (space is also a character)

alert( "CS4".match(/CS.4/) ); // null, no match because there's no character for the dot

// vip vip vip
alert( "A\nB".match(/A.B/) ); // null (no match)
alert( "A\nB".match(/A.B/s) ); // A\nB (match!) because of s flag

// 10
alert( "1 - 5".match(/\d-\d/) ); // null, no match!
alert( "1 - 5".match(/\d - \d/) ); // 1 - 5, now it works
// or we can use \s class:
alert( "1 - 5".match(/\d\s-\s\d/) ); // 1 - 5, also works


// 11 m flag
let str = `1st place: Winnie
2nd place: Piglet
3rd place: Eeyore`;
alert( str.match(/^\d/gm) ); // 1, 2, 3

let str = `1st place: Winnie
2nd place: Piglet
3rd place: Eeyore`;
alert( str.match(/^\d/g) ); // 1 without m flag

// 12 \b word boundary
alert( "Hello, Java!".match(/\bHello\b/) ); // Hello
alert( "Hello, Java!".match(/\bJava\b/) );  // Java
alert( "Hello, Java!".match(/\bHell\b/) );  // null (no match)
alert( "Hello, Java!".match(/\bJava!\b/) ); // null (no match)

// 13 escaping in new RegExp
let regexp = new RegExp("\d\.\d");
alert( "Chapter 5.1".match(regexp) ); // null

let regStr = "\\d\\.\\d";
alert(regStr); // \d\.\d (correct now)
let regexp = new RegExp(regStr);
alert( "Chapter 5.1".match(regexp) ); // 5.1

// 14 sets and ranges

// find [t or m], and then "op"
alert( "Mop top".match(/[tm]op/gi) ); // "Mop", "top"

// vip vip vip
// find "V", then [o or i], then "la"
alert( "Voila".match(/V[oi]la/) ); // null, no matches

// \d – is the same as [0-9],
// \w – is the same as [a-zA-Z0-9_],
// \s – is the same as [\t\n\v\f\r ], plus few other rare unicode space characters.

// For instance, if we’d like to look for a wordly character \w or a hyphen -, then the set is [\w-].

// except
// [^aeyo] – any character except 'a', 'e', 'y' or 'o'.
// [^0-9] – any character except a digit, the same as \D.
// [^\s] – any non-space character, same as \S.

// escaping inside brackets
// No need to escape
let regexp = /[-().^+]/g;
alert( "1 + 2 - 3".match(regexp) ); // Matches +, -

// Escaped everything
let regexp = /[\-\(\)\.\^\+]/g;
alert( "1 + 2 - 3".match(regexp) ); // also works: +, -

alert( "Java".match(/Java[^script]/) ); // null
alert( "JavaScript".match(/Java[^script]/) ); // "JavaS"

// 15 quantifiers

// /\d{3,5}/ // 3-5 digits
alert( "I'm not 12, but 1234 years old".match(/\d{3,5}/) ); // "1234"
/\d{1,}/  // 1 or more
// /\d+/ // same as above

let str = "+7(903)-123-45-67";
let numbers = str.match(/\d{1,}/g);
alert(numbers); // 7,903,123,45,67

// + {1,}
let str = "+7(903)-123-45-67";
let numbers = str.match(/\d+/g);
alert( "100 10 1".match(/\d0+/g) ); // 100, 10

// 1 not matched, as 0+ requires at least one zero
// ? {0,1} means optional
let str = "Should I write color or colour?";
alert( str.match(/colou?r/g) ); // color, colour

// * {0,}
alert( "100 10 1".match(/\d0*/g) ); // 100, 10, 1

// examples
alert( "0 1 12.345 7890".match(/\d+\.\d+/g) ); // 12.345
alert( "<h1>Hi!</h1>".match(/<[a-z][a-z0-9]*>/gi) ); // <h1>
alert( "<h1>Hi!</h1>".match(/<\/?[a-z][a-z0-9]*>/gi) ); // <h1>, </h1>

// 16 GREEDY and Lazy
// We can enable it by putting a question mark '?' after the quantifier, so that it becomes *? or +? or even ?? for '?'.
let regexp = /".+"/g;
let str = 'a "witch" and her "broom" is one';
alert( str.match(regexp) ); // "witch" and her "broom"
// the engine finds the " then moves to the dot which has a + so it keep going untill the end of the string then it goes backwards to find the other quotes

// Lazy
let regexp = /".+?"/g;
let str = 'a "witch" and her "broom" is one';
alert( str.match(regexp) ); // witch, broom
// it finds the " then the . once find one it stops and move on to next character which is the quote

alert( "123 456".match(/\d+ \d+?/) ); // 123 4
// it finds the digit then keep going until the space(in previous example it went to end of string because dot matches anything) then it stops, then second digit once find 4 it look for next character in the regexp but there is nothing so it stops

// altenative
let regexp = /"[^"]+"/g;
let str = 'a "witch" and her "broom" is one';
alert( str.match(regexp) ); // witch, broom

let regexp = /<!--.*?-->/gs;
let str = `... <!-- My -- comment
 test --> ..  <!----> ..
`;
alert( str.match(regexp) ); // '<!-- My -- comment \n test -->', '<!---->'

let regexp = /<[^<>]+>/g;
let str = '<> <a href="/"> <input type="radio" checked> <b>';
alert( str.match(regexp) ); // '<a href="/">', '<input type="radio" checked>', '<b>'

// 17 grouping
let regexp = /(\w+\.)+\w+/g;
alert( "site.com my.site.com".match(regexp) ); // site.com,my.site.com

let regexp = /[-.\w]+@([\w-]+\.)+[\w-]+/g;
alert("my@mail.com @ his@site.com.uk".match(regexp)); // my@mail.com, his@site.com.uk

// when using () the return is an array with the exact match in the first item like
// vip vip vip witout the g flag  but matchall works with g flag     
let dateRegexp = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
let str = "2019-04-30";
let groups = str.match(dateRegexp)
// ["2019-04-30", "2019", "04", "30", index: 0, input: "2019-04-30", groups: undefined]


let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
let str = "2019-04-30";
let groups = str.match(dateRegexp).groups;
alert(groups.year); // 2019
alert(groups.month); // 04
alert(groups.day); // 30

// useful in replacing
let str = "John Bull";
let regexp = /(\w+) (\w+)/;
alert( str.replace(regexp, '$2, $1') ); // Bull, John

// to stop it
let str = "Gogogo John!";
// ?: exludes 'go' from capturing
let regexp = /(?:go)+ (\w+)/i;
let result = str.match(regexp);
alert( result[0] ); // Gogogo John (full match)
alert( result[1] ); // John
alert( result.length ); // 2 (no more items in the array)

// 18 lookahead lookbehind
// X(?=Y)	Positive lookahead	X if followed by Y
// X(?!Y)	Negative lookahead	X if not followed by Y
// (?<=Y)X	Positive lookbehind	X if after Y
// (?<!Y)X	Negative lookbehind	X if not after Y

// examples
let regexp = /^[0-9a-fA-F]{2}(:[0-9a-fA-F]{2}){5}$/i
let regexp = /[0-9a-f]{2}(:[0-9a-f]{2}){5}/
alert( regexp.test('01:32:54:67:89:AB') ); // true
alert( regexp.test('0132546789AB') ); // false (no colons)
alert( regexp.test('01:32:54:67:89') ); // false (5 numbers, must be 6)
alert( regexp.test('01:32:54:67:89:ZZ') ) // false (ZZ ad the end)

let regexp =  /#([a-f0-9]{3}){1,2}\b/gi
let str = "color: #3f3; background-color: #AA00ef; and: #abcd";
alert( str.match(regexp) ); // #3f3 #AA00ef

let regexp = /-?\d+(\.\d)?/g;
let str = "-1.5 0 2 -123.4.";
alert( str.match(regexp) ); // -1.5, 0, 2, -123.4

function parse(expr) {
  let regexp = /(-?\d+(?:\.\d+)?)\s*([-+*\/])\s*(-?\d+(?:\.\d+)?)/;
  let result = expr.match(regexp);
  if (!result) return [];
  result.shift();
  return result;
}
alert( parse("-1.23 * 3.45") );  // -1.23, *, 3.45