const db = require('./models/index');

const express = require('express');
let app = express();
const port = 3100;

app.get('/', (req,res)=>{
// Adding a new Student in DB
    // let student = new db.Students ({
    //     name: "Syed Mustafa Imam",
    //     reg: 1812134,
    //     semester: 6,
    //     section: "A" 
    // });

    // student.save().then((result) => console.log('Student data Saved in Db : ', result))
    // .catch(err => console.log(err));

    // Retriving the list of the students.
db.Students.find().then((result)=>console.log(JSON.stringify(result)) )


    res.end('Data updated')

})


app.listen(port, ()=>{
    console.log(`Port is running at ${port}`);
})
