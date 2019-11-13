var twoSum = function(nums, target) {
  let map = {};
  let res = [];
  for (let i in nums) {
    if (map[target - nums[i]] !== undefined) {
      res.push(map[target - nums[i]], i);
    } else {
      map[nums[i]] = i;
    }
  }
  return res;
};

//   **************

// chunking arr
function chunk(arr, size) {
  let res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
}
chunk([1, 2, 3, 4, 5, 6, 7, 8], 2);

//   **********

function bubbleSort(arr) {
  arr.map(item =>
    arr.map((subItem, i) => {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    })
  );
  return arr;
}

//   *****************************

function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  var htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str
    .split("")
    .map(item => htmlEntities[item] || item)
    .join("");
}

// **********************************************
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let mapArr1 = {};
  let mapArr2 = {};
  for (let i of arr1) {
    mapArr1[i] = (mapArr1[i] || 0) + 1;
  }
  for (let i of arr2) {
    mapArr2[i] = (mapArr2[i] || 0) + 1;
  }
  for (let i in mapArr1) {
    if (!(i ** 2 in mapArr2)) {
      return false;
    }
    if (mapArr1[i] !== mapArr2[i ** 2]) {
      return false;
    }
  }
  return true;
}

// **********************************
function countUniqueChar(arr) {
  let map = {};
  let result = [];
  for (let item of arr) {
    map[item] = (map[item] || 0) + 1;
  }
  for (let i in map) {
    result.push(i);
  }
  return result.length;
}

// ************************************
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// *************************************************************
function sameFrequency(num1, num2) {
  let arr1 = num1.toString();
  let arr2 = num2.toString();
  let map1 = {};
  let map2 = {};
  for (let item of arr1) {
    map1[item] = (map1[item] || 0) + 1;
  }
  for (let item of arr2) {
    map2[item] = (map2[item] || 0) + 1;
  }
  if (arr1.length !== arr2.length) return false;
  for (let i in map1) {
    if (map1[i] !== map2[i]) return false;
  }
  return true;
}

// **************************************************************
function flatten(oldArr) {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

// ******************************************************
function intersect(arr1, arr2) {
  arr1
    .filter((item, i, self) => self.indexOf(item) === i)
    .filter(subItem => arr2.indexOf(subItem) > -1);
}
intersect(
  ["mike", "sue", "tom", "kathy", "henry"],
  ["howey", "jim", "sue", "jennifer", "kathy", "hank", "alex"]
);
intersect(["sue", "sue", "kathy"], ["kathy", "kathy", "sue"]);

// ******************************************************************

function curry(f) {
  const inputargs = f.length;
  const testargs = [];
  const curried = (...args) =>
    testargs.push(...args) >= inputargs
      ? f(...testargs.slice(0, inputargs))
      : curried;

  return curried;
}

// ********************************
// HOC

// ********************************************************

function hoist() {
  // var age; translated to this so it wil output undefined
  console.log(age);
  var age = 10;
}
hoist(); // undefined
function hoist() {
  // there is no var so it won't hoist
  console.log(age);
  age = 10;
}
hoist(); // not defined error
function hoist() {
  // here the age is above the console.log so it's declared as global variabl
  age = 10;
  console.log(age);
}
hoist(); // no error
