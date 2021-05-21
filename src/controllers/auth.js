const User = require("../models/user");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

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
        passport.use('login', new LocalStrategy({
            passReqToCallback : true
        }, function(req, done) {
            User.findOne({ name : req.query['name']},function(err,user){
                return err
                    ? done(err)
                    : user
                        ? req.query['password'] === user.password
                            ? done(null, user)
                            : done(null, false, { message: 'Incorrect password.' })
                        : done(null, false, { message: 'Incorrect username.' });
            });
        }));
    }

    logout(req, res, next) {
        req.logout();
        res.redirect('/');
    }

    register(req, res, next) {
        passport.use('register', new LocalStrategy({
                passReqToCallback : true
            },
            function(req, done) {
                process.nextTick(function(){
                    User.findOne({'name':req.query['name'], 'email':req.query['email']},function(err, user) {
                        if (err){
                            console.log('Error in SignUp: '+err);
                            return done(err);
                        }
                        // already exists
                        if (user) {
                            console.log('User already exists');
                            return done(null, false,
                                req.flash('message','User Already Exists'));
                        } else {
                            const newUser = new User();
                            newUser.username = req.param('name');
                            newUser.password = req.param('password');
                            newUser.email = req.param('email');

                            newUser.save(function(err) {
                                if (err){
                                    console.log('Error in Saving user: '+err);
                                    throw err;
                                }
                                console.log('User Registration successfully done');
                                return done(null, newUser);
                            });
                        }
                    });
                });
            })
        )
    }
}

const authController = new AuthController();

module.exports = authController;