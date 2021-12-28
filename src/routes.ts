const express = require('express');

/* HOME ROUTES */
const homeController = require("./controllers/home.ts");
const homeRouter = express.Router();
homeRouter.get('/', homeController.index);
homeRouter.get('/login',  homeController.login)
homeRouter.get('/register',  homeController.register)

/* ALL ROUTES */
module.exports = function(app) {
    app.use('/', homeRouter);
}