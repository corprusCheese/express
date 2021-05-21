'use strict';

/* routes */
const indexRouter = require('./routes/site/index');
const usersRouter = require('./routes/api/users');
const itemsRouter = require('./routes/api/items');
const authRouter = require('./routes/api/auth');

module.exports = function(app) {
    app.use('/', indexRouter);
    app.use('/api/v1/users', usersRouter);
    app.use('/api/v1/items', itemsRouter);
    app.use('/api/auth', authRouter);
}
