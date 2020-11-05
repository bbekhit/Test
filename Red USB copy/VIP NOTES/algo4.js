// 1**
// how many pairs in array
function sockMerchant(n, ar) {
  let map = {};
  let res = 0;
  for (let item of ar) {
    map[item] = (map[item] || 0) + 1;
  }
  for (let i in map) {
    if (map[i] === 2) res += 1;
    else if (map[i] > 2 && map[i] % 2 === 0) res += map[i] / 2;
    else if (map[i] > 2 && map[i] % 2 !== 0) res += (map[i] - (map[i] % 2)) / 2;
  }
  return res;
}

// 2**
function rotLeft(a, d) {
  for (var j = 1; j <= d; j++) {
    a.shift(a.push(a[0]));
  }
  return a;
}
rotLeft([1, 2, 3, 4], 2);
function sortOddNumber(arr) {
  const odd = arr.filter(x => x % 2).sort((a, b) => a - b);
  return arr.map(x => (x % 2 ? odd.shift() : x));
}

// 3**
// sort by votes and alphbetically
function voty(votes) {
  let map = {};
  for (let item of votes) {
    map[item] = (map[item] || 0) + 1;
  }
  let sorted = votes.sort(function(a, b) {
    if (map[b] > map[a]) return 1;
    else if (map[a] > map[b]) return -1;
    else if (b > a) return 1;
    else if (a > b) return -1;
    else return 0;
  });
  return sorted[0];
}

// 4**
typeof undefined == typeof NULL;

// 5**
var a = [1, 2, 3];
a[10] = 99; // will not crash
a[6]; // undefined
a.map(e => 6);
// [6, 6, 6, empty × 7, 6]

// 6**
// adding to an array
var myArray = ["a", "b", "c", "d"];
myArray.push("end");
myArray.unshift("start");
console.log(myArray); // ["start", "a", "b", "c", "d", "end"]

myArray = ["start", ...myArray, "end"];

// 7**
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);

// 8**
var obj = { a: 1, b: 2 };
var objclone = Object.assign({}, obj);

// 9**
var x = 21;
var girl = function() {
  console.log(x);
  var x = 20;
};
girl();

var x = 21;
var girl = function() {
  console.log(x);
  let x = 20;
};
girl();

var x = 21;
var girl = function() {
  console.log(x);
  let xy = 20;
};
girl();

// 10**
(function() {
  try {
    throw new Error();
  } catch (x) {
    var x = 1,
      y = 2;
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();

// (function () {
//     var x, y; // outer and hoisted
//     try {
//         throw new Error();
//     } catch (x /* inner */) {
//         x = 1; // inner x, not the outer one
//         y = 2; // there is only one y, which is in the outer scope
//         console.log(x /* inner */);
//     }
//     console.log(x);
//     console.log(y);
// })();

// 11**
var length = 10;
function fn() {
  console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);

// 12**
// emptying array
arr = [];
arr.length = 0;
arr.splice(0, arr.length);

// 13**
class MyPromise {
  constructor() {
    this.callbacks = [];
    this.data = null;
  }

  done(f) {
    if (this.data) {
      f(this.data);
    }

    this.callbacks.push(f);
    return this;
  }

  resolve(data1, data2) {
    this.data1 = data1;
    this.data2 = data2;

    for (let i = 0; i < this.callbacks.length; i++) {
      this.callbacks[i](data1, data2);
    }
  }
}

function when(promise1, promise2) {
  var promise3 = new MyPromise();

  // when promise1 and promise2 have been resolved
  // promise3.resolve()
  var promise1Data, promise2Data;
  promise1.done(function(data) {
    promise1Data = data;
    if (promise2Data) {
      promise3.resolve(promise1Data, promise2Data);
    }
  });
  promise2.done(function(data) {
    promise2Data = data;
    if (promise1Data) {
      promise3.resolve(promise1Data, promise2Data);
    }
  });

  return promise3;
}

function ajaxCall(timeout) {
  var promise = new MyPromise();

  setTimeout(function() {
    promise.resolve({
      fake: "data" + timeout
    });
  }, timeout);

  return promise;
}

(function() {
  var tweets = ajaxCall(1000);
  tweets.done(function(response) {
    console.log("Part 1");
    console.log(response);
  });
})();

// Part 2 (handle chaining and multiple callbacks)
tweets
  .done(function(response) {
    console.log("Part 2 - 1");
    console.log(response);
  })
  .done(function(response) {
    console.log("Part 2 - 2");
    console.log(response);
  });

// Part 3 (handle callback after promise has resolved)
setTimeout(function() {
  tweets.done(function(response) {
    console.log("Part 3");
    console.log(response);
  });

  // Part 4 (create utility to handle multi promises)
  var tweets2 = ajaxCall(2000);
  when(tweets, tweets2).done(function(t1, t2) {
    console.log("Part 4");
    console.log(t1, t2);
  });
})();

function allowDrop(e) {
  e.preventDefault();
}

function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {
  e.preventDefault();
  var data = e.dataTransfer.getData("text");
  e.target.appendChild(document.getElementById(data));
}

<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
<img id="drag1" src="img_logo.gif" draggable="true" ondragstart="drag(e)" width="336" height="69"></img>

// ********************************************************
function comb(s) {
  let arr = new Array();
  for(i=0;i<s.length;i++) {
      for(j=i+1;j<s.length+1;j++) {
          arr.push(s.slice(i, j));
      }
  }
  return arr;
}

comb([1,2,3])
