const Role = require('../models/role');

class RoleRepository {
    constructor() {
        this.model = Role;
    }

    findAll() {
        return this.model.find();
    }

    findById(id) {
        return this.model.findById(id);
    }
}

module.exports = new RoleRepository;