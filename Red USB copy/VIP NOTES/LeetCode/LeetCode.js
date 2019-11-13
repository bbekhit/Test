//SOLUTIONS // https://www.youtube.com/channel/UCMeryEL_lXQJXQdaN9bZxcQ/videos
//-1 // *************************************** leetcode #1122
function relativeSortArray(arr1, arr2) {
  let filteredOut = arr1
    .filter(item => arr2.indexOf(item) === -1)
    .sort((a, b) => a - b);
  let filteredIn = arr1.filter(item => arr2.indexOf(item) > -1);
  filteredIn.sort((a, b) => {
    if (arr2.indexOf(a) > arr2.indexOf(b)) return 1;
    else if (arr2.indexOf(a) < arr2.indexOf(b)) return -1;
    else if (a > b) return 1;
    else if (b > a) return -1;
    else return 0;
  });
  return filteredIn.concat(filteredOut);
}

function relativeSortArray(arr1, arr2) {
  let h = {};
  for (let i = 0; i < arr2.length; ++i) h[arr2[i]] = i;
  for (const i of arr1) if (!(i in h)) h[i] = 1000 + i;
  arr1.sort((a, b) => h[a] - h[b]);
  return arr1;
}

function relativeSortArray(arr1, arr2) {
  arr1.sort((a, b) => {
    if (arr2.indexOf(a) === -1) return a;
    // else if (arr2.indexOf(b) === -1) return b;
    else if (arr2.indexOf(a) > arr2.indexOf(b)) return 1;
    else if (arr2.indexOf(a) < arr2.indexOf(b)) return -1;
    else if (a > b) return 1;
    else if (b > a) return -1;
    else return 0;
  });
  return arr1;
}
relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19, 18], [2, 1, 4, 3, 9, 6]);

//-2 // *************************************** leetcode #33
// binary see #42 -
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    // When dividing the roated array into two halves, one must be sorted
    // Check if the left side is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        // target is in the left
        right = mid - 1;
      } else {
        // target is in the right
        left = mid + 1;
      }
    }
    // Otherwise, the right side is sorted
    else {
      if (nums[mid] <= target && target <= nums[right]) {
        // target is in the right
        left = mid + 1;
      } else {
        // target is in the left
        right = mid - 1;
      }
    }
  }
  return -1;
};

//-3 // *************************************** leetcode #1
function sumTwo(arr, num) {
  let result = [];
  let map = {};
  for (let item of arr) {
    if (map[item] !== undefined) {
      result.push(map[item], item);
    } else {
      map[num - item] = item;
    }
  }
  return result;
}
map = {
  4: 1,
  1: 4,
  2: 3,
  "-1": 6
};
console.log(sumTwo([1, 4, 3, 6], 5));

function sumTwo(arr, num) {
  let result = [];
  let map = {};
  for (let i in arr) {
    if (map[num - arr[i]] !== undefined) {
      result.push(map[num - arr[i]], i);
    } else {
      map[arr[i]] = i;
    }
  }
  return result;
}
console.log(sumTwo([1, 4, 3, 6], 5));

//-4 // *************************************** leetcode #4
var findMedianSortedArrays = function(nums1, nums2) {
  const joined = nums1.concat(nums2).sort((a, b) => a - b);
  const even = joined.length / 2,
    isOdd = joined.length % 2;
  if (isOdd) {
    return joined[Math.floor(joined.length / 2)];
  } else {
    return (joined[even] + joined[even - 1]) / 2;
  }
};

//-5 // *************************************** leetcode #26
function removeDup(arr) {
  return arr.filter((item, i, self) => self.indexOf(item) === i);
}
function removeDup(arr) {
  let test = [];
  for (let i in arr) {
    if (test.indexOf(arr[i]) === -1) {
      test.push(arr[i]);
    }
  }
  return test;
}
console.log(removeDup([1, 2, 3, 3, 2, 1, 1, 6, 7, 6, 8]));

// remove in place
var removeDuplicates = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

