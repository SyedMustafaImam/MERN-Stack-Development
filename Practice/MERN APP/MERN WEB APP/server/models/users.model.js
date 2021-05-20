const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Users = new Schema({
    firstName: { type: String, required: true, max: 10 },
    lastName: { type: String, required: true, max: 10 },
    username: { type: String, required: true, max: 10 },
    country: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
});

module.exports = mongoose.model('Users', Users);
