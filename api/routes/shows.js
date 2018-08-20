const express = require('express');
const router = express.Router();

const axios = require('axios');
const _ = require('lodash');

router.get('/', (req, res) => {
    axios.get('http://lostfromthestart.com/shows.json')
        .then(returnData => {
            const newShows = _.filter(returnData.data.shows, show => new Date(show.date) >= new Date());
            const newShowsOrdered = _.orderBy(newShows, ['date'], ['asc']);

            const oldShows = _.filter(returnData.data.shows, show => new Date(show.date) < new Date());
            const oldShowsOrdered = _.orderBy(oldShows, ['date'], ['desc']);

            res.status(200).send({
                old: oldShowsOrdered,
                new: newShowsOrdered
            }); 
        })
        .catch(err => res.status(400).send({
            success: false,
            error: err.message
        }));
});

module.exports = router;