const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    regno: String, 
    name: String, 
    marks:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mark'
    }]
});

module.exports = mongoose.model('Student', studentSchema);
