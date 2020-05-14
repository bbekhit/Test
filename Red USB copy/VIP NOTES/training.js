// function identicalFilter(arr) {
//   arr = arr.map((item) => {
//     item.split("");
//     return new Set(item).size;
//   });
//   return arr;
// }
function identicalFilter(arr) {
  arr.map((item) => {
    item.split("");
    if (Array.from(new Set(item)).length > 1) {
      arr.splice(arr.indexOf(item), 1);
    }
  });
  return arr;
}
// console.log(identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]));
console.log(identicalFilter(["88", "999", "22", "545", "133"]));
