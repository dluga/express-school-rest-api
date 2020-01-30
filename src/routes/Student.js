const express = require('express');
const Student = require('../controllers/Student');

const router = express.Router();

router.get('/students', Student.all);
router.get('/student/:id', Student.findById);
router.post('/student', Student.create);
router.put('/student/:id', Student.update);
router.delete('/student/:id', Student.delete);

module.exports = router;
