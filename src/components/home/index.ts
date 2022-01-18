import { Request, Response } from 'express'

let dict = require('../utils/dictionary')

exports.index = function (req: Request, res: Response) {
    res.render('index', dict.dictionaryForPage(req, 'index'));
}

exports.login = function (req: Request, res: Response) {
    res.render('login', dict.dictionaryForPage(req, 'login'));
}

exports.register = function (req: Request, res: Response) {
    res.render('register', dict.dictionaryForPage(req, 'register'));
}