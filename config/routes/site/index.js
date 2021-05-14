const express = require('express');
const router = express.Router();
const homeController = require("../../../src/controllers/home.js")

/* GET home page. */
router.get('/', homeController.index);

module.exports = router;
