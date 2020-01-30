/* eslint-disable func-names */
const db = require('../db/database');

module.exports.all = (cb) => {
  const sql = 'SELECT * FROM schedule';
  db.all(sql, (err, rows) => {
    cb(err, rows);
  });
};

module.exports.findById = (params, cb) => {
  const sql = 'SELECT * FROM schedule WHERE id = ?';
  db.all(sql, params, (err, row) => {
    cb(err, row);
  });
};

module.exports.create = (params, cb) => {
  const sql = 'INSERT INTO schedule (lesson_id, weekday, startTime, endTime) VALUES (?, ?, ?, ?)';
  db.run(sql, params, function (err) {
    cb(err, { id: this.lastID });
  });
};

module.exports.update = (params, cb) => {
  const sql = `UPDATE schedule SET 
    lesson_id = COALESCE($lessonId, lesson_id), 
    weekday = COALESCE($weekday, weekday), 
    startTime = COALESCE($startTime, startTime),
    endTime = COALESCE($endTime, endTime)
    WHERE lesson_id = $lessonId AND weekday = $weekday`;
  db.run(sql, params, (err) => {
    cb(err);
  });
};

module.exports.delete = (params, cb) => {
  const sql = 'DELETE FROM schedule WHERE lesson_id = ? AND weekday = ?';
  db.run(sql, params, (err) => {
    cb(err);
  });
};
