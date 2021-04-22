
const models = require('../db/models');

exports.show_login = function(req, res, next) {
    res.render('user/login', { formData: {}, errors: {} } );
}

exports.show_signup = function(req, res, next) {
    res.render('user/signup', { formData: {}, errors: {} } );
}

exports.signup_user = function(req, res, next) {
    
}

exports.login_user = function(req, res, next) {
  
}