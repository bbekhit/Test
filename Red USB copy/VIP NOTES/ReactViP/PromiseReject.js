// actions
export const signin = data => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(data);
  try {
    const res = await axios.post("/api/v1/auth/signin", body, config);
    const { token } = res.data;
    localStorage.setItem("token", token);
    dispatch(setCurrentUser(token));
    return Promise.resolve(res.data.token);
  } catch (err) {
    // dispatch(setAlert(err.response.data.message, "error", "4"));
    return Promise.reject(err.response.data.message);
  }
};

// Component
const onSubmit = async e => {
  e.preventDefault();
  // setLoading(true);
  // const data = { email, password };
  // let result = await signin(data);
  // if (result === "success") {
  //   setValues({
  //     email: "",
  //     password: "",
  //   });
  //   setLoading(false);
  //   history.push("/");
  // } else if (result === "failed") {
  //   setLoading(false);
  // }
  const data = { email, password };
  signin(data).then(
    res => console.log(res), //will print token
    err => console.log(err) // will print error message
  );
};
// *******************************************************************************************
const onSubmit = async e => {
  e.preventDefault();
  setLoading(true);
  const data = { email, password };
  let result = await signin(data);
  if (result === "success") {
    // setValues({
    //   email: "",
    //   password: "",
    // });
    // setLoading(false);
    // history.push("/");
    console.log(result); // print success
  } else {
    console.log(result); // print invalid credentials
  }
};

export const signin = data => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(data);
  try {
    const res = await axios.post("/api/v1/auth/signin", body, config);
    const { token } = res.data;
    localStorage.setItem("token", token);
    dispatch(setCurrentUser(token));
    return "success";
  } catch (err) {
    // dispatch(setAlert(err.response.data.message, "error", "4"));
    return err.response.data.message;
  }
};

// different approaches in Login and Regiser in ServiceHub app
