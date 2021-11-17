const mongoose = require('mongoose');

const alienSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    sub: {
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports = mongoose.model('Alien', alienSchema);//here 'Alien' is the refrence in the routes/aliens.js file which is referred to this file.
