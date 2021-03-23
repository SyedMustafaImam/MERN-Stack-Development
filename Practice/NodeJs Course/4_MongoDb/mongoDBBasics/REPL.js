const mongoose = require('mongoose');
const db = require('./models');

db.Course.find()
.then(cours => {
    console.log(JSON.stringify(cours, null, '  '));
    process.exit();
});

// db.Course.find({'coursecode': 1}).exec((err, course) => {
//     console.log(course);
//     process.exit();
// });