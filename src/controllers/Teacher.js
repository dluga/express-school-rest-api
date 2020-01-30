const debug = require('debug')('app:TeacherController');
const Teacher = require('../models/Teacher');
const log = require('../helpers/logger')(module);

module.exports.all = (req, res) => {
  Teacher.all((err, rows) => {
    if (err) {
      log.error(err.message);
      res.sendStatus(500);
    }
    res.send(rows);
  });
};

module.exports.findById = (req, res) => {
  const params = [Number(req.params.id)];
  Teacher.findById(params, (err, row) => {
    if (err) {
      log.error(err.message);
      res.sendStatus(400).json({ error: err.message });
    }
    res.send(row);
  });
};

module.exports.update = (req, res) => {
  const data = req.body;
  const params = [data.name, data.surname, data.age, Number(req.params.id)];
  Teacher.update(params, (err) => {
    if (err) {
      log.error(err.message);
      res.sendStatus(400).json({ error: err.message });
    }
    res.send(200);
  });
};

module.exports.delete = (req, res) => {
  Teacher.delete(req.params.id, (err) => {
    if (err) {
      log.error(err.message);
      res.sendStatus(400).json({ error: err.message });
    }
    res.sendStatus(200);
  });
};

module.exports.create = (req, res) => {
  const errors = [];
  const data = req.body;
  if (!data.name || typeof data.name !== 'string') {
    errors.push('Teacher "name" is not defined or isn\'t a string');
  }
  if (!data.surname || typeof data.surname !== 'string') {
    errors.push('Teacher "surname" is not defined or isn\'t a string');
  }
  if (!data.age || typeof data.age !== 'number' || data.age <= 0) {
    errors.push('Teacher "age" is not defined or isn\'t a positive number');
  }
  if (errors.length > 0) {
    log.error(errors);
    res.sendStatus(400).json({ errors: errors.join(',') });
  }
  const params = [data.name, data.surname, data.age];
  Teacher.create(params, (err, result) => {
    if (err) {
      log.error(err.message);
      res.sendStatus(500);
    }
    res.send(result);
  });
};
