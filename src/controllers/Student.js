const debug = require('debug')('app:StudentController');
const Student = require('../models/Student');
const log = require('../helpers/logger')(module);

module.exports.all = (req, res) => {
  Student.all((err, rows) => {
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
  Student.findById(params, (err, row) => {
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
  const params = [data.name, data.surname, data.groupId, Number(req.params.id)];
  Student.update(params, (err) => {
    if (err) {
      log.error(err.message);
      res.sendStatus(400).json({ error: err.message });
      return;
    }
    res.send(200);
  });
};

module.exports.delete = (req, res) => {
  Student.delete(req.params.id, (err) => {
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
    errors.push('Student "name" is not defined or isn\'t a string');
  }
  if (!data.surname || typeof data.surname !== 'string') {
    errors.push('Student "surname" is not defined or isn\'t a string');
  }
  if (!data.age || typeof data.age !== 'number' || data.age <= 0) {
    errors.push('Student "age" is not defined or isn\'t a positive number');
  }
  if (errors.length > 0) {
    log.error(errors);
    res.sendStatus(400).json({ errors: errors.join(',') });
  } */
  const params = [data.name, data.surname, data.groupId];
  Student.create(params, (err, result) => {
    if (err) {
      log.error(err.message);
      res.sendStatus(500);
      return;
    }
    res.send(result);
  });
};
