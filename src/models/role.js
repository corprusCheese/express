const mongoose = require('mongoose');

const { Schema } = mongoose;

const roleSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    active: {
        type: Boolean,
        default: true
    },
    created: {
        type: Date,
        default: Date.now
    },
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;