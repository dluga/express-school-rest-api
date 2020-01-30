const express = require('express');
const Schedule = require('../controllers/Schedule');

const router = express.Router();

router.get('/schedules', Schedule.all);
router.get('/schedule/:id/:weekday', Schedule.findById);
router.post('/schedule', Schedule.create);
router.put('/schedule/:id/:weekday', Schedule.update);
router.delete('/schedule/:id/:weekday', Schedule.delete);

module.exports = router;
