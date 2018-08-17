const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const choice = req.body.choice;
    const remarks = req.body.remarks;

    console.log(`Message received: NAME ${name} - EMAIL ${email} - CHOICE ${choice} - REMARKS ${remarks}`);

    res.status(200).send({
        success: true
    })
});

module.exports = router;