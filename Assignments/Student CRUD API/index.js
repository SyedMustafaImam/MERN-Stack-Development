const express = require('express');
const port = 3000;
var app = express();

let indexRouter = require('./routes/index');
let studentRouter = require('./routes/student');
let teacherRouter= require('./routes/teachers');

app.set('view engine', 'ejs');




app.use('/',indexRouter);
app.use('/student',studentRouter);
app.use('/teacher',teacherRouter);

app.use(function(req, res, next) {
    next(createError(404));
  });

app.listen(port, ()=>{
    console.log('server running at port :>> ', port);
})