const express = require('express');
const router = express.Router();

const axios = require('axios');
const _ = require('lodash');

router.get('/', (req, res) => {
    axios.get('http://lostfromthestart.com/shows.json')
        .then(returnData => {
            const data = returnData.data;
            
            const newShows = _.filter(data.shows, show => new Date(show.date) >= new Date());
            const newShowsOrdered = _.orderBy(newShows, ['date'], ['asc']);

            const oldShows = _.filter(data.shows, show => new Date(show.date) < new Date());
            const oldShowsOrdered = _.orderBy(oldShows, ['date'], ['desc']);

            res.status(200).send({
                old: oldShowsOrdered,
                new: newShowsOrdered
            }); 
        })
        .catch(err => { 
            console.log(err.message);
            res.status(400).send({
                success: false,
                error: err.message
            });
        });
});

module.exports = router;