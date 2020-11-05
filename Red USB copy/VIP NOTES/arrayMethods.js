// concat length indexOf lastIndexOf includes slice splice 

//  methods on array only
// sort find reverse map filter findIndex push unshift

// creating arrays
let arr = [1,2,3]
let arr1 = new Array(1,2,3)
let arr2 = [1,2,2,4,5,90,80,66,77,58]

console.log(Array.isArray(arr)) //true

arr[2] = 100; //to set a number [1,2,100]
console.log(arr)

console.log(arr.indexOf(3)) //-1

//push // add at the end
//unshift // add at the beginning

// arr2.push(100)
// arr2.unshift(200)
console.log(arr2)
//arr2.splice(3,3)
arr2.slice(1)
console.log(arr2)

 // Splice out of array
 post.likes.splice(removeIndex, 1);

 arr2.sort(function(x,y){
     return x-y
 })
 arr2.sort((x,y) =>  x-y)

// *******************************************************************************************
//  find
arr2.find(item => item < 50) //find first item that passes the test

// findIndex
arr2.findIndex(item => item === 2) //find index of first item that passes test

// forEach
// executes a call back function on each item and return undefined

// map
// executes a call back function on each item and return an array