//-6 // *************************************** leetcode #80
// keeping 2 duplicates
var removeDuplicates = function(nums) {
  if (nums.length < 3) return nums.length;
  for (var i = 2; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] && nums[i] === nums[i - 2]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

//-7 // *************************************** leetcode #27
var removeElement = function(nums, val) {
  while (nums.indexOf(val, 0) >= 0) {
    nums.splice(nums.indexOf(val, 0), 1);
  }
  return nums.length;
};
var removeElement = function(nums, val) {
  return nums.filter(item => item !== val);
};
removeElement([3, 2, 2, 3], 3); // [2,2]

var removeElement = function(nums, val) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums;
};
removeElement([3, 2, 2, 3], 3);

//-8 // *************************************** leetcode #41
var firstMissingPositive = function(nums) {
  let output = 1;
  while (nums.indexOf(output) !== -1) {
    output += 1;
  }
  return output;
};

//-9 // *************************************** leetcode #66
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] = (digits[i] + 1) % 10;
    if (digits[i]) return digits;
  }
  digits.unshift(1);
  return digits;
};
plusOne([1,2,9])

//-10 // *************************************** leetcode #217
var containsDuplicate = function(nums) {
  let map = {};
  for (let item of nums) {
    map[item] = (map[item] || 0) + 1;
  }
  for (let i in map) {
    if (map[i] > 1) return true;
  }
  return false;
};
var containsDuplicate = function(nums) {
  return new Set(nums).size < nums.length;
};

//-11 // *************************************** leetcode #189
var rotate = function(nums, k) {
  nums.unshift(...nums.splice(nums.length - k));
  return nums;
};

//-12 // *************************************** leetcode #34
var searchRange = function(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }
  if (!target in map) {
    return [-1, -1];
  } else {
    return [nums.indexOf(target), nums.lastIndexOf(target)];
  }
};

//-13 // *************************************** leetcode #35
var searchInsert = function(nums, target) {
  return nums.includes(target)
    ? nums.indexOf(target)
    : nums.filter(elem => elem < target).length;
};

//-14 // *************************************** leetcode #39
// https://www.youtube.com/watch?v=Fo1C_LnhVaE
var combinationSum = function(candidates, target) {
  var res = [];
  var recur = function(remain, idx, cur) {
    if (remain < 0) {
      return;
    }
    if (remain === 0) {
      res.push(cur.slice());
    }
    for (var i = idx; i < candidates.length; i++) {
      cur.push(candidates[i]);
      recur(remain - candidates[i], i, cur);
      cur.pop();
    }
  };
  recur(target, 0, []);
  return res;
};

//-15 // *************************************** leetcode #1185
var dayOfTheWeek = function(day, month, year) {
  let days = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
  };
  let date = new Date(year, month - 1, day);
  let weekDay = date.getDay();
  return days[weekDay];
};

//-16 // *************************************** leetcode #1200
var minimumAbsDifference = function(arr) {
  arr = arr.sort((a, b) => a - b);
  let result = [];
  let min = Infinity;
  for (let i = 0; i < arr.length - 1; i++)
    min = Math.min(min, arr[i + 1] - arr[i]);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] == min) result.push([arr[i], arr[i + 1]]);
  }
  return result;
};

//-17 // *************************************** leetcode #53
var maxSubArray = function(nums) {
  let maxSum = nums[0];
  let partialSum = 0;
  for (let item of nums) {
    // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }
  return maxSum;
};

// maxSubArray of given number
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 3);

//-18 // *************************************** leetcode #73
var setZeroes = function(matrix) {
  let original = JSON.parse(JSON.stringify(matrix)),
    columns = [];

  for (let i = 0; i < original.length; i++) {
    for (let j = 0; j < original[i].length; j++) {
      if (original[i][j] === 0) {
        columns.push(j);
        matrix[i].fill(0);
      }
    }
  }

  columns.forEach(elem => {
    for (let k = 0; k < matrix.length; k++) {
      for (let l = 0; l < matrix[k].length; l++) {
        if (l === elem) {
          matrix[k][l] = 0;
        }
      }
    }
  });
};

