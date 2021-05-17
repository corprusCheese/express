const Item = require('../models/item');

class ItemRepository {
    constructor() {
        this.model = Item;
    }

    findAll() {
        return this.model.find();
    }

    findById(id) {
        return this.model.findById(id);
    }
}

module.exports = new ItemRepository;