const express = require('express');
const router = express.Router();

const cfg = require('../../configuration/serverconfig');

///
/// GET /api/auth
///
router.get('/', (req, res) => {
    res.send('hello from auth router');
});

///
/// GET /api/auth/login
///
router.get('/login', (req, res) => {
    res.send('hello from auth router/login. POST method only!');
});

///
/// POST /api/auth/login
///
router.post('/login', (req, res) => {
    let success = false;
    if(req.body.username && req.body.password) {
        if(req.body.username === cfg.username && req.body.password === cfg.password) {
            success = true;
        }
    }

    if(success) res.status(200).json({loginResult: 'success'});
    else res.status(200).json({loginResult: 'failed'});
});

module.exports = router;