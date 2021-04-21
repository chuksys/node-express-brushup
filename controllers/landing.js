
const models = require('../db/models');

exports.get_landing = function(req, res, next) {
    res.render('landing', { title: 'Node-Demo' });
}

exports.submit_lead = function(req, res, next) {
    return models.Lead.create({
        email: req.body.lead_email,
    }).then(lead => {
        res.redirect('/');
    })
}