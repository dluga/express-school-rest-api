/* eslint-disable func-names */
const db = require('../db/database');

module.exports.all = (cb) => {
  const sql = 'SELECT * FROM teachers';
  db.all(sql, (err, rows) => {
    cb(err, rows);
  });
};

module.exports.findById = (params, cb) => {
  const sql = 'SELECT * FROM teachers WHERE id = ?';
  db.all(sql, params, (err, row) => {
    cb(err, row);
  });
};

module.exports.create = (params, cb) => {
  const sql = 'INSERT INTO teachers (name, surname, age) VALUES (?, ?, ?)';
  db.run(sql, params, function (err) {
    cb(err, { id: this.lastID });
  });
};

module.exports.update = (params, cb) => {
  const sql = `UPDATE teachers SET 
    name = COALESCE(?, name), 
    surname = COALESCE(?, surname), 
    age = COALESCE(?, age)
    WHERE id = ?`;
  db.run(sql, params, (err) => {
    cb(err);
  });
};

module.exports.delete = (id, cb) => {
  const sql = 'DELETE FROM teachers WHERE id = ?';
  db.run(sql, id, (err) => {
    cb(err);
  });
};
