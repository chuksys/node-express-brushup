
exports.get_landing = function(req, res, next) {
    res.render('landing', { title: 'Node-Demo' });
}

exports.submit_lead = function(req, res, next) {
    console.log("Lead Email:", req.body.lead_email)
    res.redirect('/');
}