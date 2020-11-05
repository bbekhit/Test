let i = 2;
if(i % 2 == 0){
  alert("even")
} // i specify exactly using == 0

let i = 3;
if(i % 2){
  alert("odd")
} // 3 % 2 = 1 which is true so the code excutes

// checking for duplicates
let arr = [3,3,3]
arr = arr.filter((item,i,self) => self.indexOf(item) === i)
alert(arr)
// second item (3) has item value = 3 and index value = 1 and self.indexOf(item) = 0 because it checks for first one