let mongoose = require('mongoose');

const mongo = "mongodb+srv://syed:abc.123@cluster0.tslbx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

// mongoose.set('useFindAndModify', false);
mongoose.connect(mongo, {useNewUrlParser:true, useUnifiedTopology:true })
.then(
    result=>console.log(`Database Connected`)
    ).catch(err=>console.log(err));

module.exports = {
    User: require('./users.model'),
}