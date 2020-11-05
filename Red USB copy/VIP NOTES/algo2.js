// 7
function equal(a, b, c) {
  if (a == b && a == c && b == c) {
    return 3;
  } else if (a == b || a == c) {
    return 2;
  }
  return 0;
}

// 11
var obj1 = {
  a: {
    b: {
      c: 0
    }
  },
  d: 2
};
var obj2 = {
  a: {
    b: {
      d: 1
    }
  },
  e: 3
};

console.log(mergeObjects(obj1, obj2));

function mergeObjects(obj1, obj2) {
  var res = obj1;
  for (var key in obj2) {
    //console.log("key=",key);
    if (res.hasOwnProperty(key) && typeof obj2[key] !== "object") {
      res[key] = obj2[key];
      //console.log(res[key]);
    } else if (res.hasOwnProperty(key) && typeof obj2[key] === "object") {
      mergeObjects(res[key], obj2[key]);
    } else {
      res[key] = obj2[key];
    }
  }
  return res;
}
