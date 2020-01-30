const debug = require('debug')('app:ClassRoomController');
const ClassRoom = require('../models/ClassRoom');
const log = require('../helpers/logger')(module);

module.exports.all = (req, res) => {
  ClassRoom.all((err, rows) => {
    if (err) {
      log.error(err.message);
      res.sendStatus(500);
    }
    res.send(rows);
  });
};

module.exports.findById = (req, res) => {
  const params = [Number(req.params.id)];
  ClassRoom.findById(params, (err, row) => {
    if (err) {
      log.error(err.message);
      res.sendStatus(400).json({ error: err.message });
    }
    res.send(row);
  });
};

module.exports.update = (req, res) => {
  const data = req.body;
  const params = [data.roomNumber, Number(req.params.id)];
  ClassRoom.update(params, (err) => {
    if (err) {
      log.error(err.message);
      res.sendStatus(400).json({ error: err.message });
    }
    res.send(200);
  });
};

module.exports.delete = (req, res) => {
  ClassRoom.delete(req.params.id, (err) => {
    if (err) {
      log.error(err.message);
      res.sendStatus(400).json({ error: err.message });
    }
    res.sendStatus(200);
  });
};

module.exports.create = (req, res) => {
  /* const errors = [];
  if (!data.name || typeof data.name !== 'string') {
    errors.push('ClassRoom "name" is not defined or isn\'t a string');
  }
  if (errors.length > 0) {
    log.error(errors);
    res.sendStatus(400).json({ errors: errors.join(',') });
  } */
  const params = [req.body.roomNumber];
  ClassRoom.create(params, (err, result) => {
    if (err) {
      log.error(err.message);
      res.sendStatus(500);
    }
    res.send(result);
  });
};
