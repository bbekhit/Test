// median of Array
// missing two numbers
// 0-1 knapsack
// iteger to roman numeral
// matrix product
// autocomplete
// build order
// priority queue
// list cycles
// Is One Array a Rotation of Another
// One Away Strings
// Rotating 2D Array
// Find Where to Expand in Minesweeper
// Longest Common Sub-sequence
// Longest Common Sub-string
// Finding Vowels in JS
// harmless ransom note

// 1*****************************************************************
function StockPicker(arr) {
  let minPrice = arr[0];
  let profit = -1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > minPrice) {
      profit = Math.max(profit, arr[i] - minPrice);
    } else {
      minPrice = arr[i];
    }
  }
  return profit;
}
StockPicker([45, 24, 35, 31, 40, 38, 11]);

// 2**********************************************************************
function reverseArrayInPlace(arr) {
  for (i = 0; i < arr.length; i++) {
    arr.splice(i, 0, arr.pop());
  }
  return arr;
}
reverseArrayInPlace([5, 4, 3, 2, 1]);

// 3****************************************************************************
// 65-90 are the ranges for A-Z (uppercase letters)
// 97-122 are the ranges for a-z (lowercase letters)
// 26 is the number of letters in the alphabet

function caesarCipher(s, k) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i);
    if (charCode < 65 || charCode > 122 || (charCode > 90 && charCode < 97)) {
      result += s[i];
    } else {
      let newCharCode = charCode + Math.ceil(k % 26);
      if (charCode >= 97 && newCharCode > 122) {
        newCharCode = newCharCode - 122 + 96;
      }
      if (charCode <= 90 && newCharCode > 90) {
        newCharCode = newCharCode - 90 + 64;
      }
      result += String.fromCharCode(newCharCode);
    }
  }

  console.log(result);
  return result;
}

// 4**************************************************************
function rotate(arr, num) {
  arr.unshift(...arr.splice(arr.length - num));
  return arr;
}
rotate([1, 2, 3, 4], 2);

function reverseArrayInPlace(arr) {
  for (i = 0; i < arr.length; i++) {
    arr.splice(i, 0, arr.pop());
  }
  return arr;
}
reverseArrayInPlace([5, 4, 3, 2, 1]);

function chunk(arr, num) {
  let result = [];
  for (let i = 0; i < arr.length; i += num) {
    return result.push(arr.slice(i, i + num));
  }
  return result;
}

function combinations(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}
combinations("hello");
