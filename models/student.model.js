const mongoose = require('mongoose');

const students = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    reg: {
        type: Number,
        required: true,

    },
    semester: {
        type: Number,
        required: true

    },
    section: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Student', students);