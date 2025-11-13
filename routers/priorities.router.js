const express = require('express');
const controller = require('../controllers/PrioritiesController.js');

const router = express.Router();
router.get('/', controller.getAll);

module.exports = router;