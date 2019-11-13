// Reducers
const initialState = {
  posts: [],
  post: {}
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.id ? (post = action.payload) : poat
        )
      };
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
};
// import { combineReducers } from "redux"
// export default combineReducers({
//     auth: authReducer,
//     errors: errorsReducer,
//     post: postReducer,
//     filters: filtersReducer
//   });

// componentDidMount(){
//     const {id} = this.props.match.params
//     this.props.getPost(id)
// }

// Actions
export const GET_ERRORS = "GET_ERRORS";

export const addPost = data => dispatch => {
  axios
    .post(url, data)
    .then(res =>
      dispatch({
        type: ADD_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERROS,
        payload: err.response.data
      })
    );
};

export const getPost = id => dispatch => {
  dispatch(postLoading());
  axios
    .get(`/api/posts/${id}`)
    .then(res => {
      dispatch({
        type: GET_POST,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_POST,
        payload: null
      })
    );
};

export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};

// store
import { createStore, applyMiddleware, compose } from "redux";
const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

// HOC
export default (ComposedClass, reload, adminRoute = null) => {
  class AuthenticationCheck extends Component {
    componentDidMount() {
      const { user, isAuthenticated } = this.props.auth;

      if (!isAuthenticated) {
        if (reload) {
          this.props.history.push("/login");
        }
      } else {
        if (adminRoute && !user.isAdmin) {
          this.props.history.push("/dashboard");
        } else {
          if (reload === false) {
            this.props.history.push("/dashboard");
          }
        }
      }
    }
    render() {
      return <ComposedClass {...this.props} user={this.props.user} />;
    }
  }
  const mapStateToProps = state => ({
    auth: state.auth
  });
  return connect(mapStateToProps)(AuthenticationCheck);
};

// App.js
import { Provider } from "react-redux";
<Provider store={store}>
  <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/cart" component={Auth(Cart, true)} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/feed" component={Posts} />
        <PrivateRoute exact path="/post/:id" component={Post} />
        <PrivateRoute exact path="/:id/edit" component={UpdatePostForm} />
        <Route component={Auth(PageNotFound, null)} />
      </Switch>
    </div>
  </BrowserRouter>
</Provider>;

if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // TODO: Clear current Profile

    // Redirect to login
    window.location.href = "/login";
  }
}

// setAuthToken
const setAuthToken = token => {
  if (token) {
    // apply for every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

// Validation
const isValid = (email, password) => {
    let errors = {};
    let formIsValid = true;
    //  validate email
    if (typeof email !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/
      );
      if (!pattern.test(email)) {
        formIsValid = false;
        errors.email = "*Please enter valid email";
      }
    }
    if (!email) {
      formIsValid = false;
      errors.email = "*This field is required";
    }
     // Validate Password
    if (typeof password !== "undefined") {
      if (!password.match(/^[a-zA-Z0-9]{6,}$/)) {
        formIsValid = false;
        errors.password = "*Password at least 6 characters";
      }
    }
    if (!password) {
      formIsValid = false;
      errors.password = "*Please enter your password.";
    }
    return {
      errors,
      formIsValid
    };
  };
  
  export default isValid;


  onSubmit = e => {
    e.preventDefault();
    let email = this.state.fields.email;
    let password = this.state.fields.password;
    const { errors, formIsValid } = isValid(email, password);

    if (!formIsValid) {
      this.setState({ errors: errors });
    } else {
      const userData = {
        email,
        password
      };
      this.props.loginUser(userData);
    }
  };

//   static getDerived state
static getDerivedStateFromProps(props, state) {
    if (props.vehicle !== state.vehicle) {
      return {
        vehicle: props.vehicle
      };
    } else if (props.current !== state.current) {
      return {
        current: props.current
      };
    }
    // Return null if the state hasn't changed
    return null;
  }

  // table
  render() {
    const { clicked } = this.props.clicked;
    let clickedVideos;
    if (clicked) {
      clickedVideos = clicked.map((item, i) => (
        <tr key={item._id}>
          <td>
            {i + 1}-{item.title}
          </td>
        </tr>
      ));
    } else {
      clickedVideos = <Spinner />;
    }
    return (
      <div className="container">
        <table className="table table-bordered mt-5">
          <thead>
            <tr>
              <th className="text-center">Clicked Videos</th>
            </tr>
          </thead>
          <tbody>{clickedVideos}</tbody>
        </table>
      </div>
    )


    <form>
        <input
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.onChange}
        
        >
        </input>


    </form>


class Navbar extends Component{
  constructor(){
    super()
    this.state = {
      name:"",
      title=""
    }
  }
}

onChange = (e) => {
  this.setState({[e.target.name]: e.target.value})
}

// These functions allow to bind the context of the components properly 
// since in ES6 auto binding is not available by default.

// Synthetic events are the objects which act as 
// a cross-browser wrapper around the browser’s native event.

// this.textInput = React.createRef();

// a. They do not maintain their own state	1. They maintain their own state
// b. Data is controlled by the parent component	2. Data is controlled by the DOM
// c. They take in the current values through props and then notify the changes via callbacks	
// 3. Refs are used to get their current values