var setZeroes = function(matrix) {
  var solution = [];
  for (var i = 0; i < matrix.length; ++i) {
    // step 1
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        solution.push(i);
        solution.push(j);
      }
    }
  }
  for (var k = 0; k < solution.length; ++k) {
    // step 2
    for (j = 0; j < matrix[solution[k]].length; j++) {
      matrix[solution[k]][j] = 0;
    }
    for (i = 0; i < matrix.length; ++i) {
      matrix[i][solution[k + 1]] = 0;
    }
    k++;
  }
};

//-19 // *************************************** leetcode #45
var jump = function(nums) {
  let globalMax = 0;
  let localMax = 0;
  let step = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (localMax < i) {
      // prevent the last index cannot reach
      return -1;
    }
    if (localMax > nums.length - 1) {
      break;
    }
    const cur = i + nums[i]; // farest we can reach for index i
    globalMax = Math.max(globalMax, cur);
    if (localMax == i) {
      localMax = globalMax;
      step++;
    }
  }
  return step;
};

//-20 // *************************************** leetcode #15
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let total = nums[left] + nums[right] + num;
      if (total > 0) {
        right--;
      } else if (total < 0) {
        left++;
      } else {
        result.push([num, nums[left], nums[right]]);
        while (nums[right] == nums[right - 1] && left < right) right--;
        while (nums[left] == nums[left + 1] && left < right) left++;
        left++;
        right--;
      }
    }
    while (nums[i] == nums[i + 1]) i++;
  }
  return result;
};

var threeSum = function(nums, target = 0) {
  const result = [];

  // we need 3 values for this to work
  // so return an empty array if we have less than 3
  if (nums.length < 3) {
    return result;
  }

  // sorting is ok because the function is already O(n^2)
  // and sort is O(nlogn)
  // this also lets us stop iterating once weve passed the target value
  nums = nums.sort((a, b) => a - b);

  // well use i as our anchor as we move through the array
  // we stop at nums.length - 2 to prevent undefined for k
  for (let i = 0; i < nums.length - 2; i++) {
    // because we sorted the array already
    // we can stop here if the current iterator is greater than the target value
    if (nums[i] > target) {
      break;
    }

    // if our iterator is the same as the previous value
    // skip it to prevent duplicate results
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // start j at i + 1
    let j = i + 1;

    // start k at end of array
    let k = nums.length - 1;

    // walking j and k towards each other to find all possible values
    // with i as our anchor value
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === target) {
        result.push([nums[i], nums[j], nums[k]]);

        // skip duplicate values of j and k
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;

        // move j and k inward
        j++;
        k--;
        continue;
      }
      if (sum < target) {
        j++;
        continue;
      }
      if (sum > target) {
        k--;
        continue;
      }
    }
  }
  return result;
};

//-21 // *************************************** leetcode #16
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let minDiff = Infinity;
  let res;
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      let tmp = nums[left] + nums[i] + nums[right];
      if (Math.abs(tmp - target) < minDiff) {
        res = tmp;
        minDiff = Math.abs(tmp - target);
      }

      if (tmp === target) {
        return target;
      } else if (tmp < target) left++;
      else right--;
    }
  }
  return res;
};

//-22 // *************************************** leetcode #18
var fourSum = function(nums, target) {
  //sort
  nums = nums.sort((a, b) => a - b);
  let i, j, k, m, sum;
  let len = nums.length;
  let res = [];
  for (i = 0; i < len - 3; i++) {
    //avoid repetitive values
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (j = i + 1; j < len - 2; j++) {
      //avoid repetitive values
      if (j !== i + 1 && nums[j] === nums[j - 1]) continue;
      k = j + 1;
      m = len - 1;
      while (k < m) {
        sum = nums[i] + nums[j] + nums[k] + nums[m];
        if (sum === target) {
          res.push([nums[i], nums[j], nums[k], nums[m]]);
          //avoid repetitive values
          while (nums[k + 1] === nums[k]) k++;
          while (nums[m - 1] === nums[m]) m--;
          k++;
          m--;
        } else if (sum > target) {
          m--;
        } else {
          k++;
        }
      }
    }
  }
  return res;
};

