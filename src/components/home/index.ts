const dict = require('../utils/dict')

exports.index = function (req: any, res: { render: (arg0: string, arg1: any) => void; }) {
    res.render('index', dict.dictionaryForPage(req, 'index'));
}

exports.login = function (req: any, res: { render: (arg0: string, arg1: any) => void; }) {
    res.render('login', dict.dictionaryForPage(req, 'login'));
}

exports.register = function (req: any, res: { render: (arg0: string, arg1: any) => void; }) {
    res.render('register', dict.dictionaryForPage(req, 'register'));
}