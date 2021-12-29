"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
/* HOME ROUTES */
const homeController = require("./components/home/index");
const homeRouter = express_1.default.Router();
homeRouter.get('/', homeController.index);
homeRouter.get('/login', homeController.login);
homeRouter.get('/register', homeController.register);
/* ALL ROUTES */
module.exports = function (app) {
    app.use('/', homeRouter);
};
