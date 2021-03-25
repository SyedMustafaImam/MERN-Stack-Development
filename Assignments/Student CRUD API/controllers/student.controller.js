const db = require('../models/index');


exports.student = (req, res) => {

    db.Students.find().then((result) => {
        // console.log(JSON.stringify(result[0]))
        res.render('students', {
            title: "STUDENT",
            students: result[0]
        })
    })
}

exports.listStudent = (req, res) => {

    db.Students.find().then((result) => {
        // console.log(JSON.stringify(result[0]))
        res.render('partials/list', {
            title: "STUDENT",
            students: result[0]
        })
    })
}


exports.editStudent = (req, res) => {

    // console.log('Reg id :>> ', req.query.regid);

    db.Students.find({
        reg: req.query.regid
    }).then(result => {
        // console.log(result[0].name)
        res.render('partials/edit', {
            title: "EDIT STUDENT DETAILS",
            studata: result[0]
        })
    })
}


exports.saveStudent = async function (req, res) {

    let result = await db.Students.findOneAndUpdate({
        reg: req.body.reg
    }, {
        $set: req.body
    })
    res.send(result)
    res.end();
    // console.log(result)
}

// console.log(req)