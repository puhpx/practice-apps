require("dotenv").config();
const mysql = require("mysql2");
const Promise = require("bluebird");


// Configure process.env variables in ../.env

const connection = mysql.createConnection({
  // host: process.env.DB_HOST,
  // user: process.env.DB_USER,
  // password: process.env.DB_PASS,
  // database: process.env.DB_NAME
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'checkout'
});
// connection.connect((err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('connected!!!')
//   }
// })

console.log('env', process.env.DB_HOST)
const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(`
    CREATE TABLE IF NOT EXISTS user_info (
      id int(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
      session_id VARCHAR(255),
      name VARCHAR(255),
      email VARCHAR(255),
      password VARCHAR(255),
      address1 VARCHAR(255),
      address2 VARCHAR(255),
      city VARCHAR(255),
      state VARCHAR(255),
      zipcode INTEGER,
      phone INTEGER,
      creditCard INTEGER,
      expiration VARCHAR(10),
      cvv INTEGER(6),
      billingZipcode INTEGER(8)
    )`)
  )
  .catch((err) => console.log('err'));

module.exports = db;
