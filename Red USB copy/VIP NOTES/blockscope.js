var x = 0;
let y = 1;
const z = 2;

if (true) {
  var x = 3;
  let y = 4;
  const z = 5;
  console.log(`block scoop: ${x} ${y} ${z}`); //3,4,5
}
console.log(`global scoop: ${x} ${y} ${z}`); //3,1,2

let x = 10;
function foo() {
  let x;
  let y = 20; // free variable
  function bar() {
    let z = 15; // free variable
    return x + y + z;
  }
  return x;
}
var test = foo();
console.log(test); // NaN
// the variable x inside the function block scope is different from the one outside global scope
