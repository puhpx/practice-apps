require("dotenv").config();
console.log(process.env);
const express = require('express');
let app = express();
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/glossary', (req, res) => {
  console.log('req.body', req.body);
  res.end();
});



let port = process.env.PORT;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});