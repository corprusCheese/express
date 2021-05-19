const Item = require('../models/item');

class ItemService {
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

module.exports = new ItemService();