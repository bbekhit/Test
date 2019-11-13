1- primitive types:
string-number-boolean-null-undefined-symbol
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
2-referenc type:
all as an object
new Date()--array--object
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
3-length is a property of string only
let val = 5 this is a number
let val = String(5) change it to string
console.log(val) 5
console.log(typeof val) string
console.log(val.length) 1
if we let val = 555 will get 3 for the length
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
4-let val = String(5+5) change it to string
console.log(val) 10
console.log(typeof val) string
console.log(val.length) 1
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
5-let val = String(true) change it to string
console.log(val) true
console.log(typeof val) string
console.log(val.length) 4
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
6-let val = String(new Date()) change it to string
console.log(val) true
console.log(typeof val) string
console.log(val.length) 4
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
7-let val = new Date()
console.log(typeof val)
