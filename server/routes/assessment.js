const express = require ('express');
const User = require ('../models/user')
const router = express.Router();

router
    .get('/', (req, res) => {
        try {
            const bmi = Assessment.getallBMI();
            res.send(bmi);
        } catch (err) {
            res.status (401).send({message: err.message});
        }
    })

module.exports = router;