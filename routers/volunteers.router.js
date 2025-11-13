const express = require('express');
const controller = require('../controllers/VolunteersController.js');

const router = express.Router();
router.get('/', controller.getAll);
router.post('/', controller.insert);

module.exports = router;