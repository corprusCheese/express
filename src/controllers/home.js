
class HomeController {
    index(req, res, next) {
        res.render('index', { title: 'Node.js application' });
    }
    login(req, res, next) {
        res.render('login');
    }
    register(req, res, next) {
        res.render('register');
    }
}

homeController = new HomeController()

module.exports = homeController