exports.index = function(req, res, next) {
    res.send('items');
}

exports.create = function(req, res, next) {
    res.send('create');
}

exports.update = function(req, res, next) {
    res.send('update');
}

exports.delete = function(req, res, next) {
    res.send('delete');
}

exports.mock = function(req, res, next) {
    res.send('mock');
}

exports.filter = function(req, res, next) {
    res.send('filter');
}