//-23 // *************************************** leetcode #48
var rotate = function(matrix) {
  result = [];
  len = matrix.length;
  for (let i = 0; i < len; i += 1) {
    temp = [];
    for (j = len - 1; j >= 0; j -= 1) {
      temp.push(matrix[j][i]);
    }
    result.push(temp);
  }
  for (let i in result) {
    matrix[i] = result[i];
  }
};

//-24 // *************************************** leetcode #74
var searchMatrix = function(matrix, target) {
  for (let row = 0; row < matrix.length; row += 1) {
    if (target < matrix[row][0]) return false;
    if (target > matrix[row][matrix[row].length - 1]) continue;
    for (let col = 0; col < matrix[row].length; col += 1) {
      if (matrix[row][col] === target) return true;
    }
  }
  return false;
};

//-25 // *************************************** leetcode #88
const merge = (nums1, m, nums2, n) => {
  let count = 0;
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] === 0) {
      count++;
      if (count == n) {
        nums1.splice(nums1.length - n);
      }
    }
  }
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b);
};

//-26 // *************************************** leetcode #121
var maxProfit = function(arr) {
  let minPrice = arr[0];
  let profit = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > minPrice) {
      profit = Math.max(profit, arr[i] - minPrice);
    } else {
      minPrice = arr[i];
    }
  }
  return profit;
};

//-27 // *************************************** leetcode #122
var maxProfit = function(prices) {
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) max += prices[i] - prices[i - 1];
  }
  return max;
};

//-28 // *************************************** leetcode #128
var longestConsecutive = function(nums) {
  let longest = 0;
  /* ES5, a bit faster
  let numSet = {};
  for(let i = 0; i < nums.length; i++){
      numSet[nums[i]] = true;
  }
  */
  let numSet = new Set(nums);
  for (let i = 0; i < nums.length; i++) {
    let shift = 1;
    // ES5: .hasOwnProperty instead of .has
    while (numSet.has(nums[i] + shift)) shift++;
    longest = Math.max(shift, longest);
  }
  return longest;
};

//-29 // *************************************** leetcode #167
const twoSum = (numbers, target) => {
  let p1 = 0;
  let p2 = numbers.length - 1;
  while (numbers[p1] + numbers[p2] !== target) {
    if (numbers[p1] + numbers[p2] > target) {
      p2--;
    } else {
      p1++;
    }
  }
  return [p1 + 1, p2 + 1];
};

var twoSum = function(numbers, target) {
  let left = 0,
    right = numbers.length - 1;
  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      // sum > target
      right--;
    }
  }
};

var twoSum = function(numbers, target) {
  let map = {},
    result;
  numbers.forEach((number, index) => {
    let newIndex = index + 1;
    !map[number] && (map[number] = newIndex);
    map[target - number] &&
      (result = [newIndex, map[target - number]].sort((a, b) => a - b));
  });
  return result;
};

//-30 // *************************************** leetcode #268
var missingNumber = function(nums) {
  let sum = 0;
  for (let i = 1; i <= nums.length; i++) {
    sum += i;
  }
  let partialSum = nums.reduce((a, b) => a + b);
  return sum - partialSum;
};

//-31 // *************************************** leetcode #219
// two 2 condition for loop
var containsNearbyDuplicate = function(nums, k) {
  if (!nums) return false;
  if (new Set(nums).size != nums.length) {
    for (var i = 0; i < nums.length; i++) {
      for (var j = i + 1; j <= i + k && j < nums.length; j++) {
        if (nums[j] == nums[i]) return true;
      }
    }
    return false;
  }
  return false;
};

const containsNearbyDuplicate = (nums, k) => {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hash && i - hash[nums[i]] <= k) {
      return true;
    }
    hash[nums[i]] = i;
  }
  return false;
};

//-32 // *************************************** leetcode #228
function summaryRanges(nums) {
  var res = [];
  for (var i = 0, left = nums[0]; i < nums.length; i++) {
    if (nums[i] + 1 !== nums[i + 1]) {
      res.push(left === nums[i] ? "" + nums[i] : left + "->" + nums[i]);
      left = nums[i + 1];
    }
  }
  return res;
}

