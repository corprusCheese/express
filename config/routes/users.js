const express = require('express');
const router = express.Router();
const usersController = require("../../src/controllers/users.js")

/* GET users listing. */
router.get('/', usersController.index);

module.exports = router;
