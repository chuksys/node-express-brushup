
const models = require('../db/models');

exports.get_landing = function(req, res, next) {
    res.render('landing', { title: 'Node-Demo' });
}

exports.submit_lead = function(req, res, next) {
    return models.Lead.create({
        email: req.body.email,
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

exports.show_edit_lead = function(req, res, next) {
    return models.Lead.findOne({
        where: ({
            id: req.params.id,
        })
    }).then(lead => {
        res.render('leads/edit', {lead: lead})
    }) 
}

exports.edit_lead = function(req, res, next) {
    return models.Lead.update({
        email: req.body.email
    },{
        where: ({
            id: req.params.id,
        })
    }).then(result => {
        res.redirect('/leads');
    })
}

exports.delete_lead = function(req, res, next) {
    return models.Lead.destroy({
        where: ({
            id: req.params.id
        })
    }).then(result => {
        res.redirect("/leads");
    })
}