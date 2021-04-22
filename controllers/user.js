
const models = require('../db/models');
const bcrypt = require('bcrypt');
const passport = require('passport');
require('../passport_setup')(passport);
require('connect-flash');
const { validateUser } = require('../validators/signup');
const { isEmpty } = require('lodash');

exports.show_login = (req, res, next) => {
    res.render('user/login', { formData: {}, errors: {} } );
}

exports.show_signup = (req, res, next) => {
    res.render('user/signup', { formData: {}, errors: {} } );
}

const rerender_signup = (errors, req, res, next) => {
    res.render('user/signup', { formData: req.body, errors: errors } );
}

const generateHash = password => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

exports.signup_user = (req, res, next) => {
    let errors = {};
    return validateUser(errors, req).then(errors => {
        if(!isEmpty(errors)) {
            rerender_signup(errors, req, res, next);
        } else {
            const newUser = models.User.build({
                email: req.body.email,
                password: generateHash(req.body.password),
            });
            return newUser.save().then(result => {
                passport.authenticate('local', {
                    successRedirect: '/',
                    failureRedirect: '/signup',
                    failureFlash: true,
                })(req, res, next);
            })
        }
    })
}

exports.login_user = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true,
    })(req, res, next);
}

exports.logout_user = (req, res, next) => {
    req.logout();
    req.session.destroy();
    res.redirect("/");
}