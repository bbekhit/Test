// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                                           DEVELOPER PROJECT
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// 1- npm i express mongoose passport passport-jwt jsonwebtoken body-parser bcryptjs validator --save
// 2- const express = require("express");
//    const app = express();
//    app.get("/", (req, res) => res.send("Hello"));
//    const port = process.env.PORT || 5000;
//    app.listen(port, () => console.log(`app is running on port ${port}`));

//    npm i -D nodemon
//    in package.js add those script
//    "scripts": {
//     "start": "node server.js",
//     "server": "nodemon server.js"
//   },

//   in terminal
//   npm run server then uses rs to restart

// 3- configuring mongodb

//    a-made the keys file and put the MLab url in it
//    b-const mongoose = require("mongoose");
//    c-const db = require("./config/keys").mongoURI;
//    d-mongoose
//     .connect(db)
//     .then(() => console.log("mongoDB connected"))
//     .catch(err => console.log(err));
// 4-to short cut api request to backend
//   "proxy":"http://localhost:5000" in the client package.json(react)

// 5-"client-install" : "npm install --prefix client"
//     a convenient way to install packages, just run npm run client-install while in the rootdev

// 6- npm i --save concurrently in the rootfolder(developerConnect)
//      in scripts
//      "client": "npm start --prefix client",
//      "dev": "concurrently \"npm run server\" \"npm run client\""
// 7-onChange = (e) => {
//       this.setState({
//           [e.target.name] : e.target.value
//       })
//   }

// *************************************************************************************************************
// in console press react and search for component to watch state changes as register component
// *************************************************************************************************************
// starting project:
// 1-components => auth(login-register)--layout(footer-landing-navbar)
// 2- in App.js add components
// 3-start adding state in register
// adding onChange and onSubmit and value={this.state.email}
//      onSubmit = e => {              to test it
//     e.preventDefault();
//     const newUser = {
//       name: this.state.name,
//       email: this.state.email,
//       password: this.state.password,
//       password2: this.state.password2
//     };
//     console.log(newUser);
//   };
// 4-same in login
// 5-install axios in the client side *******************************************************
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// 6-error handling                                                   errors.name comes from backend
//   1-npm i -S classnames
//   2-render() { ****************add errors to render
//     const { errors } = this.state;
//   3-in the input field:
//   className={classnames("form-control form-control-lg", {
//                         "is-invalid": errors.name
//                       })}
// 4-after input field
//    {errors.name && (
//                       <div className="invalid-feedback">{errors.name}</div>
//                     )}
// 5- add noValidate to form tag to stop validation of html *********************
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// installing redux
// 1-npm i -S react-redux redux-thunk redux
// 2-wrap BrowserRouter with <Provider stor={store}>
// 3-import store from './store'
// 4-make a store.js and fill it
// 5-make a reducers folder and inside it all reducers and index.js which has the combine reducer

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// BACK END
// 1-make a server file
// 1-folder routes
// 2-folder api
// 3-bring routes file into server.js (const users = require('./routes/api/users'))
// 4-then use it app.use("/api/users", users);
// 5- fill in the users.js inside the api
//    const express = require("express");
//    const router = express.Router();

// router.get("/test", (req, res) =>
//   res.json({
//     msg: "users worked"
//   })
// );

// module.exports = router;
// 6-const bodyParser = require('body-parser')
//   app.use(bodyParser.urlencoded({ extended: false }));
//   app.use(bodyParser.json());
//   adding its middlesware in server.js to be able to use (email:req.body.email)
// 7- adding login and register routes and adding jwt
// 8- now we need to implement passport to uncode this token
//    a-in server.js
//     ^^const passport = require('passport')
//     ^^app.use(passport.initialize())
//     ^^require('./config/passport')(passport);
// 9-create passport.js inside config folder and fill it
// 10-to test it
//    make a login request with a regitered user info like(john@test.com) and we will get a token
//    copy this token then make a get request(set up in the routes/api/users route) to /current and use Authorization
//    and the token so i will get user info
// 11-CONCLUSION WHEN I LOG IN I GET A TOKEN AND WITH THE PASSPORT I DECODED THIS TOKEN TO GET USER INFO

// validation:
// 1-make a validation folder
// 2-make register.js, login.js, is-emppty.js files
// 3-fill in thewe files with the validation i want
// if(!validator.isLength(data.name, {min:2, amx,30})){errors.name =""}
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&7&&&&&
// Registering a user

// 1-onSubmit(e) {
//     e.preventDefault();

//     const userData = {
//       email: this.state.email,
//       password: this.state.password
//     };

