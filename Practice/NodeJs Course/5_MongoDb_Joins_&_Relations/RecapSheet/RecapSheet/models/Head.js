const mongoose = require('mongoose');

const headSchema = mongoose.Schema({
    hid: Number,
    headname: String,
    total: Number,
});

module.exports = mongoose.model('Head', headSchema);