//-33 // *************************************** leetcode #169
var majorityElement = function(nums) {
  let map = {};
  let compare = 0;
  let most;
  for (let item of nums) {
    map[item] = (map[item] || 0) + 1;
    if (map[item] > compare) {
      compare = map[item];
      most = item;
    }
  }
  return most;
};

//-34 // *************************************** leetcode #283
// reverse loop
var moveZeroes = function(nums) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1));
      i--;
    }
  }
};

var moveZeroes = function(nums) {
  for (i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1));
    }
  }
};

//-35 // *************************************** leetcode #442
var findDuplicates = function(nums) {
  return nums.filter((item, index, self) => self.indexOf(item) !== index);
};

var findDuplicates = function(nums) {
  const duplicates = [];
  /*
   * mark visited number with "-" in index & record duplicates
   * by telling if a number is already visited.
   */
  for (let i = 0; i < nums.length; i++) {
    const position = Math.abs(nums[i]) - 1;
    if (nums[position] < 0) duplicates.push(position + 1);
    else nums[position] = -nums[position];
  }
  return duplicates;
};

//-36 // *************************************** leetcode #485
var findMaxConsecutiveOnes = function(nums) {
  return Math.max(
    ...nums
      .join("")
      .split("0")
      .map(x => x.length)
  );
};

//-37 // *************************************** leetcode #561
var arrayPairSum = function(nums) {
  let sum = 0;
  let sorted = nums.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i += 2) {
    sum += sorted[i];
  }
  return sum;
};

//-38 // *************************************** leetcode #977
var sortedSquares = arr => arr.map(a => a * a).sort((a, b) => a - b);

//-39 // *************************************** leetcode #1089
var duplicateZeros = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      arr.pop();
      i++;
    }
  }
};

//-40 // *************************************** leetcode #75
var sortColors = function(nums) {
  for (let j = nums.length; j >= 0; j--) {
    for (let i = 0; i < j; i++) {
      if (nums[i] > nums[j]) {
        swap(i, j);
      }
    }
  }
  function swap(i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  return nums;
};

function sortColors(nums) {
  function swap(i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  let l = 0;
  let r = nums.length - 1;
  let i = 0;
  while (i <= r) {
    const n = nums[i];
    if (n === 0) {
      swap(i, l);
      l++;
      i++;
    } else if (n === 2) {
      swap(i, r);
      r--;
    } else {
      i++;
    }
  }
}

//-41 // *************************************** leetcode #78
const subsets = nums => {
  let res = [[]],
    temp;
  for (let num of nums) {
    temp = res.map(x => [...x, num]);
    res = [...res, ...temp];
  }
  return res;
};
subsets([1, 2, 3]);

//-42 // *************************************** leetcode #81
// binary
var search = function(nums, target) {
  nums = nums.filter((item, i, self) => self.indexOf(item) === i);
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (nums[middle] === target) {
      return true;
    }
    if (nums[start] <= nums[middle]) {
      if (nums[start] <= target && target <= nums[middle]) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    } else {
      if (nums[middle] <= target && target <= nums[end]) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }
  }
  return false;
};

//-43 // *************************************** leetcode #90
var subsetsWithDup = function(nums) {
  nums = nums.sort((a, b) => a - b);
  let res = [[]],
    temp;
  for (let num of nums) {
    temp = res.map(x => [...x, num]);
    res = [...res, ...temp];
  }
  res = res.map(item => item.toString());
  let newRes = res.filter((item, i, self) => self.indexOf(item) === i);
  return newRes.map(item => JSON.parse(`[${item}]`));
};
subsetsWithDup([1, 2, 2]);

//-44 // *************************************** leetcode #209
// https://www.youtube.com/watch?v=GzQ1hX2jaQU
var minSubArrayLen = function(s, nums) {
  let min = Infinity;
  let i = 0;
  let sum = 0;
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j];
    while (sum >= s) {
      min = Math.min(min, j - i + 1);
      sum -= nums[i++];
    }
  }
  return min === Infinity ? 0 : min;
};

