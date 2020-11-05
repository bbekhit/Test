// server.js
const express = require("express")
const app = express()

const users = require("./routes/api/users");

const db = require('./config/keys').MONGOURI
mongoose.connect(db).then(() => console.log("MongoDB is connected"));

app.use("api/users",users)

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000
app.listen(port,() => ``)

// keys.js
if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod");
} else {
  module.exports = require("./keys_dev");
}

// keys_prod.js
module.exports = {
  mongoURI: process.env.MONGO_URI,
  secretOrKey: process.env.SECRET_OR_KEY,
  cloudName: process.env.CLOUD_NAME,
  uploadPreset: process.env.UPLOAD_PRESET
};

// Posts routes
const Post = require("../../models/Post")

router.post(
    "/",
      (req, res) => {
         const newPost = new Post({
        text: req.body.text,
        name: req.body.name,
        image: req.body.image,
        user: req.user.id
      });
      newPost.save().then(post => res.json(post));
    }
  );

  router.get("/", (req, res) => {
    Post.find()
      .sort({ date: -1 })
      .then(posts => res.json(posts))
      .catch(err => res.status(404).json({ nopostsfound: "No posts found" }));
  });
  
  // @route   GET api/posts/:id
  // @desc    Get post by id
  // @access  Public
  router.get("/:id", (req, res) => {
    Post.findById(req.params.id)
      .then(post => res.json(post))
      .catch(err =>
        res.status(404).json({ nopostfound: "No post found with that ID" })
      );
  });

  router.delete(
    "/:id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      Post.findById(req.params.id)
        .then(post => {
          // Check for post owner
          if (post.user.toString() !== req.user.id) {
            return res.status(401).json({ notauthorized: "User not authorized" });
          }
  
          // Delete
          post.remove().then(() => res.json({ success: true }));
        })
        .catch(err => res.status(404).json({ postnotfound: "No post found" }));
    }
  );

  router.post("/:id", (req,res) => {
    Post.findByIdAndUpdate(
      {id:req.params.id},
      {$set:req.body},
      {new:true}
    )
    .then(post => res.json(post))
    .catch(err => res.json(err))
  })

//   Model
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  image: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", UserSchema)

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  text: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  image: {
    type: String
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      image: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model("post", PostSchema);

// i have the index.html and i want to point to it from my server
// so if none of my api routes being hit so look into my build folder/index.html

'heroku-postbuild': "NPM_CONFIG_PRODUCTION = false npm install --prefix client && npm build --prefix
 client "