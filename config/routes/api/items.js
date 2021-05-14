const express = require('express');
const router = express.Router();
const itemsController = require("../../../src/controllers/users.js")

/* GET items listing. */
router.get('/', itemsController.index);

module.exports = router;