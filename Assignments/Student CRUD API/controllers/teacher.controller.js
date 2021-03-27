const db = require('../models/index');


exports.teacher = (req, res) => {

    db.Students.find().then((result) => {
        // console.log(JSON.stringify(result[0]))
        res.render('teachers', {
            title: "TEACHERS",
            students: result
        })
    })
}



exports.addStudent = (req, res) => {

res.render('partials/addnewStudent', {
            title: "ADDNEW STUDENT DETAILS",
        })

}


exports.addnewsave =  function (req, res) {

    console.log('req.body :>> ', req.body.name);
    let student = new db.Students ({
        name: req.body.name,
        reg: req.body.reg,
        semester: req.body.semester,
        section: req.body.section 
    });

    student.save().then((result) => 
    console.log('Student data Saved in Db : ', result)
    )
    .catch(err => console.log(err));
res.end()

}


exports.listStudent = (req, res) => {

    db.Students.find().then((result) => {
        // console.log(JSON.stringify(result[0]))
        res.render('partials/list', {
            title: "TEACHERS",
            students: result
        })
    })
}


exports.editStudent = (req, res) => {

    console.log('Reg id :>> ', req.query.regid);

    db.Students.findById(req.query.regid).then(result => {
        // console.log(result)
        res.render('partials/teachers_edit', {
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

exports.deleteStudent = function (req, res) {
    console.log('Delete req.body.id :>> ', req.body);
        let result =  db.Students.findByIdAndDelete(req.body.id).then(result => {
            console.log(`deleted Item=  ${result}`)
    res.end();

        })
       
        // // console.log(result)
    }

// console.log(req)