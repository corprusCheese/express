const Role = require('../models/role');
const mongoose = require("mongoose");

class RoleService {
    constructor() {
        this.model = Role;
    }

    create({name}) {

        let newRole = {
            _id: new mongoose.Types.ObjectId(),
            name: name,
        }

        return this.model(newRole).save()
    }

    update(id, {name, active = 1}) {
        let newRole = {
            name: name,
            active: active
        }

        return this.model.findByIdAndUpdate(id, newRole)
    }

    delete(id) {
        return this.model.findByIdAndDelete(id);
    }
}

module.exports = new RoleService();