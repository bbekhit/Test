val = Math.PI;
val = Math.round(4.6);
val = Math.floor(5.8); //5
val = Math.ceil(5.3); //5
val = Math.sqrt(64); //8
val = Math.pow(8, 2); //64
val = Math.random();
val = Math.min(1, 2, 3, 4);

var random = Math.floor(Math.random() * colors.length);

function randomColor() {
  var r = Math.floor(Math.random() * 256); // gives a number from 0-255
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  // return "rgb(" + r + ", " + g + ", " + b + ")";
  return `rgb(${r},${g},${b})`
}

// Math.min takes comma separated values
function maxmin(arr) {
  return [Math.max(...arr), Math.min(...arr)];
}

Math.random() // gives number from 0 inclusive to 1exclusive
Math.floor(Math.random() * 100)  // gives a number from 0-99
Math.floor(Math.random() * 100) + 1 // gives a number from 1-100
Math.floor(Math.random() * (4-2+1))+2

