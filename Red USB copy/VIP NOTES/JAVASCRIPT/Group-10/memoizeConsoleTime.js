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

const slowFunction = num => {
  for(let i = 0; i <= num; i++){
    if(i === num){
      return i
    }
  }
}

const fastFunction = memoize(slowFunction)

console.time()
console.log(fastFunction(2000000000))
console.timeEnd()

console.time()
console.log(fastFunction(2000000000))
console.timeEnd()

// https://www.youtube.com/watch?v=dO9LQsIpavM&list=PLMPgoZdlPumdjYOZ2WO4zTdvH0uxEZ8ii  