const express = require('express');
const router = express.Router();
const usersController = require("../../../src/controllers/users.js")

/* GET all users listing. May take for a while. */
router.get('/', usersController.index);

/* POST query for create. */
router.post('/', usersController.create);

/* PUT query for update. */
router.put('/', usersController.update);

/* DELETE query for update. */
router.delete('/', usersController.delete);

/* GET and POST query for filter. */
router.get("/filter", usersController.filter);
router.post("/filter", usersController.filter);

module.exports = router;
