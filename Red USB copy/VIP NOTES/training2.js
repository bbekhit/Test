let numbers  = [ 10, 20, 30]

function* generateNums(nums){
  for(let i = 0; i < nums.length; i++){
    yield nums[i]
  }
}
let generator = generateNums(numbers)

console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next())

/// 