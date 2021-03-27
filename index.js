const express = require('express');
const port = 3000;
var path = require('path');
var bodyParser = require('body-parser');

let indexRouter = require('./routes/index')
let studentRouter = require('./routes/students')
let teacherRouter = require('./routes/teachers')


let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/', indexRouter);
app.use('/students', studentRouter);
app.use('/teachers', teacherRouter);

app.listen(port, ()=>{
    console.log(`Port is running at ${port}`);
})



