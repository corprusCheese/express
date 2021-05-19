class HomeController {
    index(req, res, next) {
        res.render('index', { title: 'TodoApp Again' });
    }
}

homeController = new HomeController()

module.exports = homeController