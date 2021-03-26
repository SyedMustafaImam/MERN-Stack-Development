const db = require('../models/index');


exports.student = (req, res) => {

    db.Students.find().then((result) => {
        // console.log(JSON.stringify(result[0]))
        res.render('students', {
            title: "STUDENT",
            students: result
        })
    })
}

exports.listStudent = (req, res) => {

    db.Students.find().then((result) => {
        // console.log(JSON.stringify(result[0]))
        res.render('partials/list', {
            title: "STUDENT",
            students: result
        })
    })
}


exports.editStudent = (req, res) => {

    console.log('Reg id :>> ', req.query.regid);

    db.Students.findById(req.query.regid).then(result => {
        // console.log(result)
        res.render('partials/edit', {
            title: "EDIT STUDENT DETAILS",
            studata: result
        })
    })
}


exports.saveStudent = async function (req, res) {
// console.log('req.body.id :>> ', req.body.id);
    let result = await db.Students.findByIdAndUpdate(
        req.body.id
    , {
        $set: req.body
    })
    res.send(result)
    res.end();
    // // console.log(result)
}

// console.log(req)