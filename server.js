const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();
const port = process.env.PORT || 3001;

require("dotenv").config();
require("./config/database");



app.use("/api/students", require("./routes/api/students"));

const server = app.listen(port, function () {
    console.log(`Express app running on port ${port}`);
  });

app.use(logger('dev'));
app.use(express.json());

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