var minSubArrayLen = function(s, nums) {
  var curr_sum, i, j;
  var minLength = Number.MAX_SAFE_INTEGER;
  for (i = 0; i < nums.length; i++) {
    curr_sum = nums[i];
    for (j = i + 1; j <= nums.length; j++) {
      if (curr_sum >= s && j - 1 - i < minLength) {
        minLength = j - i;
      }
      if (curr_sum > s) break;
      curr_sum = curr_sum + nums[j];
    }
  }
  if (minLength === Number.MAX_SAFE_INTEGER) return 0;
  return minLength;
};

var minSubArrayLen = function(s, nums) {
  var minSize = Number.MAX_SAFE_INTEGER;
  var runningSum = 0;
  var start = 0;
  var end = 0;
  while (start < nums.length) {
    // If current window is less than s grow window to the right
    if (runningSum < s && end < nums.length) {
      runningSum += nums[end];
      end++;
    }
    // If current window is greater than s shrink window from the left
    else if (runningSum >= s) {
      minSize = Math.min(end - start, minSize);
      runningSum -= nums[start];
      start++;
    }
    // We've reached the end
    else {
      break;
    }
  }
  return minSize === Number.MAX_SAFE_INTEGER ? 0 : minSize;
};

//-45 // *************************************** leetcode #152
// https://www.youtube.com/watch?v=-rUBh45rugs
var maxProduct = function(nums) {
  if (nums.length === 0) return 0;
  let maximum = (minimum = result = nums[0]);

  for (let i = 1; i < nums.length; i++) {
    [maximum, minimum] = [
      Math.max(maximum * nums[i], minimum * nums[i], nums[i]),
      Math.min(maximum * nums[i], minimum * nums[i], nums[i])
    ];

    result = Math.max(maximum, result);
  }
  return result;
};

//-46 // *************************************** leetcode #153
// binary
function findMin(nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (nums[m] > nums[r]) l = m + 1;
    else r = m;
  }
  return nums[l];
}

var findMax = function(arr) {
  let start = 0;
   let end = arr.length - 1
   while(start < end){
     let middle = Math.floor((start + end)/2)
     if(arr[middle] < arr[end]) end = middle - 1
     else start = middle
     return arr[end]
   }
 };

//-47 // *************************************** leetcode #154
// binary
var findMin = function(nums) {
  nums = nums.filter((item, i, self) => self.indexOf(item) === i);
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (nums[m] > nums[r]) l = m + 1;
    else r = m;
  }
  return nums[l];
};

//-48 // *************************************** leetcode #162
var findPeakElement = function(nums) {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    let middle = Math.floor((start + end) / 2);
    if (nums[middle] < nums[middle - 1]) {
      end = middle - 1;
    } else if (nums[middle] < nums[middle + 1]) {
      start = middle + 1;
    } else {
      return middle;
    }
  }
  return start;
};

//-49 // *************************************** leetcode #380

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.set = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.set.indexOf(val) >= 0) {
    return false;
  }
  this.set.push(val);
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  var index = this.set.indexOf(val);
  if (index < 0) {
    return false;
  }
  this.set.splice(index, 1);
  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  let random = Math.floor(Math.random() * this.set.length);
  return this.set[random];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

//-50 // *************************************** leetcode #905
const sortArrayByParity = A =>
  A.reduce((acc, number) => {
    if (number % 2 === 0) {
      acc.unshift(number);
    } else {
      acc.push(number);
    }
    return acc;
  }, []);

var sortArrayByParity = function(A) {
  return [...A.filter(num => num % 2 === 0), ...A.filter(num => num % 2 > 0)];
};

var sortArrayByParity = function(A) {
  let even = A.filter(item => item % 2 === 0);
  let odd = A.filter(item => item % 2 !== 0);
  return even.concat(odd);
};

//-51 // *************************************** leetcode #414
var thirdMax = function(nums) {
  let arr = Array.from(new Set(nums)).sort((a, b) => b - a);
  if (arr.length <= 2) return arr[0];
  return arr[2];
};

