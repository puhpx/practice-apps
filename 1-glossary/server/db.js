require("dotenv").config();
const mongoose = require("mongoose");
const dbname = process.env.DB_NAME;
console.log(dbname);

mongoose.connect(`mongodb://localhost/${dbname}`);

let glossarySchema = mongoose.Schema({
  term: {
    type: String, unique : true
  },
  definition: String,
})

let Glossary = mongoose.model('Glossary', glossarySchema);

let save = async (term, definition) => {
  var newTerm = new Glossary({
    term: term,
    definition: definition,
  })
  return newTerm.save();
}

let get = async (cb) => {
  Glossary.find()
          .exec(cb)
}

let getTerm = async (term) => {
  return Glossary.find(term)
}

let deleteTerm = async (term, definition) => {
  console.log('1:', term, '2: ', definition)
  return Glossary.deleteOne({term: term, definition: definition})

}

module.exports.save = save;
module.exports.get = get;
module.exports.deleteTerm = deleteTerm;
module.exports.getTerm = getTerm;
