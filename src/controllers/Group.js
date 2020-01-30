const debug = require('debug')('app:GroupController');
const Group = require('../models/Group');
const log = require('../helpers/logger')(module);

module.exports.all = (req, res) => {
  Group.all((err, rows) => {
    if (err) {
      log.error(err.message);
      res.sendStatus(500);
    }
    res.send(rows);
  });
};

module.exports.findById = (req, res) => {
  const params = [Number(req.params.id)];
  Group.findById(params, (err, row) => {
    if (err) {
      log.error(err.message);
      res.sendStatus(400).json({ error: err.message });
    }
    res.send(row);
  });
};

module.exports.update = (req, res) => {
  const data = req.body;
  const params = [data.groupCode, Number(req.params.id)];
  Group.update(params, (err) => {
    if (err) {
      log.error(err.message);
      res.sendStatus(400).json({ error: err.message });
    }
    res.send(200);
  });
};

module.exports.delete = (req, res) => {
  Group.delete(req.params.id, (err) => {
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
    errors.push('Group "name" is not defined or isn\'t a string');
  }
  if (errors.length > 0) {
    log.error(errors);
    res.sendStatus(400).json({ errors: errors.join(',') });
  } */
  const params = [req.body.groupCode];
  Group.create(params, (err, result) => {
    if (err) {
      log.error(err.message);
      res.sendStatus(500);
    }
    res.send(result);
  });
};
