const express = require('express');
const Teacher = require('../controllers/Teacher');

const router = express.Router();

router.get('/teachers', Teacher.all);
router.get('/teacher/:id', Teacher.findById);
router.post('/teacher', Teacher.create);
router.put('/teacher/:id', Teacher.update);
router.delete('/teacher/:id', Teacher.delete);

module.exports = router;
