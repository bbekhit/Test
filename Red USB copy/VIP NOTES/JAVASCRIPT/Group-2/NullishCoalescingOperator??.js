// The important difference is that:

// || returns the first truthy value.
// ?? returns the first defined value.

let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

// Due to safety reasons, it’s forbidden to use ?? together with && and || operators. 
let x = 1 && 2 ?? 3; // Syntax error


let x = (1 && 2) ?? 3; // Works
alert(x); // 2