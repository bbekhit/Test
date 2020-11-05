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
    console.log("map", mapLeft[s[i]]);
      if(mapLeft[s[i]]) {
          stack.push(s[i])
          console.log('stack',stack);
      } else if(!stack.length || mapRight[s[i]] != mapLeft[stack.pop()])
          return false;
  }
  return stack.length ? false : true;
};
console.log('💣');