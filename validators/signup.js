
const validator = require('validator');
const models = require('./db/models');

const validateCreateUserFields = (errors, req) => {
    if (!validator.isEmail(req.body.email)) {
        errors["email"] = "Enter a valid email address";
    }

    if (!validator.isAscii(req.body.password)) {
        errors["password"] = "Enter a valid password";
    }

    if(!validator.isLength(req.body.password, {min: 8, max: 25})) {
        errors["password"] = "Password length must not be less than 8 characters";
    }
}

exports.validateUser = (errors, req) => {
    return new Promise((resolve, reject) => {
        validateCreateUserFields(errors, req);
        return models.User.findOne({
            where: {
                email: req.body.email,
            }
        }).then(user => {
            if(user !== null) {
                errors["email"] = "Email already exists. Try resetting your password"
            }
            resolve(errors);
        })
    })
}