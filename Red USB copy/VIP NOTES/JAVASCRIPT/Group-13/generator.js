let numbers  = [ 10, 20, 30]

function* generateNums(nums){
  for(let i = 0; i < nums.length; i++){
    yield nums[i]
  }
}
let generator = generateNums(numbers)

console.log(generateNums(numbers).next().value)
console.log(generateNums(numbers).next().value)
console.log(generateNums(numbers).next().value)
console.log(generateNums(numbers).next())

/// example
function* generateArr(){
  yield * [1,2,3,4]
  yield 7
}

// example
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {

  // 0..9
  yield* generateSequence(48, 57);

  // A..Z
  yield* generateSequence(65, 90);

  // a..z
  yield* generateSequence(97, 122);

}

let str = '';

for(let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}

alert(str); // 0..9A..Za..z

// example
let range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() { // a shorthand for [Symbol.iterator]: function*()
    for(let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};

alert( [...range] ); // 1,2,3,4,5