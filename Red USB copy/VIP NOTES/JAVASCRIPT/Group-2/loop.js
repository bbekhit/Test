//
let i = 0;
do {
  alert(i);
  i++;
} while (i < 3);

//
let i = 0;
while (i < 3) {
  // shows 0, then 1, then 2
  alert(i);
  i++;
}

//
let i = 0;
for (i = 0; i < 3; i++) {
  // use an existing variable
  alert(i); // 0, 1, 2
}
alert(i); // 3, visible, because declared outside of the loop

// SKIPPING
let i = 0; // we have i already declared and assigned
for (; i < 3; i++) {
  // no need for "begin"
  alert(i); // 0, 1, 2
}

let i = 0;
for (; i < 3; ) {
  alert(i++);
}

for (;;) {
  // repeats without limits
}

// BREAKING
let sum = 0;
while (true) {
  let value = +prompt("Enter a number", "");
  if (!value) break; // (*)  if the user enters an empty line or cancels the input. It stops the loop immediately, passing control to the first line after the loop. Namely, alert.
  sum += value;
}
alert("Sum: " + sum);

let i = 0;
while (i < 10000000) {
  if (i === 6) break;
  alert(i);
  i++;
}

// CONTINUE
for (let i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;
  alert(i); // 1, then 3, 5, 7, 9
}

// same as
for (let i = 0; i < 10; i++) {
  if (i % 2) {
    alert(i);
  }
} // here i % 2 check for odd

let i = 0;
while (++i < 5) alert(i); // 1,2,3,4

let i = 0;
while (i++ < 5) alert(i); // 1,2,3,4,5
