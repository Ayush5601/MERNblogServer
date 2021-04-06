const express = require("express");
const morgan = require("morgan");           //gives start and end time of server
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();       //nodemon is used as local host needs to reset over every change

// bring routes
const blogRoutes = require("./routes/blog");    //all routes should be brought to server
const authRoutes = require("./routes/auth");
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const tagRoutes = require('./routes/tag');
const formRoutes = require('./routes/form');

// app
const app = express();

// db
mongoose
  .connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connected"));
  

// middlewares
app.use(morgan("dev"));
app.use(cookieParser());
// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(express.json())
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));


// cors
if (process.env.NODE_ENV === "development") {     //since our server port is 8000 and client is 3000,  it could throw error
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

// routes middleware
app.use("/api", blogRoutes);                    //prefixing with api
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", tagRoutes);
app.use("/api", categoryRoutes);
app.use('/api', formRoutes);


// port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);     //variables are acustomed with dollar sign and strings with back tick
});
