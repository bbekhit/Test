// let obj = {
//   fields: {
//     inner: {
//       ethinity: "american"
//     },
//     name: "Bo",
//     age: 40
//   }
// }
// let clone = Object.assign({}, obj)
// clone.fields.inner.ethinity = "african"
console.log(arguments)

const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000
const app = module.exports = express();

app.use(express.static(__dirname + './../public'));

app.get('*', function(req, res) {
res.sendFile('index.html', { root: '../public' });
})

 app.listen(port, function(){
 console.log("Successfully listening on : 3000")
 });


const cors = require('cors');
const express = require('express')
const config = require('./config.js');

const app = module.exports = express();

app.use(express.static(__dirname + './../public'));

app.get('*', function(req, res) {
res.sendFile('index.html', { root: './public'});
})

app.listen(config.port, function() { console.log('Server initiated on     port', config.port); })

/app/server/src/client/build/index.html
"/Users/boutrosbekhit/Documents/New_Signal/siri-e2e/server/src/client/build/index.html",
/Users/boutrosbekhit/Documents/MyBlog/client/build/index.html"