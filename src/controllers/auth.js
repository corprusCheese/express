const User = require("../models/user");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const queryService = require('../services/queryService')
const userService = require('../services/userService')


passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

class AuthController {
    getCurrentUser(req, res, next) { }

    login(req, res, next) {
        let params = queryService.postParams(req)
        console.log(params)
        res.redirect('/');
    }

    logout(req, res, next) {
        req.logout();
        res.redirect('/');
    }

    register(req, res, next) {
        queryService.postParams(req, (result) => {
            userService.create({ name: result.email, email: result.email, password: result.password})
            res.redirect('/');
        })
    }
}

const authController = new AuthController();

module.exports = authController;