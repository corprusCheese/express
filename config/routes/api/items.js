const express = require('express');
const router = express.Router();
const itemsController = require("../../../src/controllers/items.js")

/* GET items listing. */
router.get('/', itemsController.index);

/* POST query for create. */
router.post('/', itemsController.create);

/* PUT query for update. */
router.put('/', itemsController.update);

/* DELETE query for update. */
router.delete('/', itemsController.delete);

/* GET and POST query for filter. */
router.get("/filter", itemsController.filter);
router.post("/filter", itemsController.filter);

module.exports = router;