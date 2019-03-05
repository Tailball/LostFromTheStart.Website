const Mongoose = require('mongoose');

const ShowModel = new Mongoose.Schema({
    date: { 
        type: Date,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
});

const Show = Mongoose.model('show', ShowModel);
module.exports = Show;