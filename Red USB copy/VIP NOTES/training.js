// function longestSubString(str) {
//   let longest = "";
//   let tmpStr = "";
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i; j < str.length; j++) {
//       if (tmpStr.indexOf(str[j]) !== -1) {
//         i = str.indexOf(str[j], i) + 1;
//         tmpStr = "";
//       } else {
//         tmpStr = str.slice(i, j + 1);
//         if (tmpStr.length > longest.length) {
//           longest = tmpStr;
//         }
//       }
//     }
//   }
//   return longest;
// }

// longestSubString("abcabcab");

// var lengthOfLongestSubstring = function(s) {
//   let map = {};
//   let start = 0;
//   let maxLen = 0;
//   let arr = s.split("");

//   for (i = 0; i < s.length; i++) {
//     let current = map[arr[i]];
//     if (current != null && start <= current) {
//       start = current + 1;
//     } else {
//       maxLen = Math.max(maxLen, i - start + 1);
//     }

//     map[arr[i]] = i;
//   }

//   return maxLen;
// };

// var lengthOfLongestSubstring = function(s) {
//   if (s.length < 2) {
//     return s.length;
//   }

//   var maxLen = 0;
//   var l = 0;
//   for (var r = 1; r < s.length; r++) {
//     i = s.lastIndexOf(s[r], r - 1);
//     if (i >= 0) {
//       maxLen = Math.max(maxLen, r - l);
//       l = Math.max(l, i + 1);
//     }
//   }
//   return Math.max(maxLen, r - l);
// };

// lengthOfLongestSubstring("abcabcab");
// let so = "1234";
// let me = `https://www.youtube.com/embed/${so}`;
// console.log(me);
