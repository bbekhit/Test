alert("hello");
prompt("What is your age", 0);
confirm("What are you going to do"); // true false

export const deleteAccount = () => (dispatch) => {
  if (window.confirm("Are you sure? this can NOT be undone")) {
    axios
      .delete("/api/profile")
      .then((res) =>
        dispatch({
          type: SET_CURRENT_USER,
          payload: {},
        })
      )
      .catch((err) =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        })
      );
  }
};

// result = prompt(title, [default]);
// The square brackets around default in the syntax above denote that the parameter as optional, not required.
