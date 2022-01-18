import express, {Router} from 'express';

/* HOME ROUTES */
const homeController = require("./components/home/index");

const homeRouter: Router = express.Router()
homeRouter.get('/', homeController.index)
homeRouter.get('/login',  homeController.login)
homeRouter.get('/register',  homeController.register)

/* AUTH ROUTES */
const authRouter: Router = express.Router()
authRouter.post('/login')
authRouter.post('/register')
authRouter.post('/logout')

/* PERSONAL CHANGES ROUTES */
const personalRouter: Router = express.Router()
personalRouter.post('/name')
personalRouter.post('/password')
personalRouter.delete('/delete')

/* ALL ROUTES */
module.exports = function(app: { use: (arg0: string, arg1: Router) => void; }) {
    app.use('/', homeRouter)
    app.use('/auth', authRouter)
    app.use('/change', personalRouter)
}