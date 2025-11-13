const express = require('express');
const controller = require('../controllers/HelpRequestsController.js')

const router = express.Router();
router.get('/', controller.getAll);
router.put('/:Id', controller.update);
router.get('/:Id', controller.get);

module.exports = router;