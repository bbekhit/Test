// https://css-tricks.com/debouncing-throttling-explained-examples/
function defer(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms)
  };
}
function sayHi(who) {
  alert('Hello, ' + who);
}
let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John"); // Hello, John after 2 seconds

const debounce = (func, delay) => {
  let inDebounce
  return function() {
    const context = this
    const args = arguments
    clearTimeout(inDebounce)
    inDebounce = setTimeout(() => func.apply(context, args), delay)
  }
}

function debounce(func, ms) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), ms);
  };
}

const throttle = (func, limit) => {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// https://www.youtube.com/watch?v=F2zF8fu7aG0  --- vip debounce explained 
// debounce when typing, i delay the trigger of api call for a certain amount of time(delay) untill finish typing so each time i reset the timer 

// https://www.youtube.com/watch?v=9NPPsP-4LBg  --- vip throttle explained
// when i click on a button too many times it triggers event a lot, so throttle allows one trigger then a delay period then triggers again 

const throttle = (fn, delay) => {
  const last = 0;
  return function(...args) {
    const now = new Date().getTime();
    if(now - last < delay){
      return;
    }
    last = now;
    return fn(...args)
  }
}

const memoize = (fn) => {
  const cache = {};
   return function(...args){
     if(cache[args]){
       return cache[args]
     }
     const result = fn(...args)
     cache[args] = result;
     return result;
   }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}

