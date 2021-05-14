const user = require('../models/user');

class UserRepository {
    constructor(model) {
        this.model = model;
    }

    findAll() {
        return this.model.find();
    }
}

module.exports = new UserRepository(user);