//     this.props.loginUser(userData); ############# add this action to the onSubmit
//   }
//  I WANT TO UPDATE THE STATE AND THIS IS DONE THROUGH THE REDUCER
// WHICH NEEDS ACTION TYPE TO WORK AND THE ACTION TYPE NEEDS ACTION GENERATOR SO:
// 1-i create an action const (SET_CURRENT_USER)
// 2-use it in the action generator file
//   export const registerUser = userData => {
//   return {
//     type: TEST_DISPATCH,
//     payload: userData
//   };
// };
// 3-send this to the reducer as a className
// 4-the reducer update state with the new info(user, expense, ....)
// 5-then connect the component which has the form(Register, Login, ExpenseForm) with the store
//   export default connect(null, {registerUser})(Register)
// 6-now the authReducer which contains the initialState has been updated with the user info
// so to bring it to the component(Register which has the form) we use mapStateToProps
//     const initialState = {
//   isAuthenticated: false,
//   user: {}
// };

// const mapStateToProps = state => ({
//   auth: state.auth     &&&&this comes from combineReducers in reducers/index &&&&&&
// });

// export default combineReducers({
//   auth: authReducer
// });

// I WANT TO REGISTER A USER TO THE BACKEND AND UPDATE THE REDUX STATE SO I USE registerUser IT SENDS AXIOS REQUEST
// TO BACKEND AND DISPATCH ERRORS IF THERE IS ANY
// a-this.props.registerUser(newUser)
// b-connect the registerUser
// c-make action folder
// d-make types file with GET_ERRORS
// e-make authAction which has the registerUser function

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// Login
// 1-npm i -S jwt-decode in the client side
// 2-

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// MISTAKES:
// 1- "client": "npm start --prefix client",
//     "dev": "concurrently \"npm run server\" \"npm run client\""
// 2-const UserSchema = new mongoose.Schema({
// 3-module.exports = router; in the routes routes/api/users
// 4- passport passport-jwt jsonwebtoken body-parser bcryptjs validator
//     const bcrypt = require("bcryptjs");
//     const jwt = require("jsonwebtoken");
// 5-bodyParser is defined in the server.js
// 6-in api/users/login we use jwt.sign which comes from const jwt = require("jsonwebtoken");
// 7-jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) =>
//           res.json({
//             success: true,
//             token: "Bearer " + token
//           })
// 8-in config/passport we configure passport to uncode token
//   and WE HAVE TO DEFINE IT IN THE SERVER.JS
// 9-SO I LOGIN ROUTE WITH POSTMAN SO I WILL GET A TOKEN FROM JWT.SIGN() IF I LOGGED IN WITH A CORRECT CREDENTIALS
// AND WILL GET ERROES As(email or password incorrect-- user not found)
// TO TEsT IT I USE THE CURRENT ROUTE WHICH WILL GIVE ME UNAUTHORIZED FIRST THEN AFTER ADDING TOKEN I WILL
// GET USER INFO WHICH IS EMBEDED IN TOKEN AS I SET IT UP
//              %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// 10-change proxy
// 11-make components => auth + layout
//    auth => Login + Register
//    layout => Navbar + Landing + footer
// 12-add those components to App.js
// 13-addin react-router-dom then BrowserRouter in App.js then routes
// 14-

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// I WANT TO REGISTER USER, I TAKE THE INFORMATION FROM THE FORM ONSUBMIT AND SEND IT BY THE ACTION registerUser
// TO THE BACKEND THEN I RECEIVE THE RESPONSE WHICH IN THIS CASE IS AN ERROR, I DISPATCH THE ERR TO THE REDUX
// REDUCER WHICH UPDATES THE STATE. I mapStateToProps SO I CAN USE IT IN THE COMPONENT AS THIS
// const {errors} = this.props
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// \*\*// VSCode
// {
// "workbench.iconTheme": "material-icon-theme",
// "editor.fontSize": 18,
// "editor.tabSize": 2,
// "editor.wordWrap": "on",
// "terminal.integrated.fontSize": 18,
// "emmet.includeLanguages": {
// "javascript":"javascriptreact"
// },
// "emmet.syntaxProfiles": {
// "javascript":"jsx"
// },
// "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
// "editor.formatOnSave": true,
// "workbench.iconTheme": "vscode-great-icons",
// "window.zoomLevel": 0,
// "css.remoteStyleSheets": [
// "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
// ]
// }

// 1 - ES7 React / Redux / GraphQL / React - Native snippets(rcc) dsznajder
// 2 - Bracket Pair Colorizer CoenraadS
// 3 - Prettier - Code formatter Esben Petersen
// 4 - Live Server Ritwick Dey
// 5 - Node.js Modules Intellisense(auto
// import) Zongmin Lei
// 6-html css support from ecmel
// 7-auto rename tag from jun Han
// 8-javascript(es6) code snippets from charalampos
// 9-gitLens from Eric
// 10-auto-open markdown preview from hnw

// npm install npm@latest -g
// npm install -g create-react-app
