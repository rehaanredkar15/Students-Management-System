const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    fees: {
        type: String

    },
    mobno: {
        type: String
        
    },
    status: String
})

const userdb = mongoose.model('userdb',schema);

module.exports = userdb;

