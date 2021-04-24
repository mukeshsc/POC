const express = require('express')
const app = express();
var jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
var cors = require("cors");
const App = require('./route');

const db = require('./lib/db/db') // Database
const {Port} = require('./lib/config');
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});


app.use('/App', App);
app.listen(Port, console.log('Server run on ' + Port))
