
const express = require('express');
const app = express();


// подключение
const mongoose = require("mongoose");

// для моделей
const Schema = mongoose.Schema;

mongoose.connect("mongodb://corprusCheese:secret@0.0.0.0:27017", {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

// роуты
require("./src/routes.ts")(app)

// вьюшки
app.set('view engine', 'pug');
app.set('views', __dirname + '/src/views');
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static( __dirname + '/public'));

// сервер
app.listen(5000, () => console.log('Server is up and running'));