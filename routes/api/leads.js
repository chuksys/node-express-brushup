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

router.put('/:id', (req, res) => {
    return models.Lead.findOne({
        where: {
            id: req.params.id
        }
    }).then(lead => {
        if(lead != null) {
            return models.Lead.update(
                {
                   email: req.body.email
                }, {
                    where: {
                        id: lead.id,
                    }
                })
            .then(lead => res.status(201).send({ Success: true }))
        } else {
            res.status(403).send({message: "Resource does not exist"});
        }
    })
})

router.delete('/:id', (req, res) => {
    return models.Lead.findOne({
        where: {
            id: req.params.id
        }
    }).then(lead => {
        if(lead != null) {
            return models.Lead.destroy({
                where: {
                    id: lead.id,
                }
            })
            .then(lead => res.status(201).send({ Success: true }))
        } else {
            res.status(403).send({message: "Resource does not exist"});
        }
    })
})

module.exports = router