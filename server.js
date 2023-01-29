const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();

require("dotenv").config();
require("./config/database");

const port = process.env.PORT || 3001;
app.use("/api/students", require("./routes/api/students"));

app.use(logger('dev'));
app.use(express.json());
