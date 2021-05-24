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

    findByName(name) {
        return this.model.findOne({name: name})
    }


    getDefaultRoleId(){
        // пока неправильно
        return this.findByName('user')._id
    }

    getAdminRoleId(){
        return 2
    }
}

module.exports = new RoleRepository;