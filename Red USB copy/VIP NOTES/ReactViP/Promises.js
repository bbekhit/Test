// 1----
const getUser = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ name: "Max" });
    }, 2000);
  });
};
getUser().then(user => {
  console.log(user.name); //'Max' after 2 seconds
});

// 2----
const getUser = () => {
  return new Promise(resolve => {
    resolve("Hello There");
  });
};
getUser().then(res => {
  console.log(res); // 'Hello There' right away
});

// 3---
var promise = new Promise(function (resolve, reject) {
  // do a thing, possibly async, then…
  let x = 5;
  if (x === 4 /* everything turned out fine */) {
    resolve("Stuff worked!");
  } else {
    reject(Error("It broke"));
  }
});
promise.then(res => console.log(res)).catch(err => console.log(err.message)); // it broke

// 3---
// https://medium.com/@kevinyckim33/what-are-promises-in-javascript-f1a5fc5b34bf
let eatDinner = () => {
  return new Promise((resolve, reject) => {
    return resolve("i ate Dinner");
  });
};

let goToSleep = message => {
  return new Promise((resolve, reject) => {
    return resolve(`${message}, then i am ready to sleep`);
  });
};

eatDinner()
  .then(res => goToSleep(res))
  .then(res => console.log(res));

// The getUser() function might look confusing, focus on the bottom part of the code though. We simply call getUser() there and then use then() to handle the asynchronous value. Inside getUser(), we create a new promise. The constructor function of that object receives a function as an argument. That function is executed automatically and can also receive two arguments: resolve and reject. Both are function you may execute inside the function passed to the promise constructor.

// When calling resolve(data), you resolve (= complete) the promise and return data to the function executed in the then block.

// You could also call reject(err) to throw an error. I’ll come back to error handling later.

// It might not immediately look that much better than callbacks but consider that we only use one asynchronous operation here! The real power of promises can be seen once we start using dependent async operations.

// Practical ---1
export const addPost = postData => dispatch => {
  dispatch(clearErrors());
  axios
    .post("/api/posts", postData)
    .then(res =>
      dispatch({
        type: ADD_POST,
        payload: res.data,
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const deletePost = postId => async dispatch => {
  let token = localStorage.getItem("token");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  try {
    let res = await axios.delete(`/api/v1/post/${postId}`, config);
    dispatch(setAlert(res.data.message, "success", "4"));
    dispatch({
      type: DELETE_POST,
      payload: postId,
    });
  } catch (err) {
    dispatch(setAlert(err.response.data.error, "error", "4"));
  }
};

//Practical ---2
// **************************************************************************************************
export const fetchServiceById = serviceId => (dispatch, getState) => {
  const lastService = getState().selectedService.item;
  if (lastService.id && lastService.id === serviceId) {
    return Promise.resolve();
  }

  dispatch({ type: REQUEST_SERVICE });
  return api.fetchServiceById(serviceId).then(async service => {
    // service.user = await api.getUserProfile(service.user)
    const user = await service.user.get();
    service.user = user.data();
    service.user.id = user.id;

    dispatch({ type: FETCH_SERVICE_SUCCESS, service });
  });
};

export const fetchServiceById = serviceId =>
  db
    .collection("services")
    .doc(serviceId)
    .get()
    .then(snapshot => ({ id: snapshot.id, ...snapshot.data() }));

// **************************************************************************************************
// **************************************************************************************************
export const fetchServices = () => dispatch =>
  api.fetchServices().then(services =>
    dispatch({
      type: FETCH_SERVICES_SUCCESS,
      services,
    })
  );

export const fetchServices = () =>
  db
    .collection("services")
    .get()
    .then(snapshot => {
      const services = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      return services;
    });
// **************************************************************************************************
// **************************************************************************************************
export const fetchUserServices = userId => dispatch =>
  api
    .fetchUserServices(userId)
    .then(services =>
      dispatch({ type: FETCH_USER_SERVICES_SUCCESS, services })
    );

export const fetchUserServices = userId => {
  const userRef = createRef("profiles", userId);
  return db
    .collection("services")
    .where("user", "==", userRef)
    .get()
    .then(snapshot => {
      const services = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      return services;
    });
};

// trycatch
export const fetchUserServices = userId => async dispatch => {
  const userRef = createRef("profiles", userId);
  try {
    let res = await db
      .collection("services")
      .where("user", "==", userRef)
      .get()
      .then(snapshot =>
        snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    dispatch({
      type: FETCH_USER_SERVICES_SUCCESS,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};
// **************************************************************************************************

// **************************************************************************************************
export const createService = (newService, userId) => {
  newService.price = parseInt(newService.price, 10);
  newService.user = api.createRef("profiles", userId);

  return api.createService(newService);
};

export const createService = newService => {
  return db
    .collection("services")
    .add(newService)
    .then(docRef => docRef.id);
};

// component
const handleSubmit = () => {
  const { user } = auth;
  createService(serviceForm, user.uid)
    .then(() => setRedirect(true))
    .catch(() => alert("SOME ERROR!"));
};

// **************************************************************************************************
