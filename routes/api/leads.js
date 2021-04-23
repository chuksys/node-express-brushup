const express = require("express")
const router = express.Router();

const models = require('../../db/models');

router.get('/', (req, res) => {
    return models.Lead.findAll()
        .then(leads => res.status(200).send(leads));
})

router.post('/', (req, res) => {
    return models.Lead.create({
        email: req.body.email
    }).then(lead => res.status(200).send(lead)); 
})

module.exports = router