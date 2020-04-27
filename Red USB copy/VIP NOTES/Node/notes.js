app.use(middleware); // to use middleware

// router middleware
// router.param('id', tourController.checkID);
exports.checkID = (req, res, next, val) => {
  console.log(`Tour id is: ${val}`);

  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  next();
};

// router.param("postId", postById);
exports.postById = (req, res, next, id) => {
  Post.findById(id)
    .populate("user", "_id name role")
    .exec((err, post) => {
      if (err || !post) {
        return res.status(400).json({
          error: err,
        });
      }
      req.post = post;
      next();
    });
};

app.use("/", (req, res) => {
  res.send("Hello");
});

// req.requestTime
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
// then use like this
exports.getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    results: tours.length,
    data: {
      tours,
    },
  });
};

// query
// http://localhost:5000/api/v1/tours?duration=5&difficulty=easy
// http://localhost:5000/api/v1/tours?duration[gte]=5&difficulty=easy
const tours = Tour.find({
  difficulty: "easy",
  duration: 5,
});
const tours = Tour.find()
  .where("duration")
  .equals(5)
  .where("difficulty")
  .equals("easy");
const tours = Tour.find(req.query);
// here we might have sort or page which is different from difficulty query so we have to remove them to deal with it differently

const query = {
  difficulty: "easy",
  duration: 5,
  page: 2, // here page isn't defined on the document as durtion
};

const query = {
  difficulty: "easy",
  duration: { $gte: 5 },
};


////////////////////////////////////////////////////////////////////////////
app.post("/api/product/shop", (req, res) => {
  let order = req.body.order ? req.body.order : "desc";
  let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  let skip = parseInt(req.body.skip);
  let findArgs = {};

  for (let key in req.body.filters) {
    if (req.body.filters[key].length > 0) {
      if (key === "price") {
        findArgs[key] = {
          $gte: req.body.filters[key][0],
          $lte: req.body.filters[key][1],
        };
      } else {
        findArgs[key] = req.body.filters[key];
      }
    }
  }

  findArgs["publish"] = true;

  Product.find(findArgs)
    .populate("brand")
    .populate("wood")
    .sort([[sortBy, order]])
    .skip(skip)
    .limit(limit)
    .exec((err, articles) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({
        size: articles.length,
        articles,
      });
    });
});

// BY ARRIVAL
// /articles?sortBy=createdAt&order=desc&limit=4

// BY SELL
// /articles?sortBy=sold&order=desc&limit=100
app.get("/api/product/articles", (req, res) => {
  let order = req.query.order ? req.query.order : "asc";
  let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
  let limit = req.query.limit ? parseInt(req.query.limit) : 100;

  Product.find()
    .populate("brand")
    .populate("wood")
    .sort([[sortBy, order]])
    .limit(limit)
    .exec((err, articles) => {
      if (err) return res.status(400).send(err);
      res.send(articles);
    });
});

/// /api/product/article?id=HSHSHSKSK,JSJSJSJS,SDSDHHSHDS,JSJJSDJ&type=single
app.get("/api/product/articles_by_id", (req, res) => {
  let type = req.query.type;
  let items = req.query.id;

  if (type === "array") {
    let ids = req.query.id.split(",");
    items = [];
    items = ids.map((item) => {
      return mongoose.Types.ObjectId(item);
    });
  }

  Product.find({ _id: { $in: items } })
    .populate("brand")
    .populate("wood")
    .exec((err, docs) => {
      return res.status(200).send(docs);
    });
});

export function getProductDetail(id) {
  const request = axios
    .get(`${PRODUCT_SERVER}/articles_by_id?id=${id}&type=single`)
    .then((response) => {
      return response.data[0];
    });

  return {
    type: GET_PRODUCT_DETAIL,
    payload: request,
  };
}

export function clearProductDetail() {
  return {
    type: CLEAR_PRODUCT_DETAIL,
    payload: "",
  };
}

export function getProductsBySell() {
  //?sortBy=sold&order=desc&limit=100
  const request = axios
    .get(`${PRODUCT_SERVER}/articles?sortBy=sold&order=desc&limit=4`)
    .then((response) => response.data);

  return {
    type: GET_PRODUCTS_BY_SELL,
    payload: request,
  };
}

export function getProductsByArrival() {
  const request = axios
    .get(`${PRODUCT_SERVER}/articles?sortBy=createdAt&order=desc&limit=4`)
    .then((response) => response.data);

  return {
    type: GET_PRODUCTS_BY_ARRIVAL,
    payload: request,
  };
}

export function getProductsToShop(
  skip,
  limit,
  filters = [],
  previousState = []
) {
  const data = {
    limit,
    skip,
    filters,
  };

  const request = axios
    .post(`${PRODUCT_SERVER}/shop`, data)
    .then((response) => {
      let newState = [...previousState, ...response.data.articles];
      return {
        size: response.data.size,
        articles: newState,
      };
    });

  return {
    type: GET_PRODUCTS_TO_SHOP,
    payload: request,
  };
}
//////////////////////////////////////////////////////////////////////////
export const getPosts = (skip, limit, previousState = []) => async (
  dispatch
) => {
  const body = JSON.stringify({ skip, limit });
  try {
    let x = 5;
    let res = await axios.post(
      `/api/v1/post/posts?name=boutros&duration[gte]=${x}`, ////////
      body,
      config
    );
    let newState = [...previousState, ...res.data.posts];
    dispatch({
      type: GET_POSTS,
      payload: newState,
    });
    return res.data.size;
  } catch (err) {
    // dispatch(setAlert(err.response.data.error, "error", "4"));
  }
};

//// gte
// { name: 'boutros', duration: { gte: '5' } } this what we get from url as we can't add the $ so we need to convert it to { name: 'boutros', duration: { $gte: '5' } }
filter() {
  const queryObj = { ...this.queryString };
  const excludedFields = ['page', 'sort', 'limit', 'fields'];
  excludedFields.forEach((el) => delete queryObj[el]);

  // 1B) Advanced filtering
  let queryStr = JSON.stringify(queryObj);
  queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

  this.query = this.query.find(JSON.parse(queryStr));

  return this;
}

// sort
// default is asending 
// http://localhost:5000/api/v1/tours?duration=5&difficulty=easy&sort=price //from small to big
// http://localhost:5000/api/v1/tours?duration=5&difficulty=easy&sort=-price //from big to small
// http://localhost:5000/api/v1/tours?duration=5&difficulty=easy&sort=-price,rating //multiple sort
// http://localhost:5000/api/v1/tours?duration=5&difficulty=easy&sort=-price,rating //multiple sort
// http://localhost:5000/api/v1/tours/?sort=price,ratingAverage 
sort('price rating duration')
sort() {
  if (this.queryString.sort) {
    const sortBy = this.queryString.sort.split(',').join(' ');
    this.query = this.query.sort(sortBy);
  } else {
    this.query = this.query.sort('-createdAt');
  }

  return this;
}

// fields
// http://localhost:5000/api/v1/tours?fields=name,price, 
// http://localhost:5000/api/v1/tours?fields=-name,-price, // exclude name and duration
let myQ = query.select('name phone duration')
limitFields() {
  if (this.queryString.fields) {
    const fields = this.queryString.fields.split(',').join(' ');
    this.query = this.query.select(fields);
  } else {
    this.query = this.query.select('-__v');
  }

  return this;
};

// limit
limitOutput() {
  if (this.queryString.limit) {
    this.query = this.query.limit(this.queryString.limit);
  } else {
    this.query = this.query.limit(3);
  }

  return this;
}

///////findById --- findOne
const tour = await Tour.findById(req.params.id);
    // Tour.findOne({ _id: req.params.id })


/// virtual and pre
// virtual field
userSchema
    .virtual("password")
    .set(function(password) {
        // create temporary variable called _password
        this._password = password;
        // generate a timestamp
        this.salt = uuidv1();
        // encryptPassword()
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function() {
        return this._password;
    });

// methods
userSchema.methods = {
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },

    encryptPassword: function(password) {
        if (!password) return "";
        try {
            return crypto
                .createHmac("sha1", this.salt)
                .update(password)
                .digest("hex");
        } catch (err) {
            return "";
        }
    }
};

// pre middleware
userSchema.pre("remove", function(next) {
    Post.remove({ postedBy: this._id }).exec();
    next();
});


//// validation
// required
// enum ---- only for strings
// max
// min
// maxLength
// minLength
passwordConfirm: {
  type: String,
  required: [true, 'Please confirm your password'],
  validate: {
    // This only works on CREATE and SAVE!!!
    validator: function (el) {
      return el === this.password;
    },
    message: 'Passwords are not the same!',
  },
},

/// Cookies
module.exports = (req, res, next) => {
  // const { authorization } = req.headers;
  // if (!authorization) {
  //   return res.status(401).json({ error: "NOT AUTHORIZED" });
  // }
  // const token = authorization.replace("Bearer ", "");
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = authorization.replace("Bearer ", "");
    // token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.token) {
    token = req.cookies.token;
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "NOT AUTHORIZED" });
    }
    const { userId } = payload;
    const user = await User.findById(userId);
    req.user = user;
    next();
  });
};

export const setCurrentUser = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      // Authorization: data,
    },
  };
  try {
    const res = await axios.get("/api/v1/auth/", config);
    const { user } = res.data;
    dispatch({
      type: SET_CURRENT_USER,
      payload: user,
    });
  } catch (err) {
    dispatch({
      type: SET_CURRENT_USER,
      payload: {},
    });
  }
};

