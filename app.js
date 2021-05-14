const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const app = express();

const config = require('./config/config.js');

mongoose.connect(config.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// hardcode
/*const User = require('./src/models/user');
let newUser = new User({
  _id: mongoose.Types.ObjectId(1),
  email: "samson20100@yandex.ru",
  password: "password",
  name: "Nikita"
})
newUser.save();*/

/* routes */
require("./config/routes.js")(app)

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = 3000

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})

module.exports = app;
