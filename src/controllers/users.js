const userRepository = require('../repositories/userRepository');

exports.index = function(req, res, next) {
    userRepository.findAll().then((todos) => {
        res.json(todos);
    }).catch((error) => console.log(error));
}

exports.create = function(req, res, next) {

}

exports.update = function(req, res, next) {
    res.send('update');
}

exports.delete = function(req, res, next) {
    res.send('delete');
}

exports.filter = function(req, res, next) {
    res.send('filter');
}