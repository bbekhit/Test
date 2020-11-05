[ 1,
  2,
  4,
  11,
  14,
  17,
  20,
  21,
  23,
  24,
  26,
  29,
  31,
  33,
  34,
  39,
  42,
  47,
  49,
  50,
  53,
  56,
  57,
  62,
  65,
  67,
  69,
  76,
  78,
  79,
  91,
  98,
  101,
  102,
  103,
  121,
  122,
  125,
  127,
  136,
  173,
  189,
  199,
  200,
  202,
  206,
  218,
  230,
  236,
  238,
  242,
  252,
  253,
  257,
  268,
  273,
  277,
  278,
  283,
  286,
  297,
  298,
  301,
  311,
  322,
  339,
  340,
  378,
  380,
  403,
  404,
  415,
  416,
  443,
  461,
  528,
  529,
  621,
  647,
  680,
  695,
  767,
  896,
  938,
  953,
  973,
  986,
  1027,
  1108,
  1357,
  1375,
  1379 ]
//560, 1249, 269, 139, 88, 124, 543, 314, 987, 211, 158, 349, 636, 721, 523, 282 , 270, 670,   
// 785, 398, 689, 839, 896, 1026,
// 1 *** (242 - valid Anagram)
var isAnagram = function(s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("")
};

// 2 ** (121 - Stocks)
function StockPicker(prices) {
  let minPrice = prices[0];
  let profit = -1;
  for (let item of prices) {
    if (item > minPrice) {
      profit = Math.max(profit, item - minPrice);
    } else {
      minPrice = item;
    }
  }
  return profit;
}

// 3 ** (1 - sum of two)
function sumTwo(arr, num) {
  let result = [];
  let map = {};
  for (let item of arr) {
    if (map[item] !== undefined) {
      result.push(arr.indexOf(map[item]), arr.indexOf(item));
    } else {
      map[num - item] = item;
    }
  }
  return result;
}
console.log(sumTwo([1, 3, 4, 7, 5, 9], 5));

// 4 ** (283 - move zeros)
var moveZeroes = function(nums) {
  let result = [];
  for(let item of nums){
      if(item === 0){
        let check = nums.splice(nums[item],1);
        console.log(check)
        result.push(check)
      }
  }
  return nums.concat(...result)
};

var moveZeroes = function(nums) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
        nums.push(nums.splice(i, 1));
        i--;
    }
  } 
}; 

// 5 ** (125 - isPalindrome)
var isPalindrome = function(s) {
  let arr = s.toLowerCase().split("").filter(item => /[a-zA-Z0-9]/.test(item));
  return arr.reverse().join("") === arr.join("")
};
function isPalindrom(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrom(str.slice(1, -1));
  return false;
}

// 6 ** (26 - remove duplicates)
var removeDuplicates = function(nums) {
  for(let i = 0; i < nums.length; i++){
      if(nums[i] === nums[i-1]){
          nums.splice(i,1)
      }
  }
};

// 7 ** (136 - single number)
var singleNumber = function(nums) {
  let map = {};
  for(let item of nums){
      map[item] = (map[item] || 0) + 1
  }
  for(let i in map){
      if(map[i] === 1) return i
  }
};

// 8 ** (680 = valid palindrom 2)
var validPalindrome = function(str) { 
  let start = 0;
  let end = str.length - 1;
  // "abcaafde" start = 0 end = 7 slice(0,7) slice(1,8)
  // "abcaafd" "bcaafd"

  // "aaaac"  start = 0 end = 5
  // 
  while(start <= end) {
    if(str[start] !== str[end]) {
	  //check both ways, slice here is not so intuitive
      return valid(str.slice(start, end))
        || valid(str.slice(start + 1, end + 1));
    }

    start++;
    end--;
  }
  return true;
};

