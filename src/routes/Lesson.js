const express = require('express');
const Lesson = require('../controllers/Lesson');

const router = express.Router();

router.get('/lessons', Lesson.all);
router.get('/lesson/:id', Lesson.findById);
router.post('/lesson', Lesson.create);
router.put('/lesson/:id', Lesson.update);
router.delete('/lesson/:id', Lesson.delete);

module.exports = router;
