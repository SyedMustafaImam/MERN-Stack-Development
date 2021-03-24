const mongo = "mongodb+srv://syedmustafa:abc.123@cluster0.tslbx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
let mongoose = require('mongoose');

mongoose.connect(mongo, {useNewUrlParser:true, useUnifiedTopology:true })
.then(result=>console.log(`Database Connected ${result}`)).catch(err=>console.log(err));

module.exports = {Students: require('./student.model')}