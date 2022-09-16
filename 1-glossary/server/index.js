require("dotenv").config();
const express = require('express');
const db = require('./db.js');
let app = express();
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/glossary', (req, res) => {
  db.save(req.body.term, req.body.definition)
  .then(()=>{
    db.get((err, data) => {
      if(err) {
        console.log('failed to get terms')
      } else {
        console.log('got data from db!');
        return res.status(200).send(data);
      }
    })
  })
  .catch(()=>{
    console.log ('Term exists');
    db.get((err, data) => {
      if(err) {
        console.log('failed to get terms')
      } else {
        console.log('got data from db!');
        return res.status(200).send(data);
      }
    })
  })
});

app.post('/search', (req, res) => {
  db.getTerm(req.body)
  .then ((data) => {
    return res.status(200).send(data)
  })
})

app.delete('/glossary', (req, res) => {
  console.log('delete req.body', req.body);
  db.deleteTerm(req.body.term, req.body.definition)
  .then(()=>{
    db.get((err, data) => {
      if(err) {
        console.log('failed to get terms')
      } else {
        console.log('got data from db!', data);
        return res.status(200).send(data);
      }
    })
  })
})



let port = process.env.PORT;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});