#!/usr/bin/env node

const express = require("express");
const bodyParser = require("body-parser");
global.atob = require("atob");

const app = express();

app.use(bodyParser.json());
app.use(require('../controllers/company'));
app.use(require('../controllers/user'));
app.use(require('../controllers/broker'));

// set port, listen for requests
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
