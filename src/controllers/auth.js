const User = require("../models/user");

class AuthController {
    login(req, res, next) {
        const passport = require('passport');
        const LocalStrategy = require('passport-local').Strategy;

        passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        }, function(username, password, done) {
            User.findOne({ username : username},function(err,user){
                return err
                    ? done(err)
                    : user
                        ? password === user.password
                            ? done(null, user)
                            : done(null, false, { message: 'Incorrect password.' })
                        : done(null, false, { message: 'Incorrect username.' });
            });
        }));
    }

    logout(req, res, next) {

    }

    register(req, res, next) {

    }
}

const authController = new AuthController();

module.exports = authController;