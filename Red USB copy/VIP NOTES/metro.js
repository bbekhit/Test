// https://stackoverflow.com/questions/46577130/implementing-promise-class-in-javascript

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