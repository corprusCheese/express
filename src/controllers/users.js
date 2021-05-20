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
        let [id, name, email, password] = [req.query.id, req.query.name, req.query.email, req.query.password];
        userService.update(id, {name: name, email:email, password:password})
    }

    delete(req, res, next) {
        let id = req.query.id;
        userService.delete(id)
    }

    filter(req, res, next) {
        res.send('filter');
    }
}

const userController = new UserController()

module.exports = userController;