const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const packageChoice = req.body.packageChoice;
    const shirtSize = req.body.shirtSize;

    const url = 'https://docs.google.com/forms/d/e/1FAIpQLSdAX0oeQywf00E6qjD3mdfYx1Dn16SM03zuJNX9GH0lNa4ECQ/formResponse?';
    const post = `${url}entry.1323121120=${email}&entry.195040716=${name}&entry.646134820=${packageChoice}&entry.850923548=${shirtSize}`;

    axios.post(post)
        .then ((msg) => { 
            if(msg.status === 200) {
                return res.status(200).send({
                    success: true
                });
            } else {
                return res.status(200).send({
                    success: false,
                    message: 'Internal server error occurred'
                });
            }
        })
        .catch((exc) => {
            return res.status(200).send({
                success: false,
                message: exc.message
            });
        });
});

module.exports = router;