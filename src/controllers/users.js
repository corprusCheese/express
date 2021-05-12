exports.index = function(req, res, next) {
    collection.find().toArray(function(err, results){

        console.log(results);
        client.close();
    });
    res.send('respond with a resource');
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