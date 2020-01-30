const express = require('express');
const Group = require('../controllers/Group');

const router = express.Router();

router.get('/groups', Group.all);
router.get('/group/:id', Group.findById);
router.post('/group', Group.create);
router.put('/group/:id', Group.update);
router.delete('/group/:id', Group.delete);

module.exports = router;
