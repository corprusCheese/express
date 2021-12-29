"use strict";
const dict = require('../utils/dict');
exports.index = function (req, res) {
    res.render('index', dict.dictionaryForPage(req, 'index'));
};
exports.login = function (req, res) {
    res.render('login', dict.dictionaryForPage(req, 'login'));
};
exports.register = function (req, res) {
    res.render('register', dict.dictionaryForPage(req, 'register'));
};
