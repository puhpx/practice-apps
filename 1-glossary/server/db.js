require("dotenv").config();
const mongoose = require("mongoose");
const dbname = process.env.DB_NAME;
console.log(dbname);
// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
mongoose.connect(`mongodb://localhost/${dbname}`);

let glossarySchema = mongoose.Schema({
  term: String,
  definition: String,
})

let Glossary = mongoose.model('Glossary', glossarySchema);

let save = async (term, definition) => {
  var newTerm = new Glossary({
    term: term,
    definition: definition,
  })
  newTerm.save((err, data) => {
    if(err) {
      console.log('Save error:');
    } else {
      console.log('Data saved!')
    }
  })
}

let get = async (cb) => {
  Glossary.find()
          .exec(cb)
}

module.exports.save = save;
module.exports.get = get;
