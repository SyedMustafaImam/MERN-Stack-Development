const mongoose = require('mongoose');
const db = require('./models');

db.Course.find({ courseid: 1})
.then(courses => {
    console.log(JSON.stringify(courses, null, '  '));
    process.exit();
});

// db.Course.find({'coursecode': 1}).exec((err, course) => {
//     console.log(course);
//     process.exit();
// });