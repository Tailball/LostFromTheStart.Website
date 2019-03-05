const express = require('express');
const router = express.Router();

const axios = require('axios');
const _ = require('lodash');

const Show = require('../../mongoDB/models/Show');

//
// GET api/shows
//
router.get('/', (req, res) => {
    if(req.query.mode === 'formatted')
        Show.find()
            .then(shows => {
                if(shows.length === 0) {
                    res.status(404).json({success: true, payload: []});
                }
                else {
                    const newShows = _.filter(shows, show => new Date(show.date) >= new Date());
                    const newShowsOrdered = _.orderBy(newShows, ['date'], ['asc']);

                    const oldShows = _.filter(shows, show => new Date(show.date) < new Date());
                    const oldShowsOrdered = _.orderBy(oldShows, ['date'], ['desc']);
                    res.status(200).json({success: true, payload: { old: oldShowsOrdered, new: newShowsOrdered }});
                } 
            })
            .catch(err => res.status(500).json({success: false, message: err.message}));

    else if(req.query.mode === 'admin')
        Show.find()
            .then(shows => {
                res.status(200).json({success: true, payload: shows});
            })
            .catch(err => res.status(500).json({success: false, message: err.message}));
});


//
// POST api/shows
//
router.post('/', (req, res) => {
    switch(req.body.action) {
        case 'POST':
            postShow(req, res);
            break;

        case 'DELETE':
            deleteShow(req, res);
            break;
    }
});

const postShow = (req, res) => {
    console.log(req.body);

    const show = new Show({ 
        date: req.body.date,
        name: req.body.name,
        location: req.body.location
    });

    show.save((err, success) => {
        if(err) res.status(500).json({success: false, message: err.message});
        else res.status(200).json({success: true, payload: success});
    });
}

const deleteShow = (req, res) => {
    console.log(req.body);

    Show.findOne({ _id: req.body.id }).exec()
        .then(show => {

            console.log(show);

            if(!show) {
                res.status(404).json({success: true});
            }
            else {
                
                Show.deleteOne({ _id: req.body.id }).exec()
                    .then(delRes => {
                        res.status(200).json({success: true})
                    })
                    .catch(err => res.status(500).json({success: false, line: 86, message: err.message}));

            }
        })
        .catch(err => {
            res.status(500).json({success: false, line: 90, message: err.message});
        });
}

module.exports = router;