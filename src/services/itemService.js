const Item = require('../models/item');

class UserService {
    constructor() {
        this.model = Item;
    }

    create(text) {

    }

    update(id, text) {
    }

    delete(id) {
        return this.model.findByIdAndDelete(id);
    }
}