const User = require('../models/user');
const mongoose = require("mongoose");
const roleRepository = require('../repositories/roleRepository')

class UserService {
    constructor() {
        this.model = User;
    }

    create({name, email, password}) {
        let newUser = {
            _id: new mongoose.Types.ObjectId(),
            name: name,
            email: email,
            password: password,
            role: roleRepository.getDefaultRoleId()
        }

        return this.model(newUser).save()
    }

    update(id, {name, email, password}) {
        let newUser = {
            name: name,
            email: email,
            password: password,
            role: roleRepository.getDefaultRoleId()
        }

        return this.model.findByIdAndUpdate(id, newUser)
    }

    delete(id) {
        return this.model.findByIdAndDelete(id);
    }
}

module.exports = new UserService();