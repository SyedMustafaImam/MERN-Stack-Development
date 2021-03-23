const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://localhost:27017/academic', { useNewUrlParser: true, useUnifiedTopology: true }).then(
    ()=>{console.log('DB COnnected')}).catch(err => console.log(err)
);

module.exports = {
    Course: require('./Course')
}