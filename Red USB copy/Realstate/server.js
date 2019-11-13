const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")


const users = require("./routes/users")


const app = express()
app.get("/", (req,res) => res.send("Hello Realstate"))

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI
mongoose.connect(db,{ useNewUrlParser: true })
.then(() => console.log("MONGO CONNECTED"))

app.use("/api/users",users)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Realstate running on port: ${port}`))