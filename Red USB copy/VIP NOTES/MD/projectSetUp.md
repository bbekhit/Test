-- npm i -S express express-validator bcryptjs config gravatar jsonwebtoken mongoose request

-- npm i -D nodemon concurrently

-- app.get("/", (req, res) => res.send("API Running"));

-- "scripts": {
"start": "node server",
"server": "nodemon server"
},

-- npm run server (to test my first route)

-- config folder with files
in app.js import connectDB the call it connectDB()

-- create routes folder api folder init
then in posts.js
(
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Users Route"));

module.exports = router;
)
then in postman get request http://localhost:5000/api/posts

-- create collections in postman

-- in server.js
app.use(express.json({ extended: false })); for bodyParser
then test in postman
router.post("/", (req, res) => {
console.log(req.body);
res.send("Users Route");
});

-- jwt.io to inspect tokens