function valid(s) {
  for(let i = 0; i < s.length; i++) {
    if(s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
validPalindrome("abca");

// 9 ** (415 - add strings)
var addStrings = function(num1, num2) { // "123" "249"
  const length = Math.max(num1.length, num2.length) + 1;
  let result = new Array(length);
  let carry = 0;
  for(let i = 0; i < length; i++){
    const digit1 = parseInt(num1[num1.length - 1 - i] || 0, 10);
    const digit2 = parseInt(num2[num2.length - 1 - i] || 0, 10);
    let sum = digit1 + digit2 + carry;
    carry = 0;

    if(sum > 9){
      carry = 1;
      sum -= 10;
    }💣
    
    result[length - 1 -i] = sum;
  }
  if (result[0] === 0) result.shift()

  return result.join("");
};


// 10 ** (767 - reorganizing string)
var reorganizeString1 = function(str) {
    let map = {};
    for (let item of str) map[item] = (map[item] || 0) + 1;

    let sort = Object.keys(map).sort((a,b)=> map[b] - map[a]);
    let res = [];
    let index = 0;

    for (let i = 0; i < sort.length; i++) {
        let occur = map[sort[i]];
        // if (occur > parseInt((str.length + 1)/2)) return "";
        if(occur > Math.floor((s.length + 1) / 2)) return ""
        for (let j = 0;j < occur;j++) {
            if (index >= str.length) index = 1;
            res[index] = sort[i];
            index += 2;
        }
    } 
    return res.join('');
};

// 11 ** (278 - first bad version)
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return n => {
      let lo = 1, hi = n;
      while (lo < hi) {
          const mid = Math.floor((lo + hi) / 2);
          isBadVersion(mid) ? hi = mid : lo = mid + 1;
      }
      return hi;
  };
};

function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== num && start <= end) {
    if (num > arr[middle]) start = middle + 1;
    else end = middle - 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === num ? middle : -1;
}

// 12 ** (277 - find celebrity)
var solution = function(knows) {
  return function(n){
    let candidate = 0;
    for(let i = 1; i < n; i++){
      if(knows(candidate,i)){
        candidate = i;
      }
    }
    for(let i = 0; i < n; i++){
      if(i != candidate && (knows(candidate,i) || !knows(i,candidate))){
        return -1
      }
    }
    return candidate;
  }
}

// 13 ** (189 - rotate array)
var rotate = function(nums, k) {
  nums.unshift(...nums.splice(nums.length-k));
 return nums; 
};

// 13 ** (268 - missing number)
var missingNumber = function(nums) { 
  let sum = 0;
  for (let i = 1; i <= nums.length; i++) {
    sum += i;
  }
  let partialSum = nums.reduce((a, b) => a + b);
  return sum - partialSum;
};

// 14 ** (69 - square root)
function sqrt(x){
  let l = 1;
  let r = x;
  
  while(l <= r) {
    const mid = Math.floor((l + r) / 2);
    
    if (mid**2 === x) {
      return mid;
    } else if (mid**2 > x) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return r;
}

// 15 ** (461 - hamming distance)
var hammingDistance = function(x, y) {
  return (x ^ y).toString(2).replace(/0/g, '').length;
};

// 16 ** (53 - Maximum Subarray)
var maxSubArray = function(nums) {
  let partial = 0;
  let maxSum = nums[0];
  for(let item of nums){
    partial += item
    maxSum = Math.max(partial, maxSum)
    if(partial < 0) partial = 0;
  }
  return maxSum
};

// 17 ** (50 - power)
var myPow = function(x, n) {
  if(n === 1) return x
  else if( n === 0) return 1
  else if(n === -1) return 1 / x
  else if (n % 2 === 0) {
    const m = myPow(x, n/2);
    return m * m
  }
  else return x * myPow(x, n-1)
};

// 18 - (4 - median of two sorted arrays)
var findMedianSortedArrays = function(nums1, nums2) { // [1,2,3] [4,5,6]
  const joined = nums1.concat(nums2).sort((a,b) => a - b )
  const even = joined.length / 2, 
        isOdd = joined.length % 2;
  if (isOdd) {
      return joined[Math.floor(joined.length / 2)];
  } else {
      return (joined[even] + joined[even - 1]) / 2;
  };
};

// 19 - (39 - combination sum)
var combinationSum = function(candidates, target) { 
  let result = [];
  function recursive(remaining, idx, current){
    if (remaining < 0) {
      return;
    } else if (remaining === 0) {
      result.push(current.slice())
    }
    for(let i = idx; i < candidates.length; i++){
      current.push(candidates[i]);
      recursive(remaining - candidates[i], i, current);
      current.pop()
    }
  };
  recursive(target, 0, []) 
  return result;    
};

// 20 - (238 - product except self)
var productExceptSelf = function(nums) {
  let result = [];
  for(let i = 0; i < nums.length; i++){
     let cut = nums.splice(i, 1);
     let ans = nums.reduce((a,b) => a * b, 1)
     result.push(ans)
     nums.splice(i, 0, cut[0])
  }
  return result;
};
console.log(productExceptSelf([0,0])); //[24,12,8,6]

// 21 - (33 - search in rotated sort array)
var search = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while(start <= end){
      let middle = Math.floor((start + end) / 2)
      if(nums[middle] === target){
          return middle
      }
   if(nums[start] <= nums[middle]){
       if(nums[start] <= target && target <= nums[middle]){
           end = middle - 1
       }else{
           start = middle + 1
       }
   }else{
       if(nums[middle] <= target && target <= nums[end]){
           start = middle + 1
       }else{
           end = middle -1
       }
   }
 }
  return -1
}; // [2,3,4,5,6,7,0,1] 0 
   // start = 0, end = 8, middle = 4
   // nums[start] = 2, nums[middle] = 6


// 22 - (65 - valid number)
var isNumber = function(s) {
  if (s==="" || s===" "){
      return false
  }
  
  let num = Number(s)
  return !isNaN(num)
};

// 23 - (34 - first last position)
var searchRange = function(nums, target) {
  let map = {}
  for(let i = 0; i < nums.length; i++){
      map[nums[i]] = i
  }
  return !(target in map) ? [-1,-1] : [nums.indexOf(target), map[target]];
};


var isValid = function(s) {
  let mapLeft = {
      '{' : 1,
      '[' : 2,
      '(' : 3
  },
      mapRight = {
          '}' : 1,
          ']' : 2,
          ')' : 3
      };
  let stack = [];
  for(let i = 0; i < s.length; ++i) {
      if(mapLeft[s[i]]) {
          stack.push(s[i])
      } else if(!stack.length || mapRight[s[i]] != mapLeft[stack.pop()])
          return false;
  }
  return stack.length ? false : true;
};
console.log("()[]{}");