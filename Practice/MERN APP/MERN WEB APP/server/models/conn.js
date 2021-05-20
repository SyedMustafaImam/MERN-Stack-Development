let mongoose = require('mongoose');

//mongoose db connection here
mongoose.set('useFindAndModify', false);

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to the database");
    })
    .catch(err => {
        console.log("Cannot connect to the database", err);
        process.exit();
    });
