const User = require('../models/user');

class UserService {
    constructor() {
        this.model = User;
    }

    create({name, email, password}) {
        let newUser = {
            name: name,
            email: email,
            password: password
        }

        return this.model(newUser).save()
    }

    update(id, {name, email, password}) {
        let newUser = {
            name: name,
            email: email,
            password: password
        }

        return this.model.findByIdAndUpdate(id, newUser)
    }

    delete(id) {
        return this.model.findByIdAndDelete(id);
    }
}