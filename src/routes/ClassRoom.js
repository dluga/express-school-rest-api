const express = require('express');
const ClassRoom = require('../controllers/ClassRoom');

const router = express.Router();

router.get('/classrooms', ClassRoom.all);
router.get('/classroom/:id', ClassRoom.findById);
router.post('/classroom', ClassRoom.create);
router.put('/classroom/:id', ClassRoom.update);
router.delete('/classroom/:id', ClassRoom.delete);

module.exports = router;
