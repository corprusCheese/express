'use strict';

/* routes */
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var itemsRouter = require('./routes/items');

module.exports = function(app) {
    app.use('/', indexRouter);
    app.use('/users', usersRouter);
    app.use('/items', itemsRouter);
}
