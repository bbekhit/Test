//  https://scotch.io/tutorials/javascript-promises-for-dummies
// https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/its-quiz-time
// http://usefulangle.com/post/76/javascript-promises-chaining-and-error-handling

function addPost(post) {
  return new promise(function(resolve, reject) {
    setTimeOut(function() {
      Posts.push(post);
      reject();
    }, 2000);
  });
}

function addPost(post, cb) {
  setTimeout(function() {
    posts.push(post);
    cb();
  }, 2000);
}

creatPost({ title: "Hello" }, getPosts);

let calculate = function(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value + 1);
    }, 0);
  });
};
calculate(1)
  .then(calculate)
  .then(result => result + 1)
  .then(calculate)
  .then(verify);

function verify(result) {
  expect(result).toBe(5);
  done();
}

const mockAPI = name => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(name);
    }, 1500)
  );
};

const mockAPI = (name = "React") =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(name);
    }, 1500)
  );
