const mongoose = require('mongoose');

const markSchema = mongoose.Schema({
    mid: Number,
    regno: String,
    hid: Number,
    marks: Number,
    student:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Student'
    }
});

module.exports = mongoose.model('Mark', markSchema);
