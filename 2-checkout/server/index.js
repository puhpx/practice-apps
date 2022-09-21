require("dotenv").config();
const express = require("express");
const bp = require('body-parser');
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
const dm = require("./dbmethods")

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
  let {f1, f2, f3, summary, ...body} = req.body;
  body.session_id = req.session_id;
  db.queryAsync("SELECT name, session_id FROM user_info")
  .then((data) => {
    if (data[0].every((obj) => {return (obj.name !== req.body.name || obj.session_id !== req.session_id)})) {
      dm.create(body)
      .then(() => {
        return res.status(200).send('Thank you for purchase!');
      })
    } else {
      return res.status(403).send('You have already purchased!')
    }
  })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
