const debug = require('debug')('app:LessonController');
const Lesson = require('../models/Lesson');
const log = require('../helpers/logger')(module);

module.exports.all = (req, res) => {
  Lesson.all((err, rows) => {
    if (err) {
      log.error(err.message);
      res.sendStatus(500);
      return;
    }
    res.send(rows);
  });
};

module.exports.findById = (req, res) => {
  const params = [Number(req.params.id)];
  Lesson.findById(params, (err, row) => {
    if (err) {
      log.error(err.message);
      res.sendStatus(400).json({ error: err.message });
      return;
    }
    res.send(row);
  });
};

module.exports.update = (req, res) => {
  const data = req.body;
  const params = [
    data.teacherId, data.groupId, data.classroomId, data.topic, Number(req.params.id)];
  Lesson.update(params, (err) => {
    if (err) {
      log.error(err.message);
      res.sendStatus(400).json({ error: err.message });
      return;
    }
    res.send(200);
  });
};

module.exports.delete = (req, res) => {
  Lesson.delete(req.params.id, (err) => {
    if (err) {
      log.error(err.message);
      res.sendStatus(400).json({ error: err.message });
      return;
    }
    res.sendStatus(200);
  });
};

module.exports.create = (req, res) => {
  // const errors = [];
  const data = req.body;
  /* if (!data.name || typeof data.name !== 'string') {
    errors.push('Lesson "name" is not defined or isn\'t a string');
  }
  if (!data.surname || typeof data.surname !== 'string') {
    errors.push('Lesson "surname" is not defined or isn\'t a string');
  }
  if (!data.age || typeof data.age !== 'number' || data.age <= 0) {
    errors.push('Lesson "age" is not defined or isn\'t a positive number');
  }
  if (errors.length > 0) {
    log.error(errors);
    res.sendStatus(400).json({ errors: errors.join(',') });
  } */
  const params = [data.teacherId, data.groupId, data.classroomId, data.topic];
  Lesson.create(params, (err, result) => {
    if (err) {
      log.error(err.message);
      res.sendStatus(500);
      return;
    }
    res.send(result);
  });
};
