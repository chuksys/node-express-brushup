let createError = require('http-errors');

exports.LoggedIn = (req, res, next) => {
    if(req.user)
        next();
    else    
        next(createError(404, "Page doesn't exist"));
}

exports.isAdmin = (req, res, next) => {
    if(req.user && req.user.is_admin == true)
        next();
    else
        next(createError(404, "Page doesn't exist"));
}