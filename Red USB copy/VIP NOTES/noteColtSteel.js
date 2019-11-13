// // var express           = require("express"),
// //     app               = express(),
// //     bodyParser        = require("body-parser"),
// //     mongoose          = require("mongoose"),
// //     methodOverride    = require("method-override"),
// //     expressSanitizer  = require("express-sanitizer"),
// //     passport          = require("passport"),
// //     LocalStrategy     = require("passport-local");


// // mkdir yelpcamp
// // npm init
// // npm install express ejs request body-parser method-override express-sanitizer --save
// // touch app.js

// // mongoose.connect("mongodb://localhost/restful_blog_app"); 

// // app.use(express.static("public"));
// // app.use(bodyParser.urlencoded({extended: true}));
// // app.use(expressSanitizer());
// // app.use(methodOverride("_method"));


// // // server
// // app.listen(process.env.PORT, process.env.IP, function(){
// //     console.log("server started");
// // });
// // mkdir views
// // touch all my pages.ejs inside views(touch views/campgrounds.ejs)
// // mkdir views/partials
// // touch views/partials/header.ejs
// // fill the header and footer
// // <% include partials/header %> to all my pages

// // after setting mongoose as shown up 2 equation we add a Schema
// // var campgroundSchema = new mongoose.Schema({
// //     name: String,
// //     image: String
// // });

// // then add a model
// // var Campground = mongoose.model("Campground"(name of model which will be the collection in show collecton), campgroundSchema);

// // to create new campground
// // Campground.create(
// //     {
// //     name:"Salmon Creek", 
// //     image:"https://images.pexels.com/photos/776117/pexels-photo-776117.jpeg?h=350&auto=compress&cs=tinysrgb"
// //     }, function(err, campground==(could be any name)){
// //         if(err){
// //             console.log(err);
// //         }else{
// //             console.log("New Campground Created");
// //             console.log(campground);
// //         }
// // });

// // Restful Routes(Index-Create{post}-New{form}-show)
// // // to delete data
// // mongo enter
// // show dbs --yelp-camp
// // use yelp-camp
// // show collections
// // db.blogs.finf()
// // db.collection(campground{from model schema}).find()


// // WORKING WITH MONGO
// // // > show dbs
// // // admin             0.000GB
// // // config            0.000GB
// // // local             0.000GB
// // // restful_blog_app  0.000GB
// // // yelp_camp         0.000GB
// // // > use yelp_camp
// // // switched to db yelp_camp
// // // > show collections
// // // campgrounds
// // // comments
// // // users
// // // > db.users.find()

// // db.collection.drop()

// // mongo --version

// // Index    ====    /dogs              ====GET
// // New      ====    /dogs/new          ====GET
// // Create   ====    /dogs              ====POST
// // Show     ====     /dogs/:id         ====GET
// // Edit     ====    /dogs/:id/edit     ====GET
// // Update   ====    /dogs/:id          ====PUT
// // Destroy  ====   /dogs/:id           ====DELETE

// // to limit string to 100 character
// // <p> <%= blog.body.substring(0, 100) %>... </p>
// // to adjust date
// // <span> <%= blog.created.toDateString() %> </span>

// // npm install method-override --save for put

// // // AUTHENINICATION
// // npm install passport pasport-local passport-local-mongoose express-session --save ===total 4
// // passport      = require("passport"), in app.js ====1
// // LocalStrategy = require("passport-local"), in app.js====2
// // make a touch models/user.js
// // inside user.js make UserSchema and add export at bottom
// // then User   = require("./models/user"), to use user model in app.js
// // then var passportLocalMongoose    = require("passport-local-mongoose"); in user.js===3
// // then UserSchema.plugin(passportLocalMongoose); in user.js at bottom====4
// // then configure passport as follow
// // // Passport configuration ====== 5
// // app.use(require("express-session")({
// //     secret:"once again rusty wins cutest dog",
// //     resave: false,
// //     saveUninitialized:false
// // }));
// // app.use(passport.initialize());
// // app.use(passport.session());
// // passport.use(new LocalStrategy(User.authenticate()));
// // passport.serializeUser(User.serializeUser());
// // passport.deserializeUser(User.deserializeUser());

// // //  MIDDLEWARE ISLOGGEDIN
// // function isLoggedIn(req, res, next){
// //     if(req.isAuthenticated()){
// //         return next();
// //     }
// //     res.redirect("/login");
// // }


// // app.use(function(req,res,next){
// //     res.locals.currentUser = req.user;
// //     next();
// // });

// // var router  = express.Router({mergeParams:true}), used when making shorcut
// // app.use("/campgrounds/:id/comments", commentRoutes);

// // req.user comes from passport which has user information

// // npm install -g nodemon --save

// //  npm install --save connect-flash
 
 
// //  Yelpcamp steps
// //  = make a user model to sign in
// //  = ref the user model into comment
// //  = in create comment route add 3 lines to add author automatically
// //  = ref author to campground too to add subbmitted by
// //  = VIp has to add it to create route
// //  = additional error fix at show route & comment edit route to avoid changing 1 number of id
// //  = err.message in register route(username taken) and add it to reurn also
 
// //  npm install --save express-sanitizer
// //  var expressSanitizer  = require("express-sanitizer");
// //  app.use(expressSanitizer());
 
// //  npm install --save mailgun-js
 
// //  npm install dotenv --save
// //  require('dotenv').config()
 
// //  git status
// //  git add .
// //  git commit -m 
// //  heroku create
// //  https://quiet-basin-95772.herokuapp.com/ 
// //  "test": "echo \"Error: no test specified\" && exit 1",
// //     "start": "node app.js"
// // git status
// //  git add package.json
// //  git commit -m "modifying package.json"
// //  git push heroku master
 
// //  heroku run ls
// //  heroku run npm install express --save
 
 

// make a Main folder mkdir
// npm init to create package.json then follow instruction (entry point = app.js)
// inside Main folder (touch app.js)
// npm install express --save  (npm install --save express ejs request)
// inside Main folder mkdir views(Main folder should now have app.js modules package.json views )
// add pages .ejs iside views folder
// inside Main folder mkdir public folder
// inside public touch public/app.css
// app.use(express.static("public"))
// add a link to my page.ejs <link rel="stylesheet" href="/app.css">
// same to be done to .js but with the same FOLDER NAMES
// mkdir views/partials
// touch views/partials/header.ejs ---- touch views/partials/footer
// in the ejs pages(originally html) we add <% include partials/header %> <% include partials/footer %>

// post section:
// npm install body-parser --save
// var bodyParser = require("body-parser")
// app.use(bodyParser.urlencoded({extended: true}))


// //to start server
// app.listen(process.env.PORT, process.env.IP, function(){
//   console.log("server started");
// }); //to start server

// var express = require("express"); in the app.js
// var app = express();              in the app.js
// var bodyParser = require("body-parser")
// app.use(express.static("public"))   //VIP
// app.set("view engine", "ejs")       //VIP
// app.use(bodyParser.urlencoded({extended: true}))

// //start getting routes with the variable app above, we can use send or render
// app.get("/", function(req, res){
//   res.render("home.ejs");
// })

// //to use variable in the web bar this in app.js
// app.get("/fallinlovewith/:thing", function(req, res){
//   var thing = req.params.thing;
//   res.render("love.ejs", {thingVar:thing});
// })

// // Example of using if js in ejs this in the page.ejs
// <h1>You fell in love with: <%= thingVar %> </h1>
// <% if(thingVar.toLowerCase() === "rusty"){ %>
// <p> good choice</p>
// <% } %>


// app.get("/posts", function(req, res){
//   var posts [
//       {title:"i love you", author:"boutros"},
//       {title:"i hate you", author: "bibo"}
//       ]
//       res.render("posts.ejs", {posts:posts})
// })

// // Example of using loop js in ejs this in the page.ejs
// <% for(var i = 0, i < posts.length, i++){ %>
//  <%= posts[i].title; %> - <%= posts[i].author %>;
// <% } %>
  
// post section:
// <form action="/addfriend" method="post">
//    <input type="text" name="newfriend" placeholder="name">
//    <button>add new friend</button>
// </form>

// app.post("/addfriend", function(req, res){
//   console.log(req.body.newfriend);
// }

// // APIs
// var request = require("request");
// request("http://www.google.com", function(error, response, body){
//   if(!error && response.statusCode == 200){
//       // var parsedData = JSON.parse(body)
//       console.log(body);
//   }
// })



















