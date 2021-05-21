var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var session = require('express-session')

var indexRouter = require('./routes/index');

var usersRouter = require('./routes/users');

var adminRouter = require('./routes/admin');
var issuance=require('./routes/issuance');


var app = express();

//mongoose db connection here
mongoose.set('useFindAndModify', false);

mongoose.connect("mongodb+srv://trivia:abc.123@cluster0.36cr6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
  console.log("Connected to the database");
})
.catch(err =>{
  console.log("Cannot connect to the database",err);
  process.exit();
});

app.use(session(
  {
  name:'sid',
  secret: 'random message', //this is needed for making a session key
  saveUninitialized: false, //for login sessions set it to false, setting to true means store blank sessions
  resave: false, 
  cookie: {
      expires: 1800000 //or use maxAge ( takes in milliseconds value)
    }
  }
)
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/index', indexRouter);
app.use('/',usersRouter)
app.use('/admin', adminRouter);
// app.use('/users', usersRouter);
app.use('/issuance',issuance)


app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
