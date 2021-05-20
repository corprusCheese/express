const express = require('express');
const router = express.Router();
const homeController = require("../../../src/controllers/home.js")

/* GET home page. */
router.get('/', homeController.index);

/* Login form */
router.get('/login',  homeController.login)

/* Login form */
router.get('/register',  homeController.register)

module.exports = router;
