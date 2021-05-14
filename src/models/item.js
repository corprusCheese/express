const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    text: String,
    active: {
        type: Boolean,
        default: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    changed: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, // связь 1 ко многим
        ref: "User"
    }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;