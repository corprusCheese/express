const express = require('express');
const router = express.Router();
const authController = require("../../../src/controllers/auth.js")

/* POST query login. */
router.post('/login', authController.login);

/* POST query register. */
router.post('/register', authController.register);

/* POST query logout. */
router.post('/logout', authController.logout);

/* get current user*/
router.get('/info', authController.getCurrentUser);


module.exports = router;

