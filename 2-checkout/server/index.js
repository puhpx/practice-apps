require("dotenv").config();
const express = require("express");
const bp = require('body-parser');
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db.js");

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

console.log('db---->', db)
app.get("/", (req, res) => {
  console.log('GET request test')
  res.end()
})

app.post("/", (req, res) => {
  console.log('POST request test', req.body, req.session_id)
  let {f1, f2, f3, summary, ...body} = req.body;
  body.session_id = req.session_id;
  console.log('---.....>>>', body)
  var sqlS = `INSERT INTO user_info (name, email)
  VALUE ('nibafffasfasfafba', 'rrr')`
  db.query(sqlS, (err, res) => {
    if (err) throw err;
    console.log('jafjhakfh')
  })
  res.end()
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
