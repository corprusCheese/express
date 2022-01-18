import express = require('express');

const app = express();

// локализация
const i18next = require('i18next');
const i18nextMiddleware = require('i18next-http-middleware');
const Backend = require('i18next-node-fs-backend');

i18next.use(Backend).use(i18nextMiddleware.LanguageDetector).init({
    debug: false,
    preload: [/*"en",*/ "ru"],
    fallbackLng: 'ru',
    backend: {
        loadPath: './locales/{{lng}}/translation.json'
    },
});
app.use(i18nextMiddleware.handle(i18next));


// подключение
const mongoose = require("mongoose");

// для моделей
// const Schema = mongoose.Schema;

mongoose.connect("mongodb://corprusCheese:secret@0.0.0.0:27017", {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

// роуты
require("./src/routes")(app)

// вьюшки
app.set('view engine', 'pug');
app.set('views', __dirname + '/src/views');
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static( __dirname + '/public'));

// иконка
const favicon = require('serve-favicon');
app.use(favicon(__dirname + '/public/images/favicon.ico'));

// сервер
app.listen(5000, () => console.log('Server is up and running'));