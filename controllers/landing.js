
const models = require('../db/models');

exports.get_landing = function(req, res, next) {
    res.render('landing', { title: 'Node-Demo' });
}

exports.submit_lead = function(req, res, next) {
    return models.Lead.create({
        email: req.body.lead_email,
    }).then(lead => {
        res.redirect('/leads');
    })
}

exports.show_leads = function(req, res, next) {
    return models.Lead.findAll().then(leads => {
        res.render('leads', {title: 'Leads', leads: leads});
    })
}

exports.show_lead = function(req, res, next) {
    return models.Lead.findOne({
        where: ({
            id: req.params.id,
        })
    }).then(lead => {
        res.render('leads/lead', {lead: lead})
    })
}