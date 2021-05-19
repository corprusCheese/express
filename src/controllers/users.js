const userRepository = require('../repositories/userRepository');
const userService = require('../services/userService')

class UserController {

    index(req, res, next) {
        userRepository.findAll().then((result) => {
            res.json(result);
        }).catch((error) => console.log(error));

        req.query
    }

    create(req, res, next) {
        let [name, email, password] = [req.query.name, req.query.email, req.query.password];
        userService.create({name: name, email:email, password:password})
    }

    update(req, res, next) {
        res.send('update');
    }

    delete(req, res, next) {
        res.send('delete');
    }

    filter(req, res, next) {
        res.send('filter');
    }
}

const userController = new UserController()

module.exports = userController;