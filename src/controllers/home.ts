exports.index = function (req, res) {
    res.render('index', { title: 'Node.js application' });
}

exports.login = function (req, res) {
    res.render('login');
}

exports.register = function (req, res) {
    res.render('register');
}