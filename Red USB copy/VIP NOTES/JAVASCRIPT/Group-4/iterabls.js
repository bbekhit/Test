// Objects that can be used in for..of are called iterable.

// - Technically, iterables must implement the method named Symbol.iterator.
// - The result of obj[Symbol.iterator] is called an iterator. It handles the further iteration process.
// - An iterator must have the method named next() that returns an object {done: Boolean, value: any}, here done:true denotes the end of the iteration process, otherwise the value is the next value.
// - The Symbol.iterator method is called automatically by for..of, but we also can do it directly.
// - Built-in iterables like strings or arrays, also implement Symbol.iterator.
// - String iterator knows about surrogate pairs.

// Iterables are objects that implement the Symbol.iterator method, as described above.
// Array-likes are objects that have indexes and length, so they look like arrays.

// implementing Aymbol.iterator
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};

for (let num of range) {
  alert(num); // 1, then 2, 3, 4, 5
}
