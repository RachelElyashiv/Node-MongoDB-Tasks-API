const express = require('express');
const controller = require('../controllers/StatusesController.js');

const router = express.Router();
router.get('/', controller.getAll);

module.exports = router;