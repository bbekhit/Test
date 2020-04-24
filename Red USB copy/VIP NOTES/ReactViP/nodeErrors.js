// in server.js
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Express error handler middleware
app.use(globalErrorHandler);
// *****************************************************************************************************

// *****************************************************************************************************
// in errorController
const AppError = require("./../utils/AppError");

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    // error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  // Operational, trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      // status: err.status,
      // message: err.message
      status: err.status,
      // error: err,
      message: err.message,
      stack: err.stack,
    });
    // Programming or other unknown error: don't leak error details
  } else {
    // 1) Log error in Heroku logs
    console.error("ERROR 💥", err);

    // 2) Send generic message
    res.status(500).json({
      status: "error",
      message: "Something went very wrong!!!!!",
    });
  }
};
// *****************************************************************************************************
// handling required fields as in required: [true, "Must provide name"]
const handleValidationErrorDB = err => {
  // message:User validation failed: name: Must provide name, email: Must provide email
  const errors = Object.values(err.errors).map(el => el.message);
  const message = `Invalid input data. ${errors.join(". ")}`;
  return new AppError(message, 400);
};

// *****************************************************************************************************
// handling invalid ids as 34455%%&**
// Cast to ObjectId failed for value "5e80f8e623ad2e53655eU&^&" at path "_id" for model "Profile"
const handleCastErrorDB = err => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

// *****************************************************************************************************
//handling unique names
const handleDuplicateFieldsDB = err => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  console.log(value);
  const message = `Duplicate field value: ${value}. Please use another value!`;
  return new AppError(message, 400);
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = { message: err.message, ...err };
    if (error.name === "CastError") error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    if (error.name === "ValidationError")
      error = handleValidationErrorDB(error);

    sendErrorProd(error, res);
  }
};

// *****************************************************************************************************
// in controllers
exports.signup = catchAsync(async (req, res, next) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    // return res.status(422).json({
    //   status: "fail",
    //   error: "Email already Taken"
    // });
    return next(new AppError("Email already Taken", 404));
  }
  user = new User(req.body);
  await user.save();
  res.status(200).json({ message: "You Successfuly signed up, please login" });
});

// *****************************************************************************************************

// in catchAsync
module.exports = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(err => next(err));
  };
};

// *****************************************************************************************************
// in AppError
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;

// *****************************************************************************************************

// Description
// 1-in server.js we implemented express middleware with 4 parameters and put it in a separate File(errorController)

// 2-we implemented error creator class(AppError) to get the message and attach to it status and statusCode

// 3-we use this in server.js to create an error and be catched in the middleware we created in step#1
app.all("*", (req, res, next) => {
  // res.status(404).json({ error: `Can't find ${req.originalUrl}` });
  // const err = new Error(`Can't find ${req.originalUrl}`);
  // err.statusCode = 404;
  // err.status = "fail";
  next(new AppError(`Can't find ${req.originalUrl}`, 404));
});
// Express error handler middleware
app.use(globalErrorHandler); // from (errorController)
// here we catch any error that passed from all routes

// 4-create the catchAsync wrapper and wrap all controllers and get rid of all trycatch blocks
exports.signin = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  // try {
  let user = await User.findOne({ email });
  if (!user) {
    // // return res.status(422).json({ error: "Invalid credentials" });
    // return res.status(400).json({
    //   status: "fail",
    //   error: "Invalid credentials"
    // });
    next(new AppError(`Invalid credentials`, 422));
  }
  await user.comparePassword(password);
  // generate a token and send to client
  const token = jwt.sign(
    { userId: user._id },
    // { userId: user._id, name: user.name, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    {
      expiresIn: 3600,
    }
  );
  res.cookie("token", token, { expiresIn: 3600 });
  user.password = undefined;
  return res.json({
    token,
  });
  // } catch (error) {
  //   return res.status(422).json({ error: "Somethig went wrong with signin" });
  // }
});
// *****************************************************************************************************
