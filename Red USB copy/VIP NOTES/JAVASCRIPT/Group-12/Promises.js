// https://scotch.io/tutorials/javascript-promises-for-dummies 
// https://www.freecodecamp.org/news/promise-all-in-javascript-with-example-6c8c5aea3e32/ 
// https://github.com/jonasschmedtmann/complete-javascript-course/blob/master/8-asynchronous-JS/final/asynchronous.html 
// https://www.macadamian.com/learn/javascript-promises-explained/ 
// https://medium.com/front-end-weekly/callbacks-promises-and-async-await-ad4756e01d90 
// https://usefulangle.com/post/76/javascript-promises-chaining-and-error-handling
// is an object that keeps track of an event whether it's completed or not and determines what happens next

// example
let isMomHappy = false;
let getNewPhone = new Promise((resolve, reject) => {
  setTimeout(() => {
    isMomHappy = true;
    if(isMomHappy){
      let phone = {
        brand : "iPhone",
        price: 1000
      }
      resolve(phone)
    }else{
      let reason = new Error("Mom not Happy")
      reject(reason)
    }
  }, 1000)
})

let showFriend = phone => {
  return new Promise((resolve, reject) => {
      let message = `hey bro, i got new ${phone.brand} cost ${phone.price}`
      resolve(message)
  })
}

let askMom = () => {
  console.log("before")
  getNewPhone
  .then(showFriend)
  .then(response => console.log(response))
  .catch(err => console.log(err))
  console.log("after")
}
askMom()

// example
let getNewPhone = () => {
  return new Promise((resolve,reject) => {
    let answer = prompt("Mom are you going to get me an iphone", "")
    setTimeout(() => {
      if(answer === 'y'){
        let phone = {
          brand: "iphone",
          price: "$1000"
        }
        resolve(phone)
      }else{
        reject("sorry i won't")
      }
      
    }, 5000)
  })
}

let showFriend = phone => {
  return new Promise((resolve, reject) => {
    let message = `i got new ${phone.brand} costs ${phone.price}`
    resolve(message)
  })
}

getNewPhone()
.then(showFriend)
.then(res => console.log(res))
.catch(err => console.log(err))

// example
let mockApi = () => {
  let promise =  new Promise((resolve, reject) => {
    let name = prompt("what is your name", "")
     setTimeout(() => {
       if(name === "Boutros"){
        resolve("You got it")
       }else{
         reject("guess again")
       } 
     }, 1000)
  })
  return promise
}
mockApi()
.then(response => console.log(response))
.catch(err => console.log(err))

// example
const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise(
    (resolve, reject) => {
        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);

// 2nd promise
async function showOff(phone) {
    return new Promise(
        (resolve, reject) => {
            var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

            resolve(message);
        }
    );
};

// call our promise
let askMom = async() => {
    try {
        console.log('before asking Mom');
        let phone = await willIGetNewPhone;
        let message = await showOff(phone);
        console.log(message);
        console.log('after asking mom');
    }
    catch (error) {
        console.log(error.message);
    }
}
(async () => {
    await askMom();
})();

// example
function job() {
  return new Promise(function(resolve, reject) {
      reject();
  });
}
let promise = job();
promise
.then(function() {
  console.log('Success 1');
})
.then(function() {
  console.log('Success 2');
})
.then(function() {
  console.log('Success 3');
})
.catch(function() {
  console.log('Error 1');
})
.then(function() {
  console.log('Success 4');
});

// example
function job(state) {
  return new Promise(function(resolve, reject) {
      if (state) {
          resolve('success');
      } else {
          reject('error');
      }
  });
}
let promise = job(true);
promise
.then(function(data) {
  console.log(data);
  return job(false);
})
.catch(function(error) {
  console.log(error);
  return 'Error caught';
})
.then(function(data) {
  console.log(data);
  return job(true);
})
.catch(function(error) {
  console.log(error);
});

// example
function job(state) {
  return new Promise(function(resolve, reject) {
      if (state) {
          resolve('success');
      } else {
          reject('error');
      }
  });
}
let promise = job(true);
promise
.then(function(data) {
  console.log("1 :", data);
  return job(true);
})
.then(function(data) {
  if (data !== 'victory') {
      throw 'Defeat';
  }
  return job(true);
})
.then(function(data) {
  console.log("2 :", data);
})
.catch(function(error) {
  console.log("3 :" ,error);
  return job(false);
})
.then(function(data) {
  console.log("4 :", data);
  return job(true);
})
.catch(function(error) {
  console.log("5 :", error);
  return 'Error caught';
})
.then(function(data) {
  console.log("6 :", data);
  return new Error('test');
})
.then(function(data) {
  console.log('Success:', data.message);
})
.catch(function(data) {
  console.log('Error:', data.message);
});

// example react
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post('/api/auth', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// example react
export const loginUser = data => async dispatch => {
  try {
    let res = axios.post("urlAPI", data)
    dispatch({
      type: LOGIN_USER,
      payload: res
    })
  } catch (error) {
    let err = error.response.data
    dispatch({
      type: GET_ERRORS,
      payload: err
    })
  }
}

// example react
export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get('/api/posts');
    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// node example
router.get('/', auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// async componentDidMount() {
//   try {
//     const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
//     if (!response.ok) {
//       throw Error(response.statusText);
//     }
//     const json = await response.json();
//     this.setState({ data: json });
//   } catch (error) {
//     console.log(error);
//   }
// }
