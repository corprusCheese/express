const mongoose = require('mongoose');

const config = require('./config/config.js');

mongoose.connect(config.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose