
const models = require('../db/models');

exports.get_landing = (req, res, next) => {
    res.render('landing', { title: 'Node-Demo' , user: req.user});
}

exports.submit_lead = (req, res, next) => {
    return models.Lead.create({
        email: req.body.email,
    }).then(lead => {
        res.redirect('/leads');
    })
}

exports.show_leads = (req, res, next) => {
    return models.Lead.findAll().then(leads => {
        res.render('leads', {title: 'Leads', leads: leads});
    })
}

exports.show_lead = (req, res, next) => {
    return models.Lead.findOne({
        where: ({
            id: req.params.id,
        })
    }).then(lead => {
        res.render('leads/lead', {lead: lead})
    })
}

exports.show_edit_lead = (req, res, next) => {
    return models.Lead.findOne({
        where: ({
            id: req.params.id,
        })
    }).then(lead => {
        res.render('leads/edit', {lead: lead})
    }) 
}

exports.edit_lead = (req, res, next) => {
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

exports.delete_lead = (req, res, next) => {
    return models.Lead.destroy({
        where: ({
            id: req.params.id
        })
    }).then(result => {
        res.redirect("/leads");
    })
}

exports.delete_lead_json = (req, res, next) => {
    return models.Lead.destroy({
        where: ({
            id: req.params.id
        })
    }).then(result => {
        res.send({message: "Success"})
    })
}