'use strict';

/* routes */
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var itemsRouter = require('./routes/items');

module.exports = function(app) {
    app.use('/', indexRouter);
    app.use('/api/v1/users', usersRouter);
    app.use('/api/v1/items', itemsRouter);
}
