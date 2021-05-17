const User = require('../models/user');

class UserRepository {
    constructor() {
        this.model = User;
    }

    findAll() {
        return this.model.find();
    }

    findById(id) {
        return this.model.findById(id);
    }
}

module.exports = new UserRepository;