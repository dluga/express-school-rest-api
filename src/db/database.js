/* eslint-disable linebreak-style */
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const log = require('../helpers/logger')(module);

const db = new sqlite3.Database(path.join(__dirname, process.env.DBSOURCE), (err) => {
  if (err) {
    // throw err;
    log.error(err.message);
  }
  log.info(`Connected to the ${process.env.DBSOURCE} database.`);
});

/* module.exports.connect = (done) => {
  if (db) {
    return done();
  }

  db = new sqlite3.Database(path.join(__dirname, process.env.DBSOURCE), (err) => {
    if (err) {
      return done(err);
    }
    done();
  });
};

module.exports.get = () => db; */
module.exports = db;
