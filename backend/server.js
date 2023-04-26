const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan")
require("dotenv").config();
const cors = require("cors");
const connectDatabase = require("./config/Database");

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


connectDatabase()

// create server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on :${process.env.PORT}`);
});

