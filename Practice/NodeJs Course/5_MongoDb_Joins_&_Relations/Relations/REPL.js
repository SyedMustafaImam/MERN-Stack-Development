const mongoose = require('mongoose')
const db =  require('./models')
const Student = require('./models/Student')


// // Storeing the student's object id in the marks collection
// // ---------------------------------------------------------
// db.Student.find().then(function(res){
//     // console.log(JSON.stringify(res, null, '  '));
//     // process.exit();
//     res.map(async student => {
//         console.log(student.regno)
// await db.Mark.updateMany({regno: student.regno},
// {    $set:{
//         student:student._id
//     }}
//     )
//     })
// })


// // Populating the records of the students from the database into the marks collection
// // ---------------------------------------------------------------------------------
// db.Mark.find()
// .populate('student')
// .then(
//     marks=>console.log(JSON.stringify(marks, null, '\t'))
//     )


// // Updating the Students Collections by embedding the marks of each Student from marks schema
// // --------------------------------------------------------------------------------------
// db.Student.find().then(students => {
//         students.map(async student => {
//             let studentMarks = await db.Mark.find({regno: student.regno}).select({ _id: 1 });
    
//             await db.Student.updateOne({ regno: student.regno }, {
//                 $push: {
//                     marks: studentMarks
//                 }
//             })
//             console.log(student.regno);
    
//         })
//     });


// Populating Students Marks
// // --------------------------------------------------------------------------------------
// db.Student.find()
//     .populate('marks')
//     .then(students => {
//         console.log(JSON.stringify(students, null, '\t' ));
// })

db.Student.aggregate([
 {   $lookup:{
        from : 'marks',
        localField:'regno',
        foreignField: 'regno',
        as: 'score'
    }  }
]).then(students => {
    console.log(JSON.stringify(students, null, ' '))
    process.exit();
}).catch(err =>console.log(err))