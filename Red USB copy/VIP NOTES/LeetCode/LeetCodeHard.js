// 1
function sum(a) {
  let currentSum = a;
  function f(b) {
    currentSum += b;
    return f;
  }
  f.toString = function() {
    return currentSum;
  };
  return f;
}
sum(4)(4)(2)

// 2
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// 3
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;
  for (let item of arr) { // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }
  return maxSum;
}
alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0

// leetcode #76
var minWindow = function(s, t) {
    
  // sliding window problem
  // break t into hash, so we decrement later
  let hash = {}
  let result = '';
  let counter = t.length;
  for (char of t){
      hash[char] = hash[char] ? hash[char] + 1 : 1;
  }
  
  let i = 0;
  let j = 0;
  while (i < s.length){
      
      if (hash[s[i]] !== undefined){
          
          //decrement occurences 
          hash[s[i]]--;
          
          // - Object.keys(hash).every(key => hash[key] <= 0)
          // this logic checks that in our hash, all values of hash[key] are <= 0
          // 
          // - when this logic is true, it means string at s.slice(j, i) fulfills our constraint
          //
          // - now, we try to shrink the string until this constraint no longer holds true
          // 
          while (Object.keys(hash).every(key => hash[key] <= 0)){
              let candidateString = s.slice(j, i+1);

              // before doing anything, save result if its shorter than what we've found
              if (!result || candidateString.length < result.length){
                   result = candidateString;
              }
              
              // we "break" our constraint by incrementing hash so its value is no longer 0
              // if as part of shrinking our string, we take out a character in t 
              if (hash[s[j]] !== undefined){
                  hash[s[j]]++;
              }
              j++; //otherwise, keeping increasing j to 'shrink' the string
          }
      } 
      i++;
  }
  return result;
};

function minWindow(s,t) {
  let mapT = {};
  for(let item of t) {
    mapT[item] = (mapT[item] || 0) + 1
  }
  let result = '';
  
  let i = 0;
  let j = 0;

  while(i < s.length) {
    if (mapT[s[i]] !== undefined){
      mapT[s[i]]--;

      while (Object.keys(mapT).every(key => mapT[key] <= 0)){
        let candidateString = s.slice(j, i+1);

        if (!result || candidateString.length < result.length){
             result = candidateString;
        }
         
        if (mapT[s[j]] !== undefined){
            mapT[s[j]]++;
        }
        j++;
      }
    }
    i++
  }
  return result;
}
console.log(minWindow("ADOBECODEBANC","ABC"));


// leetcode #1357
var Cashier = function(n, discount, products, prices) {
  this.currentCustomer = 0;
  this.discountReached = n;
  this.discountAmount = discount;
  this.productArray = products;
  this.pricesArray = prices    
};
Cashier.prototype.getBill = function(product, amount) {
  this.currentCustomer++;
  let answer = 0;
  for (let i = 0; i < product.length; i++)    {
      answer += amount[i] * this.pricesArray[this.productArray.indexOf(product[i])];
  }
  if (this.currentCustomer == this.discountReached)    {
      this.currentCustomer = 0;
      return answer - (this.discountAmount * answer) / 100;
  }
  return answer;
}