const db = require('../models/index');

 
exports.student = (req,res) => {
 
db.Students.find().then((result)=>{
    console.log(JSON.stringify(result[0]))
    res.render('students', {
        title:"STUDENT",
        students:result[0]
    })
})  
}