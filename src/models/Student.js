/* eslint-disable func-names */
const db = require('../db/database');

module.exports.all = (cb) => {
  const sql = 'SELECT * FROM students';
  db.all(sql, (err, rows) => {
    cb(err, rows);
  });
};

module.exports.findById = (params, cb) => {
  const sql = 'SELECT * FROM students WHERE id = ?';
  db.all(sql, params, (err, row) => {
    cb(err, row);
  });
};

module.exports.create = (params, cb) => {
  const sql = 'INSERT INTO students (name, surname, group_id) VALUES (?, ?, ?)';
  db.run(sql, params, function (err) {
    cb(err, { id: this.lastID });
  });
};

module.exports.update = (params, cb) => {
  const sql = `UPDATE students SET 
    name = COALESCE(?, name), 
    surname = COALESCE(?, surname), 
    group_id = COALESCE(?, group_id)
    WHERE id = ?`;
  db.run(sql, params, (err) => {
    cb(err);
  });
};

module.exports.delete = (id, cb) => {
  const sql = 'DELETE FROM students WHERE id = ?';
  db.run(sql, id, (err) => {
    cb(err);
  });
};
