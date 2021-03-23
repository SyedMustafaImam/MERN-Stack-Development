const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://localhost:27017/academic', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = {
    Course: require('./Course')
}
