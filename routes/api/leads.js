const express = require("express")
const router = express.Router();

const models = require('../../db/models');

router.get('/', (req, res) => {
    return models.Lead.findAll()
        .then(leads => res.status(200).send(leads));
})

module.exports = router