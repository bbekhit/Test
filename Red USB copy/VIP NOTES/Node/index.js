const fs = require('fs')

const result = fs.readFileSync('./sample.txt','utf-8')
console.log(result);
fs.writeFileSync("./sample.txt","Thank you")

fs.readFile("./sample.txt",'utf-8', (err,data) => {
  console.log(data);
})
console.log('comes first');