//-52 // *************************************** leetcode #229
var majorityElement = function(nums) {
  let map = {};
  let result = [];
  for (let item of nums) {
    map[item] = (map[item] || 0) + 1;
  }
  for (let i in map) {
    if (map[i] > nums.length / 3) {
      result.push(i);
    }
  }
  return result;
};

//-53 // *************************************** leetcode #50
var myPow = function(x, n) {
  if(n === 1) return x
  else if( n === 0) return 1
  else if(n === -1) return 1 / x
  else if (n % 2 === 0) {
    const m = myPow(x, n/2);
    return m * m
}
  else return x * myPow(x,n-1)
};

//-54 // *************************************** leetcode #167
var twoSum = function(numbers, target) {
  let map = {}
  let result = []
  for(let i = 0; i < numbers.length;i++){
      let temp = target - numbers[i]
      if(map[temp] == numbers[i]) {
          result.push(numbers.indexOf(temp) + 1)
          result.push(i+1)
      } else  map[numbers[i]] = temp
  }
  return result
};

// // 5****************************************
// var reverse = function(x) {
//   const absolute = Math.abs(x)
//     .toString()
//     .split("")
//     .reverse()
//     .join("");
//   if (absolute > 2 ** 31) return 0;
//   return absolute * Math.sign(x);
// };
// reverse(-321);

// // 6*****************************************
// var isPalindromeNumber = function(x) {
//   return (
//     x
//       .toString()
//       .split("")
//       .reverse()
//       .join("") === x.toString
//   );
// };

// var isPalindrome = function(x) {
//   // convert to string
//   x = x.toString();
//   // loop thru string ending at the middle
//   let len = x.length;
//   for (let i = 0; i < x.length / 2; i++) {
//     // if item on one side doesn't match the item on the other return false
//     if (x[len - 1 - i] !== x[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// var isPalindrome = function(x) {
//   const str = String(x);
//   if (x.length <= 1) {
//     return true;
//   }
//   if (str[0] !== str[str.length - 1]) {
//     return false;
//   }
//   return isPalindrome(str.slice(1, str.length - 1));
// };

// // 9***********************************************
// var lengthOfLastWord = function(s) {
//   let arr = s.trim().split(" ");
//   if (!arr.length) return 0;
//   return arr[arr.length - 1].length;
// };

// //10 ***********************************************
// // https://www.youtube.com/channel/UCfknduBTSKZuYjECEOKowyw/videos

// // 11 *********************************************
// var longestCommonPrefix = function(strs) {
//   if (strs.length === 0) return "";
//   // First scan: find shortest length
//   let minLength = strs[0].length;
//   for (let item of strs) {
//     if (item.length < minLength) {
//       minLength = item.length;
//     }
//   }
//   // Second scan: find common chars until a different one
//   for (let i = 0; i < minLength; i++) {
//     for (let item of strs) {
//       if (item[i] !== strs[0][i]) {
//         return item.slice(0, i);
//       }
//     }
//   }
//   return strs[0].slice(0, minLength);
// };

// // 2****************************
// var removeDuplicates = function(S) {
//   for (let i = 0; i < S.length; i++) {
//     if (S[i] === S[i - 1]) {
//       return removeDuplicates(S.slice(0, i - 1).concat(S.slice(i + 1)));
//     }
//   }
//   return S;
// };
// removeDuplicates("abbaca"); // 'ca'

// // 3*******************************
// function maxNumberOfBalloons(text) {
//   let map = {
//     b: 0,
//     a: 0,
//     l: 0,
//     o: 0,
//     n: 0
//   };
//   for (let item of text) {
//     if (map[item] !== undefined) {
//       map[item] += 1;
//     }
//   }
//   let min_one = Math.min(map.b, map.a, map.n);
//   let min_two = Math.floor(Math.min(map.l / 2, map.o / 2));
//   return Math.min(min_one, min_two);
// }
// maxNumberOfBalloons("loonbalxballpoon");
// maxNumberOfBalloons("nlaebolko");
// maxNumberOfBalloons(
//   "krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw"
// );
