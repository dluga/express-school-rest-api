/* eslint-disable func-names */
const db = require('../db/database');

module.exports.all = (cb) => {
  const sql = 'SELECT * FROM lessons';
  db.all(sql, (err, rows) => {
    cb(err, rows);
  });
};

module.exports.findById = (params, cb) => {
  const sql = 'SELECT * FROM lessons WHERE id = ?';
  db.all(sql, params, (err, row) => {
    cb(err, row);
  });
};

module.exports.create = (params, cb) => {
  const sql = 'INSERT INTO lessons (teacher_id, group_id, classroom_id, topic) VALUES (?, ?, ?, ?)';
  db.run(sql, params, function (err) {
    cb(err, { id: this.lastID });
  });
};

module.exports.update = (params, cb) => {
  const sql = `UPDATE lessons SET 
    teacher_id = COALESCE(?, teacher_id), 
    group_id = COALESCE(?, group_id), 
    classroom_id = COALESCE(?, classroom_id),
    topic = COALESCE(?, topic)
    WHERE id = ?`;
  db.run(sql, params, (err) => {
    cb(err);
  });
};

module.exports.delete = (id, cb) => {
  const sql = 'DELETE FROM lessons WHERE id = ?';
  db.run(sql, id, (err) => {
    cb(err);
  });
};
