import express from 'express';

/* HOME ROUTES */
const homeController = require("./components/home/index");
const homeRouter = express.Router();
homeRouter.get('/', homeController.index);
homeRouter.get('/login',  homeController.login)
homeRouter.get('/register',  homeController.register)

/* ALL ROUTES */
module.exports = function(app: { use: (arg0: string, arg1: any) => void; }) {
    app.use('/', homeRouter);
}