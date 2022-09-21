const db = require('./db');
const _ = require('lodash');

const executeQuery = (query, values) => {
  return db.queryAsync(query, values).spread(results => results);
};

const parseData = options => {
  return _.reduce(options, (parsed, value, key) => {
    parsed.string.push(`${key} =?`);
    parsed.values.push(value);
    return parsed;
  }, {string: [], values: []});
};

class Dbmethods {
  constructor(tablename) {
    this.tablename = tablename;
    this.create = create;
  }

  getAll(options) {
    if (!options) {
      let queryString = `SELECT * FROM ${this.tablename}`;
      return executeQuery(queryString);
    }
    let parsedOptions = parseData(options);
    let queryString = `SELECT * FROM ${this.tablename} WHERE ${parsedOptions.string.join(' AND ')}`;
    return executeQuery(queryString, parsedOptions.values);
  }

  static get(options) {
    let parsedOptions = parseData(options);
    let queryString = `SELECT * FROM user_info WHERE ${parsedOptions.string.join(' AND ')} LIMIT 1`;
    return executeQuery(queryString, parsedOptions.values).then(results => results[0]);
  }

  static create (options) {
    let queryString = `INSERT INTO user_info SET ?`;
    return executeQuery(queryString, options);
  }

  update(options, values) {
    let parsedOptions = parseData(options);
    let queryString = `UPDATE ${this.tablename} SET ? WHERE ${parsedOptions.string.join(' AND ')}`;
    return executeQuery(queryString, Array.prototype.concat(values, parsedOptions.values));
  }

}

module.exports = Dbmethods;