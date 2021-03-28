const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/recapsheet', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify:false 
});

module.exports = {
    Student: require('./Student'),
    Mark: require('./Mark'),
    Head: require('./Head'),
    Grade: require('./Grade'